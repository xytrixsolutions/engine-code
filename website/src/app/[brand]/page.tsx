import { getAllBrands, getEnginesForBrand } from "@/app/lib/engine-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EngineCodeGuide from "./components/engine-code-guide";
import EngineDatabase from "./components/engine-database";
import EngineFamilies from "./components/engine-families";
import EngineModelDatabase from "./components/engine-model-database";
import { ProductionFacts } from "./components/engine-production-facts";
import TechnologyOverview from "./components/engine-technology-overview";
import { FrequentlyAskedQuestions } from "./components/frequently-asked-questions";
import Hero from "./components/hero";
import { ReferencesDisclaimers } from "./components/references-disclaimer";

// TypeScript interfaces
interface BrandPageProps {
  params: Promise<{
    brand: string;
  }>;
}

interface BrandInfo {
  id: string;
  name: string;
  engineCount: number;
}

interface EngineListItem {
  id: string;
  name: string;
}

// Static generation - pre-render all brand pages
export async function generateStaticParams() {
  const brands = await getAllBrands();
  return brands.map((brand) => ({
    brand: brand.id,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const brands = await getAllBrands();
  const brand = brands.find((b) => b.id === resolvedParams.brand);

  if (!brand) {
    return {
      title: "Brand Not Found",
      description:
        "The requested automotive brand could not be found in our database",
    };
  }

  return {
    title: `${brand.name} Engine Codes Database | EngineCode.uk`,
    description: `Explore all ${brand.engineCount} engine models from ${brand.name}. Complete technical specifications, reliability data, and compatibility information.`,
  };
}

// Main page component
export default async function BrandPage({ params }: BrandPageProps) {
  const resolvedParams = await params;
  const brandSlug = resolvedParams.brand;

  // Fetch brand info
  const brands = await getAllBrands();
  const brandData = brands.find((b) => b.id === brandSlug);

  if (!brandData) {
    notFound();
  }

  // Fetch engines for this brand
  const engines = await getEnginesForBrand(brandSlug);

  return (
    <>
      <Hero
        brandSlug={brandSlug}
        brandName={brandData.name}
        engineCount={brandData.engineCount}
      />
      <EngineDatabase brandSlug={brandSlug} engines={engines} />
      <EngineFamilies brandSlug={brandSlug} brandName={brandData.name} />
      <TechnologyOverview brandSlug={brandSlug} brandName={brandData.name} />
      <EngineCodeGuide brandSlug={brandSlug} brandName={brandData.name} />
      <EngineModelDatabase brandSlug={brandSlug} brandName={brandData.name} />
      <ProductionFacts brandSlug={brandSlug} brandName={brandData.name} />
      <FrequentlyAskedQuestions
        brandSlug={brandSlug}
        brandName={brandData.name}
      />
      <ReferencesDisclaimers brandSlug={brandSlug} brandName={brandData.name} />
    </>
  );
}

// Revalidation settings
export const dynamicParams = false;
export const revalidate = 86400; // Regenerate once a day
