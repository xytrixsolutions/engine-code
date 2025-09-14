// import { getEnginesForBrand, getAllBrands } from "@/app/lib/engine-data";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { ArrowRight, Zap, Settings, Gauge } from "lucide-react";
//
// type BrandPageProps = {
//   params: Promise<{
//     brand: string;
//   }>;
// };
//
// export async function generateMetadata({
//   params,
// }: BrandPageProps): Promise<Metadata> {
//   const resolvedParams = await params;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === resolvedParams.brand);
//
//   if (!brand) {
//     return {
//       title: "Brand Not Found",
//       description:
//         "The requested automotive brand could not be found in our database",
//     };
//   }
//
//   return {
//     title: `${brand.name} Engines`,
//     description: `Explore all ${brand.engineCount} engine models from ${brand.name}`,
//   };
// }
//
// export default async function BrandPage({ params }: BrandPageProps) {
//   const resolvedParams = await params;
//   const brandId = resolvedParams.brand;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === brandId);
//
//   if (!brand) {
//     notFound();
//   }
//
//   const engines = await getEnginesForBrand(brandId);
//
//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-foreground mb-4">
//             {brand.name}
//             <span className="text-primary"> Engines</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Discover our complete collection of {brand.engineCount}{" "}
//             high-performance engines
//           </p>
//           <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
//         </div>
//
//         {/* Engine Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {engines.map((engine) => (
//             <Link
//               key={engine.id}
//               href={`/${brandId}/${engine.id}-specs`}
//               className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//             >
//               <div className="flex justify-between items-start">
//                 <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-all duration-300">
//                   {engine.name}
//                 </h2>
//                 <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
//               </div>
//
//               <p className="text-sm text-muted-foreground mt-2 mb-4">
//                 Detailed specifications and performance data
//               </p>
//
//               <div className="flex items-center gap-4 text-xs text-muted-foreground">
//                 <div className="flex items-center gap-1">
//                   <Settings className="w-3 h-3" />
//                   <span>Specs</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Gauge className="w-3 h-3" />
//                   <span>Performance</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//
//         {/* Empty State */}
//         {engines.length === 0 && (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
//               <Zap className="w-12 h-12 text-muted-foreground" />
//             </div>
//             <h3 className="text-2xl font-bold text-foreground mb-3">
//               No Engines Available
//             </h3>
//             <p className="text-lg text-muted-foreground max-w-md mx-auto">
//               We&apos;re currently updating our {brand.name} engine database.
//               Please check back soon for the latest specifications.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
//
// // Static generation
// export async function generateStaticParams() {
//   const brands = await getAllBrands();
//   return brands.map((brand) => ({
//     brand: brand.id,
//   }));
// }
//

import EngineCodeGuide from "./components/engine-code-guide";
import EngineDatabase from "./components/engine-database";
import EngineFamilies from "./components/engine-families";
import EngineModelDatabase from "./components/engine-model-database";
import TechnologyOverview from "./components/engine-technology-overview";
import EngineTimeline from "./components/engine-timeline";
import { FrequentlyAskedQuestions } from "./components/frequently-asked-questions";
import Hero from "./components/hero";
import { ReferencesDisclaimers } from "./components/references-disclaimer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EngineTimeline />
      <EngineDatabase />
      <EngineFamilies />
      <TechnologyOverview />
      <EngineCodeGuide />
      <EngineModelDatabase />
      <FrequentlyAskedQuestions />
      <ReferencesDisclaimers />
    </>
  );
}
