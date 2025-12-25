#!/usr/bin/env npx tsx
/**
 * Cache Warming Script for ISR Pages
 *
 * This script warms the cache for all engine pages after deployment.
 * It fetches all engine slugs from the database and makes HTTP requests
 * to each page URL to trigger ISR generation.
 *
 * Usage:
 *   pnpm warm-cache                    # Warm localhost:3000
 *   pnpm warm-cache:production         # Warm production URL
 *   BASE_URL=https://your-site.com pnpm warm-cache
 *
 * Environment Variables:
 *   BASE_URL - Base URL to warm (default: http://localhost:3000)
 *   CONCURRENCY - Number of parallel requests (default: 10)
 *   DATABASE_URL - PostgreSQL connection string (required)
 */

import { Pool } from "pg";

// Configuration
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const CONCURRENCY = parseInt(process.env.CONCURRENCY || "10", 10);
const TIMEOUT_MS = 30000; // 30 seconds per request

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  dim: "\x1b[2m",
};

interface EngineSlug {
  brand: string;
  engine: string;
}

interface WarmResult {
  url: string;
  success: boolean;
  status?: number;
  error?: string;
  duration: number;
}

/**
 * Fetch all engine slugs from the database
 */
async function getAllEngineSlugs(): Promise<EngineSlug[]> {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is required");
  }

  const pool = new Pool({ connectionString: databaseUrl });

  try {
    const result = await pool.query<{ brand: string; engine: string }>(
      "SELECT brand, engine_code AS engine FROM engines",
    );
    return result.rows;
  } finally {
    await pool.end();
  }
}

/**
 * Warm a single page by making an HTTP request
 */
async function warmPage(url: string): Promise<WarmResult> {
  const startTime = Date.now();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "User-Agent": "EngineCode-CacheWarmer/1.0",
      },
    });

    clearTimeout(timeoutId);

    return {
      url,
      success: response.ok,
      status: response.status,
      duration: Date.now() - startTime,
    };
  } catch (error) {
    return {
      url,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      duration: Date.now() - startTime,
    };
  }
}

/**
 * Process items with limited concurrency
 */
async function processWithConcurrency<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  concurrency: number,
  onProgress?: (completed: number, total: number, result: R) => void,
): Promise<R[]> {
  const results: R[] = [];
  let completed = 0;
  let index = 0;

  async function processNext(): Promise<void> {
    while (index < items.length) {
      const currentIndex = index++;
      const result = await processor(items[currentIndex]);
      results[currentIndex] = result;
      completed++;
      onProgress?.(completed, items.length, result);
    }
  }

  // Start `concurrency` number of workers
  const workers = Array(Math.min(concurrency, items.length))
    .fill(null)
    .map(() => processNext());

  await Promise.all(workers);
  return results;
}

/**
 * Build URL for an engine page
 */
function buildEngineUrl(brand: string, engine: string): string {
  return `${BASE_URL}/${brand}/${engine}-specs`;
}

/**
 * Format duration in human-readable format
 */
function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log(`\n${colors.blue}🔥 Cache Warming Script${colors.reset}`);
  console.log(`${colors.dim}Base URL: ${BASE_URL}${colors.reset}`);
  console.log(`${colors.dim}Concurrency: ${CONCURRENCY}${colors.reset}\n`);

  // Fetch all slugs
  console.log("📦 Fetching engine slugs from database...");
  const slugs = await getAllEngineSlugs();
  console.log(
    `${colors.green}✓ Found ${slugs.length} engines${colors.reset}\n`,
  );

  if (slugs.length === 0) {
    console.log(`${colors.yellow}⚠ No engines found. Exiting.${colors.reset}`);
    process.exit(0);
  }

  // Build URLs
  const urls = slugs.map(({ brand, engine }) => buildEngineUrl(brand, engine));

  // Warm cache
  console.log(
    `🚀 Starting cache warming with ${CONCURRENCY} concurrent requests...\n`,
  );
  const startTime = Date.now();
  let successCount = 0;
  let failCount = 0;

  const results = await processWithConcurrency(
    urls,
    warmPage,
    CONCURRENCY,
    (completed, total, result) => {
      if (result.success) {
        successCount++;
        // Only log every 100 pages or failures to reduce noise
        if (completed % 100 === 0 || completed === total) {
          const percent = ((completed / total) * 100).toFixed(1);
          console.log(
            `${colors.dim}[${percent}%]${colors.reset} ${completed}/${total} pages warmed`,
          );
        }
      } else {
        failCount++;
        console.log(
          `${colors.red}✗ FAILED${colors.reset} ${result.url} - ${result.error || `HTTP ${result.status}`}`,
        );
      }
    },
  );

  const totalDuration = Date.now() - startTime;

  // Summary
  console.log(`\n${"─".repeat(50)}`);
  console.log(`${colors.blue}📊 Cache Warming Complete${colors.reset}\n`);
  console.log(`   Total pages:    ${results.length}`);
  console.log(
    `   ${colors.green}Successful:    ${successCount}${colors.reset}`,
  );
  if (failCount > 0) {
    console.log(`   ${colors.red}Failed:        ${failCount}${colors.reset}`);
  }
  console.log(`   Duration:       ${formatDuration(totalDuration)}`);
  console.log(
    `   Avg per page:   ${formatDuration(Math.round(totalDuration / results.length))}`,
  );
  console.log();

  // Exit with error code if there were failures
  if (failCount > 0) {
    console.log(
      `${colors.yellow}⚠ Some pages failed to warm. Check the logs above.${colors.reset}\n`,
    );
    process.exit(1);
  }

  console.log(
    `${colors.green}✓ All pages warmed successfully!${colors.reset}\n`,
  );
}

main().catch((error) => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
