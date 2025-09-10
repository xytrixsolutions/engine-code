// "use server";
// import { pageData } from "@/app/data/data";
//
// export const getEnginePageData = async (brand: string, engine: string) => {
//   const brandData = pageData[brand];
//
//   if (!brandData || !brandData.engines || !brandData.engines[engine]) {
//     return null;
//   }
//
//   const engineData = brandData.engines[engine];
//
//   return {
//     ...engineData,
//     researchResources: {
//       ...brandData.researchResources,
//     },
//   };
// };
// export const getAllEngineSlugs = async (): Promise<
//   { brand: string; engine: string }[]
// > => {
//   const slugs = [];
//
//   for (const brandKey in pageData) {
//     const brandData = pageData[brandKey];
//
//     for (const engineKey in brandData.engines) {
//       slugs.push({
//         brand: brandKey,
//         engine: engineKey,
//       });
//     }
//   }
//
//   return slugs;
// };
//
// export const getAllBrands = async () => {
//   return Object.keys(pageData).map((brand) => ({
//     id: brand,
//     name: brand.charAt(0).toUpperCase() + brand.slice(1),
//     engineCount: Object.keys(pageData[brand].engines).length,
//   }));
// };
//
// export const getEnginesForBrand = async (brand: string) => {
//   const brandData = pageData[brand];
//   if (!brandData) return [];
//
//   return Object.keys(brandData.engines).map((engine) => ({
//     id: engine,
//     name: engine.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
//   }));
// };
// lib/engine-data.ts
import pool from './db/client';

type BrandInfo = {
  id: string;
  name: string;
  engineCount: number;
};

type EngineSlug = {
  brand: string;
  engine: string;
};

type EngineListItem = {
  id: string;
  name: string;
};

/**
 * Fetch full engine page data (with researchResources injected)
 */
export const getEnginePageData = async (
  brand: string,
  engine: string
): Promise<EnginePageData | null> => {
  try {
    const query = `
      SELECT data FROM engines
      WHERE brand = $1 AND engine_code = $2
    `;

    const result = await pool.query<{ data: EnginePageData }>(query, [
      brand,
      engine,
    ]);

    if (result.rows.length === 0) return null;

    const engineData = result.rows[0].data;

    // Inject researchResources if not already present
    return {
      ...engineData,
      researchResources: engineData.researchResources || {
        serviceManual: null,
        serviceBulletin: null,
      },
    };
  } catch (error) {
    console.error('DB error fetching engine:', brand, engine, error);
    return null;
  }
};

/**
 * Get all engine slugs for static generation
 */
export const getAllEngineSlugs = async (): Promise<EngineSlug[]> => {
  const query = `
    SELECT brand, engine_code AS engine FROM engines
  `;

  try {
    const result = await pool.query<{ brand: string; engine: string }>(query);
    return result.rows;
  } catch (error) {
    console.error('DB error in getAllEngineSlugs:', error);
    return [];
  }
};

/**
 * Get all brands with metadata
 */
export const getAllBrands = async (): Promise<BrandInfo[]> => {
  const query = `
    SELECT brand, COUNT(*) AS engine_count
    FROM engines
    GROUP BY brand
  `;

  try {
    const result = await pool.query<{ brand: string; engine_count: string }>(
      query
    );

    return result.rows.map((row) => ({
      id: row.brand,
      name: capitalize(row.brand),
      engineCount: parseInt(row.engine_count, 10),
    }));
  } catch (error) {
    console.error('DB error in getAllBrands:', error);
    return [];
  }
};

/**
 * Get engines for a specific brand (for brand landing page)
 */
export const getEnginesForBrand = async (
  brand: string
): Promise<EngineListItem[]> => {
  const query = `
    SELECT engine_code FROM engines
    WHERE brand = $1
  `;

  try {
    const result = await pool.query<{ engine_code: string }>(query, [brand]);

    return result.rows.map((row) => ({
      id: row.engine_code,
      name: formatEngineName(row.engine_code),
    }));
  } catch (error) {
    console.error('DB error in getEnginesForBrand:', error);
    return [];
  }
};

// Helper functions
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatEngineName(code: string): string {
  return code
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
