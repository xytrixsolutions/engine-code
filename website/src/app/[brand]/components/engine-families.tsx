// "use client";
//
// import {
//   ChevronDown,
//   ChevronRight,
//   Circle,
//   ExternalLink,
//   Fuel,
//   Trophy,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
//
// const EngineFamilies = () => {
//   const [openFamilies, setOpenFamilies] = useState<string[]>([]);
//
//   const toggleFamily = (familyId: string) => {
//     setOpenFamilies((prev) =>
//       prev.includes(familyId)
//         ? prev.filter((id) => id !== familyId)
//         : [...prev, familyId],
//     );
//   };
//
//   const engineFamilies = [
//     {
//       id: "m10",
//       name: "M10 Series",
//       description: "Inline-4 & Inline-6, 1961–1988",
//       engines: [
//         {
//           code: "M10 B16",
//           type: "Petrol",
//           displacement: "1.6L",
//           years: "1975–1982",
//           models: "2002, E21 316",
//           issues: "Carburetor wear, head cracking",
//           source: "BMW TIS 11 10 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
//           specUrl: "/bmw/m10b16-specs",
//         },
//         {
//           code: "M10 B18",
//           type: "Petrol",
//           displacement: "1.8L",
//           years: "1973–1984",
//           models: "E21 318i, 518",
//           issues: "Head gasket, oil leaks",
//           source: "BMW TIS 11 10 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
//           specUrl: "/bmw/m10b18-specs",
//         },
//         {
//           code: "M10 B20",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "1977–1988",
//           models: "E21 320i, E28 520i",
//           issues: "Timing chain stretch",
//           source: "BMW TIS 11 10 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
//           specUrl: "/bmw/m10b20-specs",
//         },
//       ],
//     },
//     {
//       id: "m20",
//       name: "M20 Series",
//       description: "Inline-6, 1981–1993",
//       engines: [
//         {
//           code: "M20 B20",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "1981–1987",
//           models: "E30 320i",
//           issues: "Head gasket, oil leaks",
//           source: "BMW TIS 11 20 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
//           specUrl: "/bmw/m20b20-specs",
//         },
//         {
//           code: "M20 B23",
//           type: "Petrol",
//           displacement: "2.3L",
//           years: "1982–1987",
//           models: "E28 525e, E30 323i",
//           issues: "Thermostat housing cracks",
//           source: "BMW TIS 11 20 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
//           specUrl: "/bmw/m20b23-specs",
//         },
//         {
//           code: "M20 B25",
//           type: "Petrol",
//           displacement: "2.5L",
//           years: "1986–1993",
//           models: "E34 525i, E30 325i",
//           issues: "VANOS wear (late models)",
//           source: "BMW TIS 11 20 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
//           specUrl: "/bmw/m20b25-specs",
//         },
//       ],
//     },
//     {
//       id: "m40",
//       name: "M40 / M43 Series",
//       description: "Inline-4, 1989–2000",
//       engines: [
//         {
//           code: "M40 B16",
//           type: "Petrol",
//           displacement: "1.6L",
//           years: "1989–1994",
//           models: "E30 316i, E36 316i",
//           issues: "Head gasket, idle instability",
//           source: "BMW TIS 11 21 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_21_0_647_146",
//           specUrl: "/bmw/m40b16-specs",
//         },
//         {
//           code: "M43 B16",
//           type: "Petrol",
//           displacement: "1.6L",
//           years: "1994–2000",
//           models: "E36 316i, Z3",
//           issues: "Intake manifold cracks",
//           source: "BMW TIS 11 21 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_21_0_647_146",
//           specUrl: "/bmw/m43b16-specs",
//         },
//       ],
//     },
//     {
//       id: "m50",
//       name: "M50 / M52 / M54 Series",
//       description: "Inline-6, 1990–2006",
//       engines: [
//         {
//           code: "M50 B20",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "1990–1992",
//           models: "E34 520i",
//           issues: "Head gasket, oil leaks",
//           source: "BMW TIS 11 30 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
//           specUrl: "/bmw/m50b20-specs",
//         },
//         {
//           code: "M52 B25",
//           type: "Petrol",
//           displacement: "2.5L",
//           years: "1995–2000",
//           models: "E36 328i, E39 528i",
//           issues: "Aluminum head corrosion",
//           source: "BMW TIS 11 30 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
//           specUrl: "/bmw/m52b25-specs",
//         },
//         {
//           code: "M54 B30",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2000–2006",
//           models: "E46 330i, Z4",
//           issues: "HPFP, VANOS rattle",
//           source: "BMW TIS 11 30 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
//           specUrl: "/bmw/m54b30-specs",
//         },
//       ],
//     },
//     {
//       id: "m47",
//       name: "M47 / N47 Series",
//       description: "Diesel, 1998–2015",
//       engines: [
//         {
//           code: "M47 D20",
//           type: "Diesel",
//           displacement: "2.0L",
//           years: "1998–2007",
//           models: "E46 320d, E60 520d",
//           issues: "Injector failure, EGR clogging",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/m47d20-specs",
//         },
//         {
//           code: "N47 D20 A",
//           type: "Diesel",
//           displacement: "2.0L",
//           years: "2007–2011",
//           models: "320d, 118d, X3",
//           issues: "Timing chain wear, turbo spring",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n47d20a-specs",
//         },
//         {
//           code: "N47 D20 C",
//           type: "Diesel",
//           displacement: "2.0L",
//           years: "2011–2015",
//           models: "320d, 520d, X1",
//           issues: "Improved chain, EGR clogging",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n47d20c-specs",
//         },
//       ],
//     },
//     {
//       id: "b37",
//       name: "B37 / B38 / B47 / B48 Series",
//       description: "Modular Engines, 2014–Now",
//       engines: [
//         {
//           code: "B37 C15 A",
//           type: "Diesel",
//           displacement: "1.5L",
//           years: "2014–Now",
//           models: "Mini One D, 116d",
//           issues: "EGR, DPF regeneration",
//           source: "BMW TIS 11 50 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
//           specUrl: "/bmw/b37c15a-specs",
//         },
//         {
//           code: "B48 B20 O0",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "2015–2018",
//           models: "330i, X3, Z4",
//           issues: "HPFP, VANOS rattle",
//           source: "BMW TIS 11 50 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
//           specUrl: "/bmw/b48b20o0-specs",
//         },
//         {
//           code: "B58 B30 A",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2015–Now",
//           models: "340i, X3 M40i, Z4",
//           issues: "Carbon buildup, water pump",
//           source: "BMW TIS 11 50 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
//           specUrl: "/bmw/b58b30a-specs",
//         },
//       ],
//     },
//     {
//       id: "s-engines",
//       name: "S-Series & P-Series",
//       description: "Performance & Racing Engines",
//       engines: [
//         {
//           code: "S14 B23",
//           type: "Petrol",
//           displacement: "2.3L",
//           years: "1987–1990",
//           models: "E30 M3 Sport Evolution",
//           issues: "Valve spring fatigue",
//           source: "BMW TIS 11 60 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
//           specUrl: "/bmw/s14b23-specs",
//         },
//         {
//           code: "S54 B32",
//           type: "Petrol",
//           displacement: "3.2L",
//           years: "2000–2008",
//           models: "E46 M3, Z4 M",
//           issues: "HPFP, rod bearings",
//           source: "BMW TIS 11 60 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
//           specUrl: "/bmw/s54b32-specs",
//         },
//         {
//           code: "S55 B30 A",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2014–Now",
//           models: "F80 M3, G80 M3",
//           issues: "Intercooler rattle, oil leaks",
//           source: "BMW TIS 11 60 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
//           specUrl: "/bmw/s55b30a-specs",
//         },
//         {
//           code: "P65 B40",
//           type: "Racing",
//           displacement: "4.0L",
//           years: "2003–2005",
//           models: "BMW M Team Racing",
//           issues: "No public service bulletin",
//           source: "BMW Motorsport Archive",
//           sourceUrl: "https://www.bmw-motorsport.com/en/engineering/",
//           specUrl: "/bmw/p65b40-specs",
//         },
//       ],
//     },
//     {
//       id: "n-engines",
//       name: "N-Series",
//       description: "Turbocharged Petrol & Diesel, 2007–2015",
//       engines: [
//         {
//           code: "N20 B20 A",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "2011–2017",
//           models: "328i, X3",
//           issues: "Turbo wastegate, HPFP",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n20b20a-specs",
//         },
//         {
//           code: "N55 B30 A",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2010–2016",
//           models: "335i, 535i",
//           issues: "HPFP, turbocharger failure",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n55b30a-specs",
//         },
//       ],
//     },
//   ];
//
//   const getEngineIcon = (type: string) => {
//     switch (type) {
//       case "Petrol":
//         return <Fuel className="h-4 w-4" />;
//       case "Diesel":
//         return <Circle className="h-4 w-4 fill-current" />;
//       case "Racing":
//         return <Trophy className="h-4 w-4" />;
//       case "Fuel Cell":
//         return <Zap className="h-4 w-4" />;
//       default:
//         return <Fuel className="h-4 w-4" />;
//     }
//   };
//
//   const getEngineVariant = (type: string) => {
//     switch (type) {
//       case "Petrol":
//         return "default";
//       case "Diesel":
//         return "secondary";
//       case "Racing":
//         return "destructive";
//       case "Fuel Cell":
//         return "outline";
//       default:
//         return "default";
//     }
//   };
//
//   return (
//     <Container spaceY={8}>
//       {/* Section Header */}
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
//           BMW Engines by Family
//         </h2>
//         <div className="text-lg md:text-4xl text-muted-foreground font-medium">
//           Full Technical Breakdown (1970–2025)
//         </div>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
//           Expand each engine family to view every variant, specifications, model
//           compatibility, and documented reliability concerns. All data sourced
//           from{" "}
//           <Link
//             href="https://www.bmwgroup.com/en.html"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW Group Product Technical Reports
//             <ExternalLink className="h-3 w-3" />
//           </Link>
//           ,{" "}
//           <Link
//             href="https://www.bmw-techinfo.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW TIS / ISTA
//             <ExternalLink className="h-3 w-3" />
//           </Link>
//           , and{" "}
//           <Link
//             href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             EU Regulation (EC) No 715/2007
//             <ExternalLink className="h-3 w-3" />
//           </Link>
//           .
//         </p>
//       </div>
//
//       {/* Engine Families */}
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="text-foreground">
//             Engine Family Database
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-0">
//           <ScrollArea className="h-[800px]">
//             <div className="space-y-2 p-6">
//               {engineFamilies.map((family) => (
//                 <Collapsible
//                   key={family.id}
//                   open={openFamilies.includes(family.id)}
//                   onOpenChange={() => toggleFamily(family.id)}
//                 >
//                   <CollapsibleTrigger asChild>
//                     <Card className="cursor-pointer hover:bg-accent/70 transition-colors border-border bg-accent text-foreground">
//                       <CardContent className="p-4">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             {openFamilies.includes(family.id) ? (
//                               <ChevronDown className="h-5 w-5 text-foreground" />
//                             ) : (
//                               <ChevronRight className="h-5 w-5 text-foreground" />
//                             )}
//                             <div>
//                               <h3 className="font-semibold text-lg text-foreground">
//                                 {family.name}
//                               </h3>
//                               <p className="text-sm text-muted-foreground">
//                                 {family.description}
//                               </p>
//                             </div>
//                           </div>
//                           <Badge
//                             variant="outline"
//                             className="text-xs border-border text-foreground"
//                           >
//                             {family.engines.length} engines
//                           </Badge>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </CollapsibleTrigger>
//
//                   <CollapsibleContent className="mt-2">
//                     <Card className="border-border bg-background">
//                       <CardContent className="p-0">
//                         <Table>
//                           <TableHeader>
//                             <TableRow className="border-border">
//                               <TableHead className="text-foreground font-semibold">
//                                 Engine Code
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Type
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Displacement
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Years
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Key Models
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Common Issues
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Source
//                               </TableHead>
//                               <TableHead className="text-foreground font-semibold">
//                                 Page
//                               </TableHead>
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {family.engines.map((engine) => (
//                               <TableRow
//                                 key={engine.code}
//                                 className="border-border hover:bg-accent/50 transition-colors"
//                               >
//                                 <TableCell className="font-mono font-semibold text-foreground">
//                                   {engine.code}
//                                 </TableCell>
//                                 <TableCell>
//                                   <div className="flex items-center gap-2">
//                                     {getEngineIcon(engine.type)}
//                                     <Badge
//                                       variant={
//                                         // biome-ignore lint/suspicious/noExplicitAny: <idk>
//                                         getEngineVariant(engine.type) as any
//                                       }
//                                       className="text-xs"
//                                     >
//                                       {engine.type}
//                                     </Badge>
//                                   </div>
//                                 </TableCell>
//                                 <TableCell className="text-foreground font-medium">
//                                   {engine.displacement}
//                                 </TableCell>
//                                 <TableCell className="text-muted-foreground">
//                                   {engine.years}
//                                 </TableCell>
//                                 <TableCell className="text-muted-foreground text-sm">
//                                   {engine.models}
//                                 </TableCell>
//                                 <TableCell className="text-muted-foreground text-sm">
//                                   {engine.issues}
//                                 </TableCell>
//                                 <TableCell>
//                                   <Link
//                                     href={engine.sourceUrl}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors text-sm"
//                                   >
//                                     {engine.source}
//                                     <ExternalLink className="h-3 w-3" />
//                                   </Link>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     className="h-8 px-3 text-foreground hover:bg-accent hover:text-foreground"
//                                     onClick={() =>
//                                       window.open(
//                                         `https://enginecode.uk${engine.specUrl}`,
//                                         "_blank",
//                                       )
//                                     }
//                                   >
//                                     View
//                                     <ExternalLink className="h-3 w-3 ml-1" />
//                                   </Button>
//                                 </TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </CardContent>
//                     </Card>
//                   </CollapsibleContent>
//                 </Collapsible>
//               ))}
//             </div>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//
//       {/* Source Disclaimer */}
//       <Card className="bg-muted/30 border-border">
//         <CardContent className="p-6">
//           <div className="flex items-start gap-2 text-sm text-muted-foreground">
//             <Badge
//               variant="outline"
//               className="text-xs shrink-0 mt-0.5 border-border text-foreground"
//             >
//               †
//             </Badge>
//             <p className="text-left leading-relaxed">
//               Engine specifications and service data verified via{" "}
//               <Link
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Product Technical Reports
//                 <ExternalLink className="h-3 w-3" />
//               </Link>
//               ,{" "}
//               <Link
//                 href="https://www.bmw-techinfo.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW TIS
//                 <ExternalLink className="h-3 w-3" />
//               </Link>
//               , and{" "}
//               <Link
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Regulation (EC) No 715/2007
//                 <ExternalLink className="h-3 w-3" />
//               </Link>{" "}
//               on vehicle type-approval.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default EngineFamilies;
// "use client";
// import {
//   ChevronDown,
//   ChevronRight,
//   Circle,
//   ExternalLink,
//   Fuel,
//   Trophy,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
//
// const EngineFamilies = () => {
//   const [openFamilies, setOpenFamilies] = useState<string[]>([]);
//   const toggleFamily = (familyId: string) => {
//     setOpenFamilies((prev) =>
//       prev.includes(familyId)
//         ? prev.filter((id) => id !== familyId)
//         : [...prev, familyId],
//     );
//   };
//
//   const engineFamilies = [
//     // ... (keeping the same engineFamilies data)
//     {
//       id: "m10",
//       name: "M10 Series",
//       description: "Inline-4 & Inline-6, 1961–1988",
//       engines: [
//         {
//           code: "M10 B16",
//           type: "Petrol",
//           displacement: "1.6L",
//           years: "1975–1982",
//           models: "2002, E21 316",
//           issues: "Carburetor wear, head cracking",
//           source: "BMW TIS 11 10 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
//           specUrl: "/bmw/m10b16-specs",
//         },
//         {
//           code: "M10 B18",
//           type: "Petrol",
//           displacement: "1.8L",
//           years: "1973–1984",
//           models: "E21 318i, 518",
//           issues: "Head gasket, oil leaks",
//           source: "BMW TIS 11 10 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
//           specUrl: "/bmw/m10b18-specs",
//         },
//         {
//           code: "M10 B20",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "1977–1988",
//           models: "E21 320i, E28 520i",
//           issues: "Timing chain stretch",
//           source: "BMW TIS 11 10 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
//           specUrl: "/bmw/m10b20-specs",
//         },
//       ],
//     },
//     {
//       id: "m20",
//       name: "M20 Series",
//       description: "Inline-6, 1981–1993",
//       engines: [
//         {
//           code: "M20 B20",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "1981–1987",
//           models: "E30 320i",
//           issues: "Head gasket, oil leaks",
//           source: "BMW TIS 11 20 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
//           specUrl: "/bmw/m20b20-specs",
//         },
//         {
//           code: "M20 B23",
//           type: "Petrol",
//           displacement: "2.3L",
//           years: "1982–1987",
//           models: "E28 525e, E30 323i",
//           issues: "Thermostat housing cracks",
//           source: "BMW TIS 11 20 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
//           specUrl: "/bmw/m20b23-specs",
//         },
//         {
//           code: "M20 B25",
//           type: "Petrol",
//           displacement: "2.5L",
//           years: "1986–1993",
//           models: "E34 525i, E30 325i",
//           issues: "VANOS wear (late models)",
//           source: "BMW TIS 11 20 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
//           specUrl: "/bmw/m20b25-specs",
//         },
//       ],
//     },
//     {
//       id: "m40",
//       name: "M40 / M43 Series",
//       description: "Inline-4, 1989–2000",
//       engines: [
//         {
//           code: "M40 B16",
//           type: "Petrol",
//           displacement: "1.6L",
//           years: "1989–1994",
//           models: "E30 316i, E36 316i",
//           issues: "Head gasket, idle instability",
//           source: "BMW TIS 11 21 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_21_0_647_146",
//           specUrl: "/bmw/m40b16-specs",
//         },
//         {
//           code: "M43 B16",
//           type: "Petrol",
//           displacement: "1.6L",
//           years: "1994–2000",
//           models: "E36 316i, Z3",
//           issues: "Intake manifold cracks",
//           source: "BMW TIS 11 21 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_21_0_647_146",
//           specUrl: "/bmw/m43b16-specs",
//         },
//       ],
//     },
//     {
//       id: "m50",
//       name: "M50 / M52 / M54 Series",
//       description: "Inline-6, 1990–2006",
//       engines: [
//         {
//           code: "M50 B20",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "1990–1992",
//           models: "E34 520i",
//           issues: "Head gasket, oil leaks",
//           source: "BMW TIS 11 30 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
//           specUrl: "/bmw/m50b20-specs",
//         },
//         {
//           code: "M52 B25",
//           type: "Petrol",
//           displacement: "2.5L",
//           years: "1995–2000",
//           models: "E36 328i, E39 528i",
//           issues: "Aluminum head corrosion",
//           source: "BMW TIS 11 30 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
//           specUrl: "/bmw/m52b25-specs",
//         },
//         {
//           code: "M54 B30",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2000–2006",
//           models: "E46 330i, Z4",
//           issues: "HPFP, VANOS rattle",
//           source: "BMW TIS 11 30 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
//           specUrl: "/bmw/m54b30-specs",
//         },
//       ],
//     },
//     {
//       id: "m47",
//       name: "M47 / N47 Series",
//       description: "Diesel, 1998–2015",
//       engines: [
//         {
//           code: "M47 D20",
//           type: "Diesel",
//           displacement: "2.0L",
//           years: "1998–2007",
//           models: "E46 320d, E60 520d",
//           issues: "Injector failure, EGR clogging",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/m47d20-specs",
//         },
//         {
//           code: "N47 D20 A",
//           type: "Diesel",
//           displacement: "2.0L",
//           years: "2007–2011",
//           models: "320d, 118d, X3",
//           issues: "Timing chain wear, turbo spring",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n47d20a-specs",
//         },
//         {
//           code: "N47 D20 C",
//           type: "Diesel",
//           displacement: "2.0L",
//           years: "2011–2015",
//           models: "320d, 520d, X1",
//           issues: "Improved chain, EGR clogging",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n47d20c-specs",
//         },
//       ],
//     },
//     {
//       id: "b37",
//       name: "B37 / B38 / B47 / B48 Series",
//       description: "Modular Engines, 2014–Now",
//       engines: [
//         {
//           code: "B37 C15 A",
//           type: "Diesel",
//           displacement: "1.5L",
//           years: "2014–Now",
//           models: "Mini One D, 116d",
//           issues: "EGR, DPF regeneration",
//           source: "BMW TIS 11 50 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
//           specUrl: "/bmw/b37c15a-specs",
//         },
//         {
//           code: "B48 B20 O0",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "2015–2018",
//           models: "330i, X3, Z4",
//           issues: "HPFP, VANOS rattle",
//           source: "BMW TIS 11 50 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
//           specUrl: "/bmw/b48b20o0-specs",
//         },
//         {
//           code: "B58 B30 A",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2015–Now",
//           models: "340i, X3 M40i, Z4",
//           issues: "Carbon buildup, water pump",
//           source: "BMW TIS 11 50 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
//           specUrl: "/bmw/b58b30a-specs",
//         },
//       ],
//     },
//     {
//       id: "s-engines",
//       name: "S-Series & P-Series",
//       description: "Performance & Racing Engines",
//       engines: [
//         {
//           code: "S14 B23",
//           type: "Petrol",
//           displacement: "2.3L",
//           years: "1987–1990",
//           models: "E30 M3 Sport Evolution",
//           issues: "Valve spring fatigue",
//           source: "BMW TIS 11 60 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
//           specUrl: "/bmw/s14b23-specs",
//         },
//         {
//           code: "S54 B32",
//           type: "Petrol",
//           displacement: "3.2L",
//           years: "2000–2008",
//           models: "E46 M3, Z4 M",
//           issues: "HPFP, rod bearings",
//           source: "BMW TIS 11 60 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
//           specUrl: "/bmw/s54b32-specs",
//         },
//         {
//           code: "S55 B30 A",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2014–Now",
//           models: "F80 M3, G80 M3",
//           issues: "Intercooler rattle, oil leaks",
//           source: "BMW TIS 11 60 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
//           specUrl: "/bmw/s55b30a-specs",
//         },
//         {
//           code: "P65 B40",
//           type: "Racing",
//           displacement: "4.0L",
//           years: "2003–2005",
//           models: "BMW M Team Racing",
//           issues: "No public service bulletin",
//           source: "BMW Motorsport Archive",
//           sourceUrl: "https://www.bmw-motorsport.com/en/engineering/",
//           specUrl: "/bmw/p65b40-specs",
//         },
//       ],
//     },
//     {
//       id: "n-engines",
//       name: "N-Series",
//       description: "Turbocharged Petrol & Diesel, 2007–2015",
//       engines: [
//         {
//           code: "N20 B20 A",
//           type: "Petrol",
//           displacement: "2.0L",
//           years: "2011–2017",
//           models: "328i, X3",
//           issues: "Turbo wastegate, HPFP",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n20b20a-specs",
//         },
//         {
//           code: "N55 B30 A",
//           type: "Petrol",
//           displacement: "3.0L",
//           years: "2010–2016",
//           models: "335i, 535i",
//           issues: "HPFP, turbocharger failure",
//           source: "BMW TIS 11 40 0",
//           sourceUrl:
//             "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
//           specUrl: "/bmw/n55b30a-specs",
//         },
//       ],
//     },
//   ];
//
//   const getEngineIcon = (type: string) => {
//     switch (type) {
//       case "Petrol":
//         return <Fuel className="h-4 w-4" />;
//       case "Diesel":
//         return <Circle className="h-4 w-4 fill-current" />;
//       case "Racing":
//         return <Trophy className="h-4 w-4" />;
//       case "Fuel Cell":
//         return <Zap className="h-4 w-4" />;
//       default:
//         return <Fuel className="h-4 w-4" />;
//     }
//   };
//
//   const getEngineVariant = (type: string) => {
//     switch (type) {
//       case "Petrol":
//         return "default";
//       case "Diesel":
//         return "secondary";
//       case "Racing":
//         return "destructive";
//       case "Fuel Cell":
//         return "outline";
//       default:
//         return "default";
//     }
//   };
//
//   // Mobile card component for engine details
//   const EngineCard = ({ engine }: { engine: any }) => (
//     <Card className="border-border mb-4">
//       <CardContent className="p-4">
//         <div className="flex justify-between items-start mb-3">
//           <div className="flex items-center gap-2">
//             <h3 className="font-bold text-lg text-foreground">{engine.code}</h3>
//             <div className="flex items-center gap-1">
//               {getEngineIcon(engine.type)}
//               <Badge
//                 variant={getEngineVariant(engine.type) as any}
//                 className="text-xs"
//               >
//                 {engine.type}
//               </Badge>
//             </div>
//           </div>
//           <span className="text-sm font-medium text-foreground">
//             {engine.displacement}
//           </span>
//         </div>
//
//         <div className="space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span className="text-muted-foreground">Years:</span>
//             <span className="text-foreground">{engine.years}</span>
//           </div>
//
//           <div>
//             <span className="text-muted-foreground">Models: </span>
//             <span className="text-foreground">{engine.models}</span>
//           </div>
//
//           <div>
//             <span className="text-muted-foreground">Issues: </span>
//             <span className="text-foreground">{engine.issues}</span>
//           </div>
//
//           <div className="pt-2 flex justify-between items-center">
//             <Link
//               href={engine.sourceUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-1 text-primary hover:underline text-xs"
//             >
//               {engine.source}
//               <ExternalLink className="h-3 w-3" />
//             </Link>
//
//             <Button
//               variant="ghost"
//               size="sm"
//               className="h-7 px-2 text-xs text-foreground hover:bg-accent"
//               onClick={() =>
//                 window.open(`https://enginecode.uk${engine.specUrl}`, "_blank")
//               }
//             >
//               View Specs
//               <ExternalLink className="h-3 w-3 ml-1" />
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
//
//   return (
//     <Container spaceY={8}>
//       {/* Section Header */}
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
//           BMW Engines by Family
//         </h2>
//         <div className="text-lg md:text-4xl text-muted-foreground font-medium">
//           Full Technical Breakdown (1970–2025)
//         </div>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
//           compatibility, and documented reliability concerns. All data sourced
//           from{" "}
//           <Link
//             href="https://www.bmwgroup.com/en.html"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW Group Product Technical Reports
//             <ExternalLink className="h-3 w-3" />
//           </Link>
//           ,{" "}
//           <Link
//             href="https://www.bmw-techinfo.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW TIS / ISTA
//             <ExternalLink className="h-3 w-3" />
//           </Link>
//           , and{" "}
//           <Link
//             href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             EU Regulation (EC) No 715/2007
//             <ExternalLink className="h-3 w-3" />
//           </Link>
//           .
//         </p>
//       </div>
//
//       {/* Engine Families */}
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="text-foreground">
//             Engine Family Database
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-0">
//           <ScrollArea className="h-[800px]">
//             <div className="space-y-2 p-6">
//               {engineFamilies.map((family) => (
//                 <Collapsible
//                   key={family.id}
//                   open={openFamilies.includes(family.id)}
//                   onOpenChange={() => toggleFamily(family.id)}
//                 >
//                   <CollapsibleTrigger asChild>
//                     <Card className="cursor-pointer hover:bg-accent/70 transition-colors border-border bg-accent text-foreground">
//                       <CardContent className="p-4">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             {openFamilies.includes(family.id) ? (
//                               <ChevronDown className="h-5 w-5 text-foreground" />
//                             ) : (
//                               <ChevronRight className="h-5 w-5 text-foreground" />
//                             )}
//                             <div>
//                               <h3 className="font-semibold text-lg text-foreground">
//                                 {family.name}
//                               </h3>
//                               <p className="text-sm text-muted-foreground">
//                                 {family.description}
//                               </p>
//                             </div>
//                           </div>
//                           <Badge
//                             variant="outline"
//                             className="text-xs border-border text-foreground"
//                           >
//                             {family.engines.length} engines
//                           </Badge>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="mt-2">
//                     <Card className="border-border bg-background">
//                       <CardContent className="p-4">
//                         {/* Desktop Table View */}
//                         <div className="hidden md:block">
//                           <Table>
//                             <TableHeader>
//                               <TableRow className="border-border">
//                                 <TableHead className="text-foreground font-semibold">
//                                   Engine Code
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Type
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Displacement
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Years
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Key Models
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Common Issues
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Source
//                                 </TableHead>
//                                 <TableHead className="text-foreground font-semibold">
//                                   Page
//                                 </TableHead>
//                               </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                               {family.engines.map((engine) => (
//                                 <TableRow
//                                   key={engine.code}
//                                   className="border-border hover:bg-accent/50 transition-colors"
//                                 >
//                                   <TableCell className="font-mono font-semibold text-foreground">
//                                     {engine.code}
//                                   </TableCell>
//                                   <TableCell>
//                                     <div className="flex items-center gap-2">
//                                       {getEngineIcon(engine.type)}
//                                       <Badge
//                                         variant={
//                                           getEngineVariant(engine.type) as any
//                                         }
//                                         className="text-xs"
//                                       >
//                                         {engine.type}
//                                       </Badge>
//                                     </div>
//                                   </TableCell>
//                                   <TableCell className="text-foreground font-medium">
//                                     {engine.displacement}
//                                   </TableCell>
//                                   <TableCell className="text-muted-foreground">
//                                     {engine.years}
//                                   </TableCell>
//                                   <TableCell className="text-muted-foreground text-sm">
//                                     {engine.models}
//                                   </TableCell>
//                                   <TableCell className="text-muted-foreground text-sm">
//                                     {engine.issues}
//                                   </TableCell>
//                                   <TableCell>
//                                     <Link
//                                       href={engine.sourceUrl}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors text-sm"
//                                     >
//                                       {engine.source}
//                                       <ExternalLink className="h-3 w-3" />
//                                     </Link>
//                                   </TableCell>
//                                   <TableCell>
//                                     <Button
//                                       variant="ghost"
//                                       size="sm"
//                                       className="h-8 px-3 text-foreground hover:bg-accent hover:text-foreground"
//                                       onClick={() =>
//                                         window.open(
//                                           `https://enginecode.uk${engine.specUrl}`,
//                                           "_blank",
//                                         )
//                                       }
//                                     >
//                                       View
//                                       <ExternalLink className="h-3 w-3 ml-1" />
//                                     </Button>
//                                   </TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </div>
//
//                         {/* Mobile Card View */}
//                         <div className="md:hidden">
//                           {family.engines.map((engine) => (
//                             <EngineCard key={engine.code} engine={engine} />
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </CollapsibleContent>
//                 </Collapsible>
//               ))}
//             </div>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//
//       {/* Source Disclaimer */}
//       <Card className="bg-muted/30 border-border">
//         <CardContent className="p-6">
//           <div className="flex items-start gap-2 text-sm text-muted-foreground">
//             <Badge
//               variant="outline"
//               className="text-xs shrink-0 mt-0.5 border-border text-foreground"
//             >
//               †
//             </Badge>
//             <p className="text-left leading-relaxed">
//               Engine specifications and service data verified via{" "}
//               <Link
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Product Technical Reports
//                 <ExternalLink className="h-3 w-3" />
//               </Link>
//               ,{" "}
//               <Link
//                 href="https://www.bmw-techinfo.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW TIS
//                 <ExternalLink className="h-3 w-3" />
//               </Link>
//               , and{" "}
//               <Link
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Regulation (EC) No 715/2007
//                 <ExternalLink className="h-3 w-3" />
//               </Link>{" "}
//               on vehicle type-approval.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default EngineFamilies;
"use client";
import {
  ChevronDown,
  ChevronRight,
  Circle,
  ExternalLink,
  Fuel,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GiBarrel } from "react-icons/gi";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DisclaimerCard from "./disclaimer-card";
import { ImageDialog } from "./image-dialog";

interface Engine {
  code: string;
  type: "Petrol" | "Diesel" | "Racing" | string;
  displacement: string;
  years: string;
  models: string;
  issues: string;
  source: string;
  sourceUrl: string;
  specUrl: string;
}

interface EngineFamily {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  engines: Engine[];
}

const EngineFamilies = () => {
  const [openFamilies, setOpenFamilies] = useState<string[]>([]);
  const toggleFamily = (familyId: string) => {
    setOpenFamilies((prev) =>
      prev.includes(familyId)
        ? prev.filter((id) => id !== familyId)
        : [...prev, familyId],
    );
  };

  const engineFamilies: EngineFamily[] = [
    {
      id: "m10",
      name: "M10 Series",
      description: "Inline-4 & Inline-6, 1961–1988",
      imageUrl: "/bmw/Engines/timeline/resized-engine-450x400-removebg-preview.webp",
      engines: [
        {
          code: "M10 B16",
          type: "Petrol",
          displacement: "1.6L",
          years: "1975–1982",
          models: "2002, E21 316",
          issues: "Carburetor wear, head cracking",
          source: "BMW TIS 11 10 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
          specUrl: "/bmw/m10b16-specs",
        },
        {
          code: "M10 B18",
          type: "Petrol",
          displacement: "1.8L",
          years: "1973–1984",
          models: "E21 318i, 518",
          issues: "Head gasket, oil leaks",
          source: "BMW TIS 11 10 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
          specUrl: "/bmw/m10b18-specs",
        },
        {
          code: "M10 B20",
          type: "Petrol",
          displacement: "2.0L",
          years: "1977–1988",
          models: "E21 320i, E28 520i",
          issues: "Timing chain stretch",
          source: "BMW TIS 11 10 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_10_0_647_146",
          specUrl: "/bmw/m10b20-specs",
        },
      ],
    },
    {
      id: "m20",
      name: "M20 Series",
      description: "Inline-6, 1981–1993",
      imageUrl: "/bmw/Engines/timeline/2-bmw-m20-removebg-preview.webp",
      engines: [
        {
          code: "M20 B20",
          type: "Petrol",
          displacement: "2.0L",
          years: "1981–1987",
          models: "E30 320i",
          issues: "Head gasket, oil leaks",
          source: "BMW TIS 11 20 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
          specUrl: "/bmw/m20b20-specs",
        },
        {
          code: "M20 B23",
          type: "Petrol",
          displacement: "2.3L",
          years: "1982–1987",
          models: "E28 525e, E30 323i",
          issues: "Thermostat housing cracks",
          source: "BMW TIS 11 20 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
          specUrl: "/bmw/m20b23-specs",
        },
        {
          code: "M20 B25",
          type: "Petrol",
          displacement: "2.5L",
          years: "1986–1993",
          models: "E34 525i, E30 325i",
          issues: "VANOS wear (late models)",
          source: "BMW TIS 11 20 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_20_0_647_146",
          specUrl: "/bmw/m20b25-specs",
        },
      ],
    },
    {
      id: "m40",
      name: "M40 / M43 Series",
      description: "Inline-4, 1989–2000",
      imageUrl: "/bmw/Engines/timeline/3-bmw-m40-removebg-preview.webp",
      engines: [
        {
          code: "M40 B16",
          type: "Petrol",
          displacement: "1.6L",
          years: "1989–1994",
          models: "E30 316i, E36 316i",
          issues: "Head gasket, idle instability",
          source: "BMW TIS 11 21 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_21_0_647_146",
          specUrl: "/bmw/m40b16-specs",
        },
        {
          code: "M43 B16",
          type: "Petrol",
          displacement: "1.6L",
          years: "1994–2000",
          models: "E36 316i, Z3",
          issues: "Intake manifold cracks",
          source: "BMW TIS 11 21 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_21_0_647_146",
          specUrl: "/bmw/m43b16-specs",
        },
      ],
    },
    {
      id: "m50",
      name: "M50 / M52 / M54 Series",
      description: "Inline-6, 1990–2006",
      imageUrl: "/bmw/Engines/timeline/bmw-m50-removebg-preview 1.png",
      engines: [
        {
          code: "M50 B20",
          type: "Petrol",
          displacement: "2.0L",
          years: "1990–1992",
          models: "E34 520i",
          issues: "Head gasket, oil leaks",
          source: "BMW TIS 11 30 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
          specUrl: "/bmw/m50b20-specs",
        },
        {
          code: "M52 B25",
          type: "Petrol",
          displacement: "2.5L",
          years: "1995–2000",
          models: "E36 328i, E39 528i",
          issues: "Aluminum head corrosion",
          source: "BMW TIS 11 30 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
          specUrl: "/bmw/m52b25-specs",
        },
        {
          code: "M54 B30",
          type: "Petrol",
          displacement: "3.0L",
          years: "2000–2006",
          models: "E46 330i, Z4",
          issues: "HPFP, VANOS rattle",
          source: "BMW TIS 11 30 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_30_0_647_146",
          specUrl: "/bmw/m54b30-specs",
        },
      ],
    },
    {
      id: "m47",
      name: "M47 / N47 Series",
      description: "Diesel, 1998–2015",
      imageUrl: "/bmw/Engines/timeline/8-bmw-n-series-removebg-preview 1.png",
      engines: [
        {
          code: "M47 D20",
          type: "Diesel",
          displacement: "2.0L",
          years: "1998–2007",
          models: "E46 320d, E60 520d",
          issues: "Injector failure, EGR clogging",
          source: "BMW TIS 11 40 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
          specUrl: "/bmw/m47d20-specs",
        },
        {
          code: "N47 D20 A",
          type: "Diesel",
          displacement: "2.0L",
          years: "2007–2011",
          models: "320d, 118d, X3",
          issues: "Timing chain wear, turbo spring",
          source: "BMW TIS 11 40 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
          specUrl: "/bmw/n47d20a-specs",
        },
        {
          code: "N47 D20 C",
          type: "Diesel",
          displacement: "2.0L",
          years: "2011–2015",
          models: "320d, 520d, X1",
          issues: "Improved chain, EGR clogging",
          source: "BMW TIS 11 40 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
          specUrl: "/bmw/n47d20c-specs",
        },
      ],
    },
    {
      id: "b37",
      name: "B37 / B38 / B47 / B48 Series",
      description: "Modular Engines, 2014–Now",
      imageUrl: "/bmw/Engines/timeline/6-bmw-b47d20-removebg-preview.webp",
      engines: [
        {
          code: "B37 C15 A",
          type: "Diesel",
          displacement: "1.5L",
          years: "2014–Now",
          models: "Mini One D, 116d",
          issues: "EGR, DPF regeneration",
          source: "BMW TIS 11 50 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
          specUrl: "/bmw/b37c15a-specs",
        },
        {
          code: "B48 B20 O0",
          type: "Petrol",
          displacement: "2.0L",
          years: "2015–2018",
          models: "330i, X3, Z4",
          issues: "HPFP, VANOS rattle",
          source: "BMW TIS 11 50 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
          specUrl: "/bmw/b48b20o0-specs",
        },
        {
          code: "B58 B30 A",
          type: "Petrol",
          displacement: "3.0L",
          years: "2015–Now",
          models: "340i, X3 M40i, Z4",
          issues: "Carbon buildup, water pump",
          source: "BMW TIS 11 50 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_50_0_647_146",
          specUrl: "/bmw/b58b30a-specs",
        },
      ],
    },
    {
      id: "s-engines",
      name: "S-Series & P-Series",
      description: "Performance & Racing Engines",
      imageUrl: "/bmw/Engines/timeline/4-bmw-s50b32-removebg-preview 1.png",
      engines: [
        {
          code: "S14 B23",
          type: "Petrol",
          displacement: "2.3L",
          years: "1987–1990",
          models: "E30 M3 Sport Evolution",
          issues: "Valve spring fatigue",
          source: "BMW TIS 11 60 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
          specUrl: "/bmw/s14b23-specs",
        },
        {
          code: "S54 B32",
          type: "Petrol",
          displacement: "3.2L",
          years: "2000–2008",
          models: "E46 M3, Z4 M",
          issues: "HPFP, rod bearings",
          source: "BMW TIS 11 60 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
          specUrl: "/bmw/s54b32-specs",
        },
        {
          code: "S55 B30 A",
          type: "Petrol",
          displacement: "3.0L",
          years: "2014–Now",
          models: "F80 M3, G80 M3",
          issues: "Intercooler rattle, oil leaks",
          source: "BMW TIS 11 60 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_60_0_647_146",
          specUrl: "/bmw/s55b30a-specs",
        },
        {
          code: "P65 B40",
          type: "Racing",
          displacement: "4.0L",
          years: "2003–2005",
          models: "BMW M Team Racing",
          issues: "No public service bulletin",
          source: "BMW Motorsport Archive",
          sourceUrl: "https://www.bmw-motorsport.com/en/engineering/",
          specUrl: "/bmw/p65b40-specs",
        },
      ],
    },
    {
      id: "n-engines",
      name: "N-Series",
      description: "Turbocharged Petrol & Diesel, 2007–2015",
      imageUrl: "/bmw/Engines/timeline/8-bmw-n-series-removebg-preview 1.png",
      engines: [
        {
          code: "N20 B20 A",
          type: "Petrol",
          displacement: "2.0L",
          years: "2011–2017",
          models: "328i, X3",
          issues: "Turbo wastegate, HPFP",
          source: "BMW TIS 11 40 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
          specUrl: "/bmw/n20b20a-specs",
        },
        {
          code: "N55 B30 A",
          type: "Petrol",
          displacement: "3.0L",
          years: "2010–2016",
          models: "335i, 535i",
          issues: "HPFP, turbocharger failure",
          source: "BMW TIS 11 40 0",
          sourceUrl:
            "https://www.bmw-techinfo.com/repair-manuals/document/11_40_0_647_146",
          specUrl: "/bmw/n55b30a-specs",
        },
      ],
    },
  ];

  const getEngineIcon = (type: string) => {
    switch (type) {
      case "Petrol":
        return <Fuel className="h-4 w-4" />;
      case "Diesel":
        return <GiBarrel className="h-4 w-4 fill-current" />;
      case "Racing":
        return <Trophy className="h-4 w-4" />;
      case "Fuel Cell":
        return <Zap className="h-4 w-4" />;
      default:
        return <Fuel className="h-4 w-4" />;
    }
  };

  const getEngineVariant = (type: string) => {
    switch (type) {
      case "Petrol":
        return "default";
      case "Diesel":
        return "secondary";
      case "Racing":
        return "destructive";
      case "Fuel Cell":
        return "outline";
      default:
        return "default";
    }
  };

  // Mobile card component for engine details
  const EngineCard = ({ engine }: { engine: Engine }) => (
    <Card className="border-border mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg text-foreground">{engine.code}</h3>
            <div className="flex items-center gap-1">
              {getEngineIcon(engine.type)}
              <Badge
                variant={getEngineVariant(engine.type)}
                className="text-xs"
              >
                {engine.type}
              </Badge>
            </div>
          </div>
          <span className="text-sm font-medium text-foreground">
            {engine.displacement}
          </span>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Years:</span>
            <span className="text-foreground">{engine.years}</span>
          </div>

          <div>
            <span className="text-muted-foreground">Models: </span>
            <span className="text-foreground">{engine.models}</span>
          </div>

          <div>
            <span className="text-muted-foreground">Issues: </span>
            <span className="text-foreground">{engine.issues}</span>
          </div>

          <div className="pt-2 flex justify-between items-center">
            <Link
              href={engine.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline text-xs"
            >
              {engine.source}
              <ExternalLink className="h-3 w-3" />
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs text-foreground hover:bg-accent"
              onClick={() =>
                window.open(`https://enginecode.uk${engine.specUrl}`, "_blank")
              }
            >
              View Specs
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Container spaceY={8}>
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
          BMW Engines by Family
        </h2>
        <div className="text-lg md:text-4xl text-muted-foreground font-medium">
          Full Technical Breakdown (1970–2025)
        </div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
          Expand each engine family to view every variant, specifications, model
          compatibility, and documented reliability concerns. All data sourced
          from{" "}
          <Link
            href="https://www.bmwgroup.com/en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            BMW Group Product Technical Reports
            <ExternalLink className="h-3 w-3" />
          </Link>
          ,{" "}
          <Link
            href="https://www.bmw-techinfo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            BMW TIS / ISTA
            <ExternalLink className="h-3 w-3" />
          </Link>
          , and{" "}
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            EU Regulation (EC) No 715/2007
            <ExternalLink className="h-3 w-3" />
          </Link>
          .
        </p>
      </div>

      {/* Engine Families */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">
            Engine Family Database
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <ScrollArea className="h-[800px]">
            <div className="space-y-2 p-6">
              {engineFamilies.map((family) => (
                <Collapsible
                  key={family.id}
                  open={openFamilies.includes(family.id)}
                  onOpenChange={() => toggleFamily(family.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:bg-accent/70 transition-colors border-border bg-accent text-foreground py-3">
                      <CardContent className="px-3 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {openFamilies.includes(family.id) ? (
                              <ChevronDown className="h-5 w-5 text-foreground" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-foreground" />
                            )}
                            <div>
                              <h3 className="font-semibold  sm:text-lg text-foreground">
                                {family.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                {family.description}
                              </p>
                            </div>
                          </div>
                          <ImageDialog
                            src={family.imageUrl}
                            alt={family.name}
                            className="w-[93.75] h-[93.75] sm:w-[125px] sm:h-[125px]"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <Card className="border-border bg-background">
                      <CardContent className="p-0">
                        {/* Desktop Table View - Hidden on mobile */}
                        <div className="hidden md:block">
                          <Table>
                            <TableHeader>
                              <TableRow className="border-border">
                                <TableHead className="text-foreground font-semibold">
                                  Engine Code
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Type
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Displacement
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Years
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Key Models
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Common Issues
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Source
                                </TableHead>
                                <TableHead className="text-foreground font-semibold">
                                  Page
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {family.engines.map((engine) => (
                                <TableRow
                                  key={engine.code}
                                  className="border-border hover:bg-accent/50 transition-colors"
                                >
                                  <TableCell className="font-mono font-semibold text-foreground">
                                    {engine.code}
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-2">
                                      {getEngineIcon(engine.type)}
                                      <Badge
                                        variant={getEngineVariant(engine.type)}
                                        className="text-xs"
                                      >
                                        {engine.type}
                                      </Badge>
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-foreground font-medium">
                                    {engine.displacement}
                                  </TableCell>
                                  <TableCell className="text-muted-foreground">
                                    {engine.years}
                                  </TableCell>
                                  <TableCell className="text-muted-foreground text-sm">
                                    {engine.models}
                                  </TableCell>
                                  <TableCell className="text-muted-foreground text-sm">
                                    {engine.issues}
                                  </TableCell>
                                  <TableCell>
                                    <Link
                                      href={engine.sourceUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors text-sm"
                                    >
                                      {engine.source}
                                      <ExternalLink className="h-3 w-3" />
                                    </Link>
                                  </TableCell>
                                  <TableCell>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 px-3 text-foreground hover:bg-accent hover:text-foreground"
                                      onClick={() =>
                                        window.open(
                                          `https://enginecode.uk${engine.specUrl}`,
                                          "_blank",
                                        )
                                      }
                                    >
                                      View
                                      <ExternalLink className="h-3 w-3 ml-1" />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        {/* Mobile Card View - Hidden on desktop */}
                        <div className="md:hidden p-4">
                          {family.engines.map((engine) => (
                            <EngineCard key={engine.code} engine={engine} />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Source Disclaimer */}
      <DisclaimerCard>
        Engine specifications and service data verified via{" "}
        <Link
          href="https://www.bmwgroup.com/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          BMW Group Product Technical Reports
          <ExternalLink className="h-3 w-3" />
        </Link>
        ,{" "}
        <Link
          href="https://www.bmw-techinfo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          BMW TIS
          <ExternalLink className="h-3 w-3" />
        </Link>
        , and{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          EU Regulation (EC) No 715/2007
          <ExternalLink className="h-3 w-3" />
        </Link>{" "}
        on vehicle type-approval.
      </DisclaimerCard>
    </Container>
  );
};

export default EngineFamilies;
