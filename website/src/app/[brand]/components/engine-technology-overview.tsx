// "use client";
//
// import {
//   ChevronDown,
//   ChevronRight,
//   Cog,
//   Database,
//   ExternalLink,
//   Fuel,
//   Gauge,
//   Settings,
//   Wrench,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ScrollArea } from "@/components/ui/scroll-area";
//
// const TechnologyOverview = () => {
//   const [openSections, setOpenSections] = useState<string[]>([]);
//   const toggleSection = (sectionId: string) => {
//     setOpenSections((prev) =>
//       prev.includes(sectionId)
//         ? prev.filter((id) => id !== sectionId)
//         : [...prev, sectionId],
//     );
//   };
//   const technologies = [
//     {
//       id: "valvetronic",
//       name: "VALVETRONIC",
//       subtitle: "Variable Valve Lift (1999–Present)",
//       icon: <Settings className="h-5 w-5" />,
//       description:
//         "BMW's proprietary VALVETRONIC system eliminates the throttle butterfly by continuously varying intake valve lift, improving efficiency and throttle response.",
//       howItWorks:
//         "An intermediate lever between the camshaft and valves is adjusted via an electric actuator, changing valve lift from 0.3mm to 9.8mm.",
//       generations: [
//         {
//           name: "VALVETRONIC I",
//           engine: "M54B22 (2001)",
//           feature: "Limited range",
//         },
//         {
//           name: "VALVETRONIC II",
//           engine: "N52B25 (2005)",
//           feature: "Faster response",
//         },
//         {
//           name: "VALVETRONIC III",
//           engine: "N53B30 (2007)",
//           feature: "Integrated with Double-VANOS",
//         },
//         {
//           name: "VALVETRONIC IV",
//           engine: "B58B30 (2015)",
//           feature: "Lighter, more durable",
//         },
//       ],
//       affectedEngines: [
//         "M54B22",
//         "M54B30",
//         "N52B25",
//         "N52B30",
//         "N53B30",
//         "N54B30",
//         "B48B20",
//         "B58B30",
//       ],
//       commonFailures: [
//         { issue: "Eccentric shaft sensor failure", code: "P151A" },
//         { issue: "Intermediate lever wear", note: "especially N52, N53" },
//         { issue: "Actuator motor seizure", code: "" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS Document SI B13 00 01 – VALVETRONIC System Operation",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "BMW Group Drive Systems 2023 – Section 4.2: Variable Valve Control",
//           url: "https://www.bmwgroup.com/en/technology/efficient-dynamics.html",
//         },
//       ],
//     },
//     {
//       id: "twinpower",
//       name: "TwinPower Turbo",
//       subtitle: "BMW's Integrated Performance System",
//       icon: <Zap className="h-5 w-5" />,
//       description:
//         "TwinPower Turbo is BMW's branding for engines combining turbocharging, direct fuel injection (High Precision Injection), VALVETRONIC (petrol), and Double-VANOS (variable cam timing).",
//       howItWorks:
//         "Integrates multiple technologies for optimal performance: turbocharging for power, direct injection for efficiency, VALVETRONIC for throttle response, and Double-VANOS for variable cam timing.",
//       generations: [
//         {
//           name: "First Gen (2006)",
//           engine: "N54B30",
//           feature: "Twin-turbo inline-6",
//         },
//         {
//           name: "Second Gen (2011)",
//           engine: "N20B20",
//           feature: "Single twin-scroll turbo",
//         },
//         {
//           name: "Third Gen (2015)",
//           engine: "B48B20",
//           feature: "Closed-deck block, improved cooling",
//         },
//         {
//           name: "Fourth Gen (2020)",
//           engine: "B48B20O1",
//           feature: "Anti-lag, improved HPFP",
//         },
//       ],
//       affectedEngines: ["N54B30", "N20B20", "B48B20", "B58B30"],
//       commonFailures: [
//         {
//           issue: "N54B30: High performance, high failure rate",
//           note: "HPFP, rods",
//         },
//         { issue: "N20B20: Over-turboed, wastegate issues", code: "" },
//         {
//           issue: "B48B20: Reliable with maintenance",
//           note: "carbon buildup risk",
//         },
//         {
//           issue: "B58B30: Forged internals, track-capable",
//           note: "water pump common",
//         },
//       ],
//       sources: [
//         {
//           name: "BMW Group PT-2023 – TwinPower Turbo Evolution (Doc. A24901)",
//           url: "https://www.bmwgroup.com/en/technology/",
//         },
//         {
//           name: "EU Regulation (EC) No 715/2007 – Article 3, Definitions",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
//         },
//       ],
//     },
//     {
//       id: "timing",
//       name: "Timing Systems",
//       subtitle: "Chain vs. Belt – Reliability by Design",
//       icon: <Cog className="h-5 w-5" />,
//       description:
//         "BMW uses timing chains on most engines, but design affects longevity significantly.",
//       howItWorks:
//         "Timing chains synchronize crankshaft and camshaft rotation. Chain placement (front vs rear) dramatically impacts accessibility and reliability.",
//       generations: [
//         {
//           name: "Front-Mounted Chain (Reliable)",
//           engine: "M54, N52, B58",
//           feature: "Easy access, low stress",
//         },
//         {
//           name: "Rear-Mounted Chain (High Risk)",
//           engine: "N47D20A/C, N47TUD20",
//           feature: "Chain at rear → hard to access",
//         },
//         {
//           name: "Hybrid Timing",
//           engine: "M47D20",
//           feature: "Intermediate reliability",
//         },
//       ],
//       affectedEngines: ["M54", "N52", "B58", "N47D20A", "N47D20C", "M47D20"],
//       commonFailures: [
//         { issue: "B58: Lifetime chain", note: "BMW TIS A24902" },
//         {
//           issue: "N47: Tensioner failure common",
//           note: "chain jumps → engine damage",
//         },
//         { issue: "M47: Tensioner wear after 120,000 miles", code: "" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS SI B11 03 08 – N47 Timing Chain Replacement",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "Directive 2007/46/EC – Annex I, Section 1.2",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0046",
//         },
//       ],
//     },
//     {
//       id: "hpfp",
//       name: "High-Pressure Fuel Pump (HPFP)",
//       subtitle: "Petrol Engine Weak Point",
//       icon: <Fuel className="h-5 w-5" />,
//       description:
//         "The HPFP delivers fuel at up to 200 bar for direct injection systems.",
//       howItWorks:
//         "Mechanical pump driven by camshaft delivers high-pressure fuel to direct injection system. Critical for proper fuel atomization and combustion.",
//       generations: [
//         {
//           name: "Siemens HPFP",
//           engine: "N54B30",
//           feature: "High failure rate → BMW extended warranty",
//         },
//         {
//           name: "Over-stressed pump",
//           engine: "N20B20",
//           feature: "Failure at 60k–80k miles",
//         },
//         {
//           name: "Improved design",
//           engine: "B48B20",
//           feature: "Still service item at 100k+ miles",
//         },
//       ],
//       affectedEngines: ["N54B30", "N20B20", "B48B20", "N55B30"],
//       commonFailures: [
//         { issue: "Wear in N54/N55", note: "lean misfire", code: "P0171" },
//         { issue: "Electrical failure in B48", note: "limp mode" },
//         { issue: "Noise ('ticking')", note: "often first symptom" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS SI B13 10 01 – HPFP Diagnosis",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "BMW Group Warranty Bulletin WB-12-07-01 – N54 HPFP coverage extension",
//           url: "https://www.bmwgroup.com/",
//         },
//       ],
//     },
//     {
//       id: "common-rail",
//       name: "Common Rail Diesel",
//       subtitle: "From M47 to B47",
//       icon: <Database className="h-5 w-5" />,
//       description:
//         "BMW's diesel evolution focused on pressure, emissions, and refinement.",
//       howItWorks:
//         "High-pressure fuel rail supplies multiple injectors with precise fuel delivery. Pressure increased over generations for better atomization and emissions control.",
//       generations: [
//         {
//           name: "M47 (1998–2007)",
//           engine: "1,350 bar",
//           feature: "M47D20 - Injector coking, EGR",
//         },
//         {
//           name: "N47 (2007–2015)",
//           engine: "1,600 bar",
//           feature: "N47D20A/C - Timing chain, turbo spring",
//         },
//         {
//           name: "B47 (2014–Now)",
//           engine: "2,000 bar",
//           feature: "B47D20, B37C15A - Timing chain (early), DPF regeneration",
//         },
//       ],
//       affectedEngines: ["M47D20", "N47D20A", "N47D20C", "B47D20", "B37C15A"],
//       commonFailures: [
//         { issue: "M47: Euro 3–4 compliance", code: "" },
//         { issue: "N47: Euro 5 compliance", code: "" },
//         { issue: "B47: Euro 6d — includes SCR and AdBlue", code: "" },
//       ],
//       sources: [
//         {
//           name: "BMW Group Diesel Technology Roadmap 2015–2025",
//           url: "https://www.bmwgroup.com/",
//         },
//         {
//           name: "Commission Regulation (EU) 2017/1151 – WLTP Testing",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151",
//         },
//       ],
//     },
//     {
//       id: "modular",
//       name: "Modular Engine Design",
//       subtitle: "B-Series: B38, B48, B58",
//       icon: <Wrench className="h-5 w-5" />,
//       description:
//         "Introduced in 2014, the Modular Engine Family (MEP) shares cylinder spacing (91mm), bore (82mm), stroke variants, mounting points, and ECU architecture.",
//       howItWorks:
//         "Standardized architecture allows scalable production from 3-cylinder to 6-cylinder engines with shared components and manufacturing processes.",
//       generations: [
//         { name: "B38", engine: "1.5L I3", feature: "Used in Mini, 116i" },
//         { name: "B48", engine: "2.0L I4", feature: "330i, X3, Z4" },
//         { name: "B58", engine: "3.0L I6", feature: "M340i, G80 M3, Supra" },
//       ],
//       affectedEngines: ["B38A15A", "B48B20", "B58B30"],
//       commonFailures: [
//         { issue: "B38: Carbon buildup", note: "no port injection" },
//         { issue: "B48: HPFP, VANOS rattle", code: "" },
//         { issue: "B58: Water pump, carbon", note: "less than B48" },
//       ],
//       sources: [
//         {
//           name: "BMW Group Modular Engine Platform Technical Brief (PT-2014-02)",
//           url: "https://www.bmwgroup.com/",
//         },
//         {
//           name: "EU Regulation (EC) No 715/2007 – Annex I, Section 5.3",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
//         },
//       ],
//     },
//     {
//       id: "hybrid",
//       name: "Hybrid & iPerformance",
//       subtitle: "Electrified Powertrains",
//       icon: <Gauge className="h-5 w-5" />,
//       description:
//         "BMW's iPerformance models integrate petrol engines with electric motors for enhanced efficiency and performance.",
//       howItWorks:
//         "eDrive integration via transmission combines internal combustion engine with electric motor. High-voltage battery provides electric-only driving capability and regenerative braking.",
//       generations: [
//         {
//           name: "X1 xDrive25e",
//           engine: "B38A15A + 88kW motor",
//           feature: "Compact SUV hybrid",
//         },
//         {
//           name: "330e",
//           engine: "B48B20 + 88kW motor",
//           feature: "Executive sedan hybrid",
//         },
//         {
//           name: "530e",
//           engine: "B48B20 + 88kW motor",
//           feature: "Luxury sedan hybrid",
//         },
//       ],
//       affectedEngines: ["B38A15A", "B48B20"],
//       commonFailures: [
//         {
//           issue: "Electric components: highly reliable",
//           note: "BMW TIS A25001",
//         },
//         { issue: "Combined system complexity", note: "increases service cost" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS SI E16 00 01 – iPerformance System Overview",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "Directive 2007/46/EC – Annex XI – Hybrid Vehicle Requirements",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0046",
//         },
//       ],
//     },
//   ];
//
//   return (
//     <Container spaceY={8}>
//       {/* Section Header */}
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
//           BMW Engine Technology & Innovations
//         </h2>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
//           A technical breakdown of BMW's core engine systems — including
//           VALVETRONIC, TwinPower Turbo, timing architectures, and modular design
//           — with documented reliability impacts. All data sourced from{" "}
//           <a
//             href="https://www.bmwgroup.com/en.html"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW Group PT-2023
//             <ExternalLink className="h-3 w-3" />
//           </a>
//           ,{" "}
//           <a
//             href="https://www.bmw-techinfo.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW TIS
//             <ExternalLink className="h-3 w-3" />
//           </a>
//           , and{" "}
//           <a
//             href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             EU Regulation (EC) No 715/2007
//             <ExternalLink className="h-3 w-3" />
//           </a>
//           .
//         </p>
//       </div>
//
//       {/* Technology Sections */}
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="text-foreground">
//             Engineering Evolution & Technical Systems
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="h-[800px] overflow-y-auto space-y-2 p-6">
//           {technologies.map((tech) => (
//             <Collapsible
//               key={tech.id}
//               open={openSections.includes(tech.id)}
//               onOpenChange={() => toggleSection(tech.id)}
//             >
//               <CollapsibleTrigger asChild>
//                 <Card className="cursor-pointer hover:bg-accent/70 transition-colors border-border bg-accent text-foreground">
//                   <CardContent className="p-4 overflow-x-auto">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         {openSections.includes(tech.id) ? (
//                           <ChevronDown className="h-5 w-5 text-foreground" />
//                         ) : (
//                           <ChevronRight className="h-5 w-5 text-foreground" />
//                         )}
//                         <div className="flex items-center gap-3">
//                           {tech.icon}
//                           <div>
//                             <h3 className="font-semibold text-lg text-foreground">
//                               {tech.name}
//                             </h3>
//                             <p className="text-sm text-muted-foreground">
//                               {tech.subtitle}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <Badge
//                         variant="outline"
//                         className="text-xs border-border text-foreground"
//                       >
//                         {tech.affectedEngines.length} engines
//                       </Badge>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </CollapsibleTrigger>
//
//               <CollapsibleContent className="mt-2">
//                 <Card className="border-border bg-background">
//                   <CardContent className="p-6 space-y-6">
//                     {/* Description */}
//                     <div className="space-y-2">
//                       <h4 className="font-semibold text-foreground">
//                         Overview
//                       </h4>
//                       <p className="text-muted-foreground leading-relaxed">
//                         {tech.description}
//                       </p>
//                     </div>
//
//                     {/* How it Works */}
//                     <div className="space-y-2">
//                       <h4 className="font-semibold text-foreground">
//                         How it Works
//                       </h4>
//                       <p className="text-muted-foreground leading-relaxed">
//                         {tech.howItWorks}
//                       </p>
//                     </div>
//
//                     {/* Generations/Evolution */}
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-foreground">
//                         Evolution
//                       </h4>
//                       <div className="grid gap-3">
//                         {tech.generations.map((gen) => (
//                           <Card
//                             key={gen.name}
//                             className="p-3 bg-muted/30 border-border"
//                           >
//                             <div className="flex items-start justify-between">
//                               <div>
//                                 <div className="font-medium text-foreground">
//                                   {gen.name}
//                                 </div>
//                                 <div className="text-sm text-muted-foreground">
//                                   {gen.engine}
//                                 </div>
//                               </div>
//                               <Badge
//                                 variant="outline"
//                                 className="text-xs border-border text-foreground"
//                               >
//                                 {gen.feature}
//                               </Badge>
//                             </div>
//                           </Card>
//                         ))}
//                       </div>
//                     </div>
//
//                     {/* Affected Engines */}
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-foreground">
//                         Affected Engines
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {tech.affectedEngines.map((engine) => (
//                           <Badge
//                             key={engine}
//                             variant="secondary"
//                             className="font-mono text-xs"
//                           >
//                             {engine}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//
//                     {/* Common Failures */}
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-foreground">
//                         Common Issues
//                       </h4>
//                       <div className="space-y-2">
//                         {tech.commonFailures.map((failure) => (
//                           <Card
//                             key={failure.code}
//                             className="p-3 bg-muted/20 border-border"
//                           >
//                             <div className="flex items-start justify-between">
//                               <div className="space-y-1">
//                                 <div className="text-sm font-medium text-foreground">
//                                   {failure.issue}
//                                 </div>
//                                 {failure.note && (
//                                   <div className="text-xs text-muted-foreground">
//                                     {failure.note}
//                                   </div>
//                                 )}
//                               </div>
//                               {failure.code && (
//                                 <Badge
//                                   variant="destructive"
//                                   className="text-xs font-mono"
//                                 >
//                                   {failure.code}
//                                 </Badge>
//                               )}
//                             </div>
//                           </Card>
//                         ))}
//                       </div>
//                     </div>
//
//                     {/* Sources */}
//                     <div className="space-y-3">
//                       <h4 className="font-semibold text-foreground">Sources</h4>
//                       <div className="space-y-2">
//                         {tech.sources.map((source) => (
//                           <div
//                             key={source.name}
//                             className="flex items-start gap-2"
//                           >
//                             <Badge
//                               variant="outline"
//                               className="text-xs shrink-0 mt-0.5 border-border text-foreground"
//                             >
//                               🔍
//                             </Badge>
//                             <a
//                               href={source.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//                             >
//                               {source.name}
//                               <ExternalLink className="h-3 w-3" />
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </CollapsibleContent>
//             </Collapsible>
//           ))}
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
//               All technical descriptions and failure data sourced from{" "}
//               <a
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Product Technical Reports
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               ,{" "}
//               <a
//                 href="https://www.bmw-techinfo.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW TIS Service Information
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               , and{" "}
//               <a
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Regulation (EC) No 715/2007
//                 <ExternalLink className="h-3 w-3" />
//               </a>{" "}
//               on vehicle type-approval.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default TechnologyOverview;
// "use client";
// import {
//   ChevronDown,
//   ChevronRight,
//   Cog,
//   Database,
//   ExternalLink,
//   Fuel,
//   Gauge,
//   Settings,
//   Wrench,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ScrollArea } from "@/components/ui/scroll-area";
//
// const TechnologyOverview = () => {
//   const [openSections, setOpenSections] = useState<string[]>([]);
//   const toggleSection = (sectionId: string) => {
//     setOpenSections((prev) =>
//       prev.includes(sectionId)
//         ? prev.filter((id) => id !== sectionId)
//         : [...prev, sectionId],
//     );
//   };
//
//   const technologies = [
//     // ... (keeping the same technologies data)
//     {
//       id: "valvetronic",
//       name: "VALVETRONIC",
//       subtitle: "Variable Valve Lift (1999–Present)",
//       icon: <Settings className="h-5 w-5" />,
//       description:
//         "BMW's proprietary VALVETRONIC system eliminates the throttle butterfly by continuously varying intake valve lift, improving efficiency and throttle response.",
//       howItWorks:
//         "An intermediate lever between the camshaft and valves is adjusted via an electric actuator, changing valve lift from 0.3mm to 9.8mm.",
//       generations: [
//         {
//           name: "VALVETRONIC I",
//           engine: "M54B22 (2001)",
//           feature: "Limited range",
//         },
//         {
//           name: "VALVETRONIC II",
//           engine: "N52B25 (2005)",
//           feature: "Faster response",
//         },
//         {
//           name: "VALVETRONIC III",
//           engine: "N53B30 (2007)",
//           feature: "Integrated with Double-VANOS",
//         },
//         {
//           name: "VALVETRONIC IV",
//           engine: "B58B30 (2015)",
//           feature: "Lighter, more durable",
//         },
//       ],
//       affectedEngines: [
//         "M54B22",
//         "M54B30",
//         "N52B25",
//         "N52B30",
//         "N53B30",
//         "N54B30",
//         "B48B20",
//         "B58B30",
//       ],
//       commonFailures: [
//         { issue: "Eccentric shaft sensor failure", code: "P151A" },
//         { issue: "Intermediate lever wear", note: "especially N52, N53" },
//         { issue: "Actuator motor seizure", code: "" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS Document SI B13 00 01 – VALVETRONIC System Operation",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "BMW Group Drive Systems 2023 – Section 4.2: Variable Valve Control",
//           url: "https://www.bmwgroup.com/en/technology/efficient-dynamics.html",
//         },
//       ],
//     },
//     {
//       id: "twinpower",
//       name: "TwinPower Turbo",
//       subtitle: "BMW's Integrated Performance System",
//       icon: <Zap className="h-5 w-5" />,
//       description:
//         "TwinPower Turbo is BMW's branding for engines combining turbocharging, direct fuel injection (High Precision Injection), VALVETRONIC (petrol), and Double-VANOS (variable cam timing).",
//       howItWorks:
//         "Integrates multiple technologies for optimal performance: turbocharging for power, direct injection for efficiency, VALVETRONIC for throttle response, and Double-VANOS for variable cam timing.",
//       generations: [
//         {
//           name: "First Gen (2006)",
//           engine: "N54B30",
//           feature: "Twin-turbo inline-6",
//         },
//         {
//           name: "Second Gen (2011)",
//           engine: "N20B20",
//           feature: "Single twin-scroll turbo",
//         },
//         {
//           name: "Third Gen (2015)",
//           engine: "B48B20",
//           feature: "Closed-deck block, improved cooling",
//         },
//         {
//           name: "Fourth Gen (2020)",
//           engine: "B48B20O1",
//           feature: "Anti-lag, improved HPFP",
//         },
//       ],
//       affectedEngines: ["N54B30", "N20B20", "B48B20", "B58B30"],
//       commonFailures: [
//         {
//           issue: "N54B30: High performance, high failure rate",
//           note: "HPFP, rods",
//         },
//         { issue: "N20B20: Over-turboed, wastegate issues", code: "" },
//         {
//           issue: "B48B20: Reliable with maintenance",
//           note: "carbon buildup risk",
//         },
//         {
//           issue: "B58B30: Forged internals, track-capable",
//           note: "water pump common",
//         },
//       ],
//       sources: [
//         {
//           name: "BMW Group PT-2023 – TwinPower Turbo Evolution (Doc. A24901)",
//           url: "https://www.bmwgroup.com/en/technology/",
//         },
//         {
//           name: "EU Regulation (EC) No 715/2007 – Article 3, Definitions",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
//         },
//       ],
//     },
//     {
//       id: "timing",
//       name: "Timing Systems",
//       subtitle: "Chain vs. Belt – Reliability by Design",
//       icon: <Cog className="h-5 w-5" />,
//       description:
//         "BMW uses timing chains on most engines, but design affects longevity significantly.",
//       howItWorks:
//         "Timing chains synchronize crankshaft and camshaft rotation. Chain placement (front vs rear) dramatically impacts accessibility and reliability.",
//       generations: [
//         {
//           name: "Front-Mounted Chain (Reliable)",
//           engine: "M54, N52, B58",
//           feature: "Easy access, low stress",
//         },
//         {
//           name: "Rear-Mounted Chain (High Risk)",
//           engine: "N47D20A/C, N47TUD20",
//           feature: "Chain at rear → hard to access",
//         },
//         {
//           name: "Hybrid Timing",
//           engine: "M47D20",
//           feature: "Intermediate reliability",
//         },
//       ],
//       affectedEngines: ["M54", "N52", "B58", "N47D20A", "N47D20C", "M47D20"],
//       commonFailures: [
//         { issue: "B58: Lifetime chain", note: "BMW TIS A24902" },
//         {
//           issue: "N47: Tensioner failure common",
//           note: "chain jumps → engine damage",
//         },
//         { issue: "M47: Tensioner wear after 120,000 miles", code: "" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS SI B11 03 08 – N47 Timing Chain Replacement",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "Directive 2007/46/EC – Annex I, Section 1.2",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0046",
//         },
//       ],
//     },
//     {
//       id: "hpfp",
//       name: "High-Pressure Fuel Pump (HPFP)",
//       subtitle: "Petrol Engine Weak Point",
//       icon: <Fuel className="h-5 w-5" />,
//       description:
//         "The HPFP delivers fuel at up to 200 bar for direct injection systems.",
//       howItWorks:
//         "Mechanical pump driven by camshaft delivers high-pressure fuel to direct injection system. Critical for proper fuel atomization and combustion.",
//       generations: [
//         {
//           name: "Siemens HPFP",
//           engine: "N54B30",
//           feature: "High failure rate → BMW extended warranty",
//         },
//         {
//           name: "Over-stressed pump",
//           engine: "N20B20",
//           feature: "Failure at 60k–80k miles",
//         },
//         {
//           name: "Improved design",
//           engine: "B48B20",
//           feature: "Still service item at 100k+ miles",
//         },
//       ],
//       affectedEngines: ["N54B30", "N20B20", "B48B20", "N55B30"],
//       commonFailures: [
//         { issue: "Wear in N54/N55", note: "lean misfire", code: "P0171" },
//         { issue: "Electrical failure in B48", note: "limp mode" },
//         { issue: "Noise ('ticking')", note: "often first symptom" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS SI B13 10 01 – HPFP Diagnosis",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "BMW Group Warranty Bulletin WB-12-07-01 – N54 HPFP coverage extension",
//           url: "https://www.bmwgroup.com/",
//         },
//       ],
//     },
//     {
//       id: "common-rail",
//       name: "Common Rail Diesel",
//       subtitle: "From M47 to B47",
//       icon: <Database className="h-5 w-5" />,
//       description:
//         "BMW's diesel evolution focused on pressure, emissions, and refinement.",
//       howItWorks:
//         "High-pressure fuel rail supplies multiple injectors with precise fuel delivery. Pressure increased over generations for better atomization and emissions control.",
//       generations: [
//         {
//           name: "M47 (1998–2007)",
//           engine: "1,350 bar",
//           feature: "M47D20 - Injector coking, EGR",
//         },
//         {
//           name: "N47 (2007–2015)",
//           engine: "1,600 bar",
//           feature: "N47D20A/C - Timing chain, turbo spring",
//         },
//         {
//           name: "B47 (2014–Now)",
//           engine: "2,000 bar",
//           feature: "B47D20, B37C15A - Timing chain (early), DPF regeneration",
//         },
//       ],
//       affectedEngines: ["M47D20", "N47D20A", "N47D20C", "B47D20", "B37C15A"],
//       commonFailures: [
//         { issue: "M47: Euro 3–4 compliance", code: "" },
//         { issue: "N47: Euro 5 compliance", code: "" },
//         { issue: "B47: Euro 6d — includes SCR and AdBlue", code: "" },
//       ],
//       sources: [
//         {
//           name: "BMW Group Diesel Technology Roadmap 2015–2025",
//           url: "https://www.bmwgroup.com/",
//         },
//         {
//           name: "Commission Regulation (EU) 2017/1151 – WLTP Testing",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151",
//         },
//       ],
//     },
//     {
//       id: "modular",
//       name: "Modular Engine Design",
//       subtitle: "B-Series: B38, B48, B58",
//       icon: <Wrench className="h-5 w-5" />,
//       description:
//         "Introduced in 2014, the Modular Engine Family (MEP) shares cylinder spacing (91mm), bore (82mm), stroke variants, mounting points, and ECU architecture.",
//       howItWorks:
//         "Standardized architecture allows scalable production from 3-cylinder to 6-cylinder engines with shared components and manufacturing processes.",
//       generations: [
//         { name: "B38", engine: "1.5L I3", feature: "Used in Mini, 116i" },
//         { name: "B48", engine: "2.0L I4", feature: "330i, X3, Z4" },
//         { name: "B58", engine: "3.0L I6", feature: "M340i, G80 M3, Supra" },
//       ],
//       affectedEngines: ["B38A15A", "B48B20", "B58B30"],
//       commonFailures: [
//         { issue: "B38: Carbon buildup", note: "no port injection" },
//         { issue: "B48: HPFP, VANOS rattle", code: "" },
//         { issue: "B58: Water pump, carbon", note: "less than B48" },
//       ],
//       sources: [
//         {
//           name: "BMW Group Modular Engine Platform Technical Brief (PT-2014-02)",
//           url: "https://www.bmwgroup.com/",
//         },
//         {
//           name: "EU Regulation (EC) No 715/2007 – Annex I, Section 5.3",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
//         },
//       ],
//     },
//     {
//       id: "hybrid",
//       name: "Hybrid & iPerformance",
//       subtitle: "Electrified Powertrains",
//       icon: <Gauge className="h-5 w-5" />,
//       description:
//         "BMW's iPerformance models integrate petrol engines with electric motors for enhanced efficiency and performance.",
//       howItWorks:
//         "eDrive integration via transmission combines internal combustion engine with electric motor. High-voltage battery provides electric-only driving capability and regenerative braking.",
//       generations: [
//         {
//           name: "X1 xDrive25e",
//           engine: "B38A15A + 88kW motor",
//           feature: "Compact SUV hybrid",
//         },
//         {
//           name: "330e",
//           engine: "B48B20 + 88kW motor",
//           feature: "Executive sedan hybrid",
//         },
//         {
//           name: "530e",
//           engine: "B48B20 + 88kW motor",
//           feature: "Luxury sedan hybrid",
//         },
//       ],
//       affectedEngines: ["B38A15A", "B48B20"],
//       commonFailures: [
//         {
//           issue: "Electric components: highly reliable",
//           note: "BMW TIS A25001",
//         },
//         { issue: "Combined system complexity", note: "increases service cost" },
//       ],
//       sources: [
//         {
//           name: "BMW TIS SI E16 00 01 – iPerformance System Overview",
//           url: "https://www.bmw-techinfo.com/",
//         },
//         {
//           name: "Directive 2007/46/EC – Annex XI – Hybrid Vehicle Requirements",
//           url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0046",
//         },
//       ],
//     },
//   ];
//
//   // Mobile card component for technology details
//   const TechnologyCard = ({ tech }) => (
//     <Card className="border-border mb-4">
//       <CardContent className="p-4 space-y-4">
//         {/* Description */}
//         <div className="space-y-2">
//           <h4 className="font-semibold text-foreground">Overview</h4>
//           <p className="text-muted-foreground text-sm leading-relaxed">
//             {tech.description}
//           </p>
//         </div>
//
//         {/* How it Works */}
//         <div className="space-y-2">
//           <h4 className="font-semibold text-foreground">How it Works</h4>
//           <p className="text-muted-foreground text-sm leading-relaxed">
//             {tech.howItWorks}
//           </p>
//         </div>
//
//         {/* Generations/Evolution */}
//         <div className="space-y-2">
//           <h4 className="font-semibold text-foreground">Evolution</h4>
//           <div className="space-y-2">
//             {tech.generations.map((gen) => (
//               <Card key={gen.name} className="p-3 bg-muted/30 border-border">
//                 <div className="space-y-1">
//                   <div className="font-medium text-foreground text-sm">
//                     {gen.name}
//                   </div>
//                   <div className="text-xs text-muted-foreground">
//                     {gen.engine}
//                   </div>
//                   <Badge
//                     variant="outline"
//                     className="text-xs border-border text-foreground"
//                   >
//                     {gen.feature}
//                   </Badge>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//
//         {/* Affected Engines */}
//         <div className="space-y-2">
//           <h4 className="font-semibold text-foreground">Affected Engines</h4>
//           <div className="flex flex-wrap gap-2">
//             {tech.affectedEngines.map((engine) => (
//               <Badge
//                 key={engine}
//                 variant="secondary"
//                 className="font-mono text-xs"
//               >
//                 {engine}
//               </Badge>
//             ))}
//           </div>
//         </div>
//
//         {/* Common Failures */}
//         <div className="space-y-2">
//           <h4 className="font-semibold text-foreground">Common Issues</h4>
//           <div className="space-y-2">
//             {tech.commonFailures.map((failure) => (
//               <Card
//                 key={failure.code}
//                 className="p-3 bg-muted/20 border-border"
//               >
//                 <div className="space-y-1">
//                   <div className="text-sm font-medium text-foreground">
//                     {failure.issue}
//                   </div>
//                   {failure.note && (
//                     <div className="text-xs text-muted-foreground">
//                       {failure.note}
//                     </div>
//                   )}
//                   {failure.code && (
//                     <Badge variant="destructive" className="text-xs font-mono">
//                       {failure.code}
//                     </Badge>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//
//         {/* Sources */}
//         <div className="space-y-2">
//           <h4 className="font-semibold text-foreground">Sources</h4>
//           <div className="space-y-2">
//             {tech.sources.map((source) => (
//               <div key={source.name} className="flex items-start gap-2">
//                 <Badge
//                   variant="outline"
//                   className="text-xs shrink-0 mt-0.5 border-border text-foreground"
//                 >
//                   🔍
//                 </Badge>
//                 <a
//                   href={source.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//                 >
//                   {source.name}
//                   <ExternalLink className="h-3 w-3" />
//                 </a>
//               </div>
//             ))}
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
//           BMW Engine Technology & Innovations
//         </h2>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
//           A technical breakdown of BMW's core engine systems — including
//           VALVETRONIC, TwinPower Turbo, timing architectures, and modular design
//           — with documented reliability impacts. All data sourced from{" "}
//           <a
//             href="https://www.bmwgroup.com/en.html"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW Group PT-2023
//             <ExternalLink className="h-3 w-3" />
//           </a>
//           ,{" "}
//           <a
//             href="https://www.bmw-techinfo.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             BMW TIS
//             <ExternalLink className="h-3 w-3" />
//           </a>
//           , and{" "}
//           <a
//             href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//           >
//             EU Regulation (EC) No 715/2007
//             <ExternalLink className="h-3 w-3" />
//           </a>
//           .
//         </p>
//       </div>
//
//       {/* Technology Sections */}
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="text-foreground">
//             Engineering Evolution & Technical Systems
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-0">
//           <ScrollArea className="h-[800px]">
//             <div className="space-y-2 p-6">
//               {technologies.map((tech) => (
//                 <Collapsible
//                   key={tech.id}
//                   open={openSections.includes(tech.id)}
//                   onOpenChange={() => toggleSection(tech.id)}
//                 >
//                   <CollapsibleTrigger asChild>
//                     <Card className="cursor-pointer hover:bg-accent/70 transition-colors border-border bg-accent text-foreground">
//                       <CardContent className="p-4">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             {openSections.includes(tech.id) ? (
//                               <ChevronDown className="h-5 w-5 text-foreground" />
//                             ) : (
//                               <ChevronRight className="h-5 w-5 text-foreground" />
//                             )}
//                             <div className="flex items-center gap-3">
//                               {tech.icon}
//                               <div>
//                                 <h3 className="font-semibold text-lg text-foreground">
//                                   {tech.name}
//                                 </h3>
//                                 <p className="text-sm text-muted-foreground">
//                                   {tech.subtitle}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <Badge
//                             variant="outline"
//                             className="text-xs border-border text-foreground"
//                           >
//                             {tech.affectedEngines.length} engines
//                           </Badge>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="mt-2">
//                     {/* Desktop View - Hidden on mobile */}
//                     <div className="hidden md:block">
//                       <Card className="border-border bg-background">
//                         <CardContent className="p-6 space-y-6">
//                           {/* Description */}
//                           <div className="space-y-2">
//                             <h4 className="font-semibold text-foreground">
//                               Overview
//                             </h4>
//                             <p className="text-muted-foreground leading-relaxed">
//                               {tech.description}
//                             </p>
//                           </div>
//                           {/* How it Works */}
//                           <div className="space-y-2">
//                             <h4 className="font-semibold text-foreground">
//                               How it Works
//                             </h4>
//                             <p className="text-muted-foreground leading-relaxed">
//                               {tech.howItWorks}
//                             </p>
//                           </div>
//                           {/* Generations/Evolution */}
//                           <div className="space-y-3">
//                             <h4 className="font-semibold text-foreground">
//                               Evolution
//                             </h4>
//                             <div className="grid gap-3">
//                               {tech.generations.map((gen) => (
//                                 <Card
//                                   key={gen.name}
//                                   className="p-3 bg-muted/30 border-border"
//                                 >
//                                   <div className="flex items-start justify-between">
//                                     <div>
//                                       <div className="font-medium text-foreground">
//                                         {gen.name}
//                                       </div>
//                                       <div className="text-sm text-muted-foreground">
//                                         {gen.engine}
//                                       </div>
//                                     </div>
//                                     <Badge
//                                       variant="outline"
//                                       className="text-xs border-border text-foreground"
//                                     >
//                                       {gen.feature}
//                                     </Badge>
//                                   </div>
//                                 </Card>
//                               ))}
//                             </div>
//                           </div>
//                           {/* Affected Engines */}
//                           <div className="space-y-3">
//                             <h4 className="font-semibold text-foreground">
//                               Affected Engines
//                             </h4>
//                             <div className="flex flex-wrap gap-2">
//                               {tech.affectedEngines.map((engine) => (
//                                 <Badge
//                                   key={engine}
//                                   variant="secondary"
//                                   className="font-mono text-xs"
//                                 >
//                                   {engine}
//                                 </Badge>
//                               ))}
//                             </div>
//                           </div>
//                           {/* Common Failures */}
//                           <div className="space-y-3">
//                             <h4 className="font-semibold text-foreground">
//                               Common Issues
//                             </h4>
//                             <div className="space-y-2">
//                               {tech.commonFailures.map((failure) => (
//                                 <Card
//                                   key={failure.code}
//                                   className="p-3 bg-muted/20 border-border"
//                                 >
//                                   <div className="flex items-start justify-between">
//                                     <div className="space-y-1">
//                                       <div className="text-sm font-medium text-foreground">
//                                         {failure.issue}
//                                       </div>
//                                       {failure.note && (
//                                         <div className="text-xs text-muted-foreground">
//                                           {failure.note}
//                                         </div>
//                                       )}
//                                     </div>
//                                     {failure.code && (
//                                       <Badge
//                                         variant="destructive"
//                                         className="text-xs font-mono"
//                                       >
//                                         {failure.code}
//                                       </Badge>
//                                     )}
//                                   </div>
//                                 </Card>
//                               ))}
//                             </div>
//                           </div>
//                           {/* Sources */}
//                           <div className="space-y-3">
//                             <h4 className="font-semibold text-foreground">
//                               Sources
//                             </h4>
//                             <div className="space-y-2">
//                               {tech.sources.map((source) => (
//                                 <div
//                                   key={source.name}
//                                   className="flex items-start gap-2"
//                                 >
//                                   <Badge
//                                     variant="outline"
//                                     className="text-xs shrink-0 mt-0.5 border-border text-foreground"
//                                   >
//                                     🔍
//                                   </Badge>
//                                   <a
//                                     href={source.url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//                                   >
//                                     {source.name}
//                                     <ExternalLink className="h-3 w-3" />
//                                   </a>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div>
//
//                     {/* Mobile View - Hidden on desktop */}
//                     <div className="md:hidden p-2">
//                       <TechnologyCard tech={tech} />
//                     </div>
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
//               All technical descriptions and failure data sourced from{" "}
//               <a
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Product Technical Reports
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               ,{" "}
//               <a
//                 href="https://www.bmw-techinfo.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW TIS Service Information
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               , and{" "}
//               <a
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Regulation (EC) No 715/2007
//                 <ExternalLink className="h-3 w-3" />
//               </a>{" "}
//               on vehicle type-approval.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default TechnologyOverview;
"use client";
import {
  ChevronDown,
  ChevronRight,
  Cog,
  Database,
  ExternalLink,
  Fuel,
  Gauge,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define TypeScript interfaces
interface Generation {
  name: string;
  engine: string;
  feature: string;
}

interface CommonFailure {
  issue: string;
  code?: string;
  note?: string;
}

interface Source {
  name: string;
  url: string;
}

interface Technology {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  howItWorks: string;
  generations: Generation[];
  affectedEngines: string[];
  commonFailures: CommonFailure[];
  sources: Source[];
}

const TechnologyOverview = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const technologies: Technology[] = [
    {
      id: "valvetronic",
      name: "VALVETRONIC",
      subtitle: "Variable Valve Lift (1999–Present)",
      icon: <Settings className="h-5 w-5" />,
      description:
        "BMW's proprietary VALVETRONIC system eliminates the throttle butterfly by continuously varying intake valve lift, improving efficiency and throttle response.",
      howItWorks:
        "An intermediate lever between the camshaft and valves is adjusted via an electric actuator, changing valve lift from 0.3mm to 9.8mm.",
      generations: [
        {
          name: "VALVETRONIC I",
          engine: "M54B22 (2001)",
          feature: "Limited range",
        },
        {
          name: "VALVETRONIC II",
          engine: "N52B25 (2005)",
          feature: "Faster response",
        },
        {
          name: "VALVETRONIC III",
          engine: "N53B30 (2007)",
          feature: "Integrated with Double-VANOS",
        },
        {
          name: "VALVETRONIC IV",
          engine: "B58B30 (2015)",
          feature: "Lighter, more durable",
        },
      ],
      affectedEngines: [
        "M54B22",
        "M54B30",
        "N52B25",
        "N52B30",
        "N53B30",
        "N54B30",
        "B48B20",
        "B58B30",
      ],
      commonFailures: [
        { issue: "Eccentric shaft sensor failure", code: "P151A" },
        { issue: "Intermediate lever wear", note: "especially N52, N53" },
        { issue: "Actuator motor seizure", code: "" },
      ],
      sources: [
        {
          name: "BMW TIS Document SI B13 00 01 – VALVETRONIC System Operation",
          url: "https://www.bmw-techinfo.com/",
        },
        {
          name: "BMW Group Drive Systems 2023 – Section 4.2: Variable Valve Control",
          url: "https://www.bmwgroup.com/en/technology/efficient-dynamics.html",
        },
      ],
    },
    {
      id: "twinpower",
      name: "TwinPower Turbo",
      subtitle: "BMW's Integrated Performance System",
      icon: <Zap className="h-5 w-5" />,
      description:
        "TwinPower Turbo is BMW's branding for engines combining turbocharging, direct fuel injection (High Precision Injection), VALVETRONIC (petrol), and Double-VANOS (variable cam timing).",
      howItWorks:
        "Integrates multiple technologies for optimal performance: turbocharging for power, direct injection for efficiency, VALVETRONIC for throttle response, and Double-VANOS for variable cam timing.",
      generations: [
        {
          name: "First Gen (2006)",
          engine: "N54B30",
          feature: "Twin-turbo inline-6",
        },
        {
          name: "Second Gen (2011)",
          engine: "N20B20",
          feature: "Single twin-scroll turbo",
        },
        {
          name: "Third Gen (2015)",
          engine: "B48B20",
          feature: "Closed-deck block, improved cooling",
        },
        {
          name: "Fourth Gen (2020)",
          engine: "B48B20O1",
          feature: "Anti-lag, improved HPFP",
        },
      ],
      affectedEngines: ["N54B30", "N20B20", "B48B20", "B58B30"],
      commonFailures: [
        {
          issue: "N54B30: High performance, high failure rate",
          note: "HPFP, rods",
        },
        { issue: "N20B20: Over-turboed, wastegate issues", code: "" },
        {
          issue: "B48B20: Reliable with maintenance",
          note: "carbon buildup risk",
        },
        {
          issue: "B58B30: Forged internals, track-capable",
          note: "water pump common",
        },
      ],
      sources: [
        {
          name: "BMW Group PT-2023 – TwinPower Turbo Evolution (Doc. A24901)",
          url: "https://www.bmwgroup.com/en/technology/",
        },
        {
          name: "EU Regulation (EC) No 715/2007 – Article 3, Definitions",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
        },
      ],
    },
    {
      id: "timing",
      name: "Timing Systems",
      subtitle: "Chain vs. Belt – Reliability by Design",
      icon: <Cog className="h-5 w-5" />,
      description:
        "BMW uses timing chains on most engines, but design affects longevity significantly.",
      howItWorks:
        "Timing chains synchronize crankshaft and camshaft rotation. Chain placement (front vs rear) dramatically impacts accessibility and reliability.",
      generations: [
        {
          name: "Front-Mounted Chain (Reliable)",
          engine: "M54, N52, B58",
          feature: "Easy access, low stress",
        },
        {
          name: "Rear-Mounted Chain (High Risk)",
          engine: "N47D20A/C, N47TUD20",
          feature: "Chain at rear → hard to access",
        },
        {
          name: "Hybrid Timing",
          engine: "M47D20",
          feature: "Intermediate reliability",
        },
      ],
      affectedEngines: ["M54", "N52", "B58", "N47D20A", "N47D20C", "M47D20"],
      commonFailures: [
        { issue: "B58: Lifetime chain", note: "BMW TIS A24902" },
        {
          issue: "N47: Tensioner failure common",
          note: "chain jumps → engine damage",
        },
        { issue: "M47: Tensioner wear after 120,000 miles", code: "" },
      ],
      sources: [
        {
          name: "BMW TIS SI B11 03 08 – N47 Timing Chain Replacement",
          url: "https://www.bmw-techinfo.com/",
        },
        {
          name: "Directive 2007/46/EC – Annex I, Section 1.2",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0046",
        },
      ],
    },
    {
      id: "hpfp",
      name: "High-Pressure Fuel Pump (HPFP)",
      subtitle: "Petrol Engine Weak Point",
      icon: <Fuel className="h-5 w-5" />,
      description:
        "The HPFP delivers fuel at up to 200 bar for direct injection systems.",
      howItWorks:
        "Mechanical pump driven by camshaft delivers high-pressure fuel to direct injection system. Critical for proper fuel atomization and combustion.",
      generations: [
        {
          name: "Siemens HPFP",
          engine: "N54B30",
          feature: "High failure rate → BMW extended warranty",
        },
        {
          name: "Over-stressed pump",
          engine: "N20B20",
          feature: "Failure at 60k–80k miles",
        },
        {
          name: "Improved design",
          engine: "B48B20",
          feature: "Still service item at 100k+ miles",
        },
      ],
      affectedEngines: ["N54B30", "N20B20", "B48B20", "N55B30"],
      commonFailures: [
        { issue: "Wear in N54/N55", note: "lean misfire", code: "P0171" },
        { issue: "Electrical failure in B48", note: "limp mode" },
        { issue: "Noise ('ticking')", note: "often first symptom" },
      ],
      sources: [
        {
          name: "BMW TIS SI B13 10 01 – HPFP Diagnosis",
          url: "https://www.bmw-techinfo.com/",
        },
        {
          name: "BMW Group Warranty Bulletin WB-12-07-01 – N54 HPFP coverage extension",
          url: "https://www.bmwgroup.com/",
        },
      ],
    },
    {
      id: "common-rail",
      name: "Common Rail Diesel",
      subtitle: "From M47 to B47",
      icon: <Database className="h-5 w-5" />,
      description:
        "BMW's diesel evolution focused on pressure, emissions, and refinement.",
      howItWorks:
        "High-pressure fuel rail supplies multiple injectors with precise fuel delivery. Pressure increased over generations for better atomization and emissions control.",
      generations: [
        {
          name: "M47 (1998–2007)",
          engine: "1,350 bar",
          feature: "M47D20 - Injector coking, EGR",
        },
        {
          name: "N47 (2007–2015)",
          engine: "1,600 bar",
          feature: "N47D20A/C - Timing chain, turbo spring",
        },
        {
          name: "B47 (2014–Now)",
          engine: "2,000 bar",
          feature: "B47D20, B37C15A - Timing chain (early), DPF regeneration",
        },
      ],
      affectedEngines: ["M47D20", "N47D20A", "N47D20C", "B47D20", "B37C15A"],
      commonFailures: [
        { issue: "M47: Euro 3–4 compliance", code: "" },
        { issue: "N47: Euro 5 compliance", code: "" },
        { issue: "B47: Euro 6d — includes SCR and AdBlue", code: "" },
      ],
      sources: [
        {
          name: "BMW Group Diesel Technology Roadmap 2015–2025",
          url: "https://www.bmwgroup.com/",
        },
        {
          name: "Commission Regulation (EU) 2017/1151 – WLTP Testing",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151",
        },
      ],
    },
    {
      id: "modular",
      name: "Modular Engine Design",
      subtitle: "B-Series: B38, B48, B58",
      icon: <Wrench className="h-5 w-5" />,
      description:
        "Introduced in 2014, the Modular Engine Family (MEP) shares cylinder spacing (91mm), bore (82mm), stroke variants, mounting points, and ECU architecture.",
      howItWorks:
        "Standardized architecture allows scalable production from 3-cylinder to 6-cylinder engines with shared components and manufacturing processes.",
      generations: [
        { name: "B38", engine: "1.5L I3", feature: "Used in Mini, 116i" },
        { name: "B48", engine: "2.0L I4", feature: "330i, X3, Z4" },
        { name: "B58", engine: "3.0L I6", feature: "M340i, G80 M3, Supra" },
      ],
      affectedEngines: ["B38A15A", "B48B20", "B58B30"],
      commonFailures: [
        { issue: "B38: Carbon buildup", note: "no port injection" },
        { issue: "B48: HPFP, VANOS rattle", code: "" },
        { issue: "B58: Water pump, carbon", note: "less than B48" },
      ],
      sources: [
        {
          name: "BMW Group Modular Engine Platform Technical Brief (PT-2014-02)",
          url: "https://www.bmwgroup.com/",
        },
        {
          name: "EU Regulation (EC) No 715/2007 – Annex I, Section 5.3",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
        },
      ],
    },
    {
      id: "hybrid",
      name: "Hybrid & iPerformance",
      subtitle: "Electrified Powertrains",
      icon: <Gauge className="h-5 w-5" />,
      description:
        "BMW's iPerformance models integrate petrol engines with electric motors for enhanced efficiency and performance.",
      howItWorks:
        "eDrive integration via transmission combines internal combustion engine with electric motor. High-voltage battery provides electric-only driving capability and regenerative braking.",
      generations: [
        {
          name: "X1 xDrive25e",
          engine: "B38A15A + 88kW motor",
          feature: "Compact SUV hybrid",
        },
        {
          name: "330e",
          engine: "B48B20 + 88kW motor",
          feature: "Executive sedan hybrid",
        },
        {
          name: "530e",
          engine: "B48B20 + 88kW motor",
          feature: "Luxury sedan hybrid",
        },
      ],
      affectedEngines: ["B38A15A", "B48B20"],
      commonFailures: [
        {
          issue: "Electric components: highly reliable",
          note: "BMW TIS A25001",
        },
        { issue: "Combined system complexity", note: "increases service cost" },
      ],
      sources: [
        {
          name: "BMW TIS SI E16 00 01 – iPerformance System Overview",
          url: "https://www.bmw-techinfo.com/",
        },
        {
          name: "Directive 2007/46/EC – Annex XI – Hybrid Vehicle Requirements",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0046",
        },
      ],
    },
  ];

  // Mobile card component for technology details
  const TechnologyCard = ({ tech }: { tech: Technology }) => (
    <Card className="border-border mb-4">
      <CardContent className="p-4 space-y-4">
        {/* Description */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Overview</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {tech.description}
          </p>
        </div>
        {/* How it Works */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">How it Works</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {tech.howItWorks}
          </p>
        </div>
        {/* Generations/Evolution */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Evolution</h4>
          <div className="space-y-2">
            {tech.generations.map((gen: Generation) => (
              <Card key={gen.name} className="p-3 bg-muted/30 border-border">
                <div className="space-y-1">
                  <div className="font-medium text-foreground text-sm">
                    {gen.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {gen.engine}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-border text-foreground"
                  >
                    {gen.feature}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Affected Engines */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Affected Engines</h4>
          <div className="flex flex-wrap gap-2">
            {tech.affectedEngines.map((engine: string) => (
              <Badge
                key={engine}
                variant="secondary"
                className="font-mono text-xs"
              >
                {engine}
              </Badge>
            ))}
          </div>
        </div>
        {/* Common Failures */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Common Issues</h4>
          <div className="space-y-2">
            {tech.commonFailures.map((failure: CommonFailure) => (
              <Card
                key={failure.code}
                className="p-3 bg-muted/20 border-border"
              >
                <div className="space-y-1">
                  <div className="text-sm font-medium text-foreground">
                    {failure.issue}
                  </div>
                  {failure.note && (
                    <div className="text-xs text-muted-foreground">
                      {failure.note}
                    </div>
                  )}
                  {failure.code && (
                    <Badge variant="destructive" className="text-xs font-mono">
                      {failure.code}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Sources */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Sources</h4>
          <div className="space-y-2">
            {tech.sources.map((source: Source) => (
              <div key={source.name} className="flex items-start gap-2">
                <Badge
                  variant="outline"
                  className="text-xs shrink-0 mt-0.5 border-border text-foreground"
                >
                  🔍
                </Badge>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors"
                >
                  {source.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Container spaceY={8}>
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          BMW Engine Technology & Innovations
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
          A technical breakdown of BMW's core engine systems — including
          VALVETRONIC, TwinPower Turbo, timing architectures, and modular design
          — with documented reliability impacts. All data sourced from{" "}
          <a
            href="https://www.bmwgroup.com/en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            BMW Group PT-2023
            <ExternalLink className="h-3 w-3" />
          </a>
          ,{" "}
          <a
            href="https://www.bmw-techinfo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            BMW TIS
            <ExternalLink className="h-3 w-3" />
          </a>
          , and{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            EU Regulation (EC) No 715/2007
            <ExternalLink className="h-3 w-3" />
          </a>
          .
        </p>
      </div>
      {/* Technology Sections */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">
            Engineering Evolution & Technical Systems
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[800px]">
            <div className="space-y-2 p-6">
              {technologies.map((tech: Technology) => (
                <Collapsible
                  key={tech.id}
                  open={openSections.includes(tech.id)}
                  onOpenChange={() => toggleSection(tech.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:bg-accent/70 transition-colors border-border bg-accent text-foreground">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {openSections.includes(tech.id) ? (
                              <ChevronDown className="h-5 w-5 text-foreground" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-foreground" />
                            )}
                            <div className="flex items-center gap-3">
                              {tech.icon}
                              <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                  {tech.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {tech.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs border-border text-foreground"
                          >
                            {tech.affectedEngines.length} engines
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    {/* Desktop View - Hidden on mobile */}
                    <div className="hidden md:block">
                      <Card className="border-border bg-background">
                        <CardContent className="p-6 space-y-6">
                          {/* Description */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">
                              Overview
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {tech.description}
                            </p>
                          </div>
                          {/* How it Works */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">
                              How it Works
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {tech.howItWorks}
                            </p>
                          </div>
                          {/* Generations/Evolution */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">
                              Evolution
                            </h4>
                            <div className="grid gap-3">
                              {tech.generations.map((gen: Generation) => (
                                <Card
                                  key={gen.name}
                                  className="p-3 bg-muted/30 border-border"
                                >
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <div className="font-medium text-foreground">
                                        {gen.name}
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        {gen.engine}
                                      </div>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className="text-xs border-border text-foreground"
                                    >
                                      {gen.feature}
                                    </Badge>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>
                          {/* Affected Engines */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">
                              Affected Engines
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {tech.affectedEngines.map((engine: string) => (
                                <Badge
                                  key={engine}
                                  variant="secondary"
                                  className="font-mono text-xs"
                                >
                                  {engine}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {/* Common Failures */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">
                              Common Issues
                            </h4>
                            <div className="space-y-2">
                              {tech.commonFailures.map(
                                (failure: CommonFailure) => (
                                  <Card
                                    key={failure.code}
                                    className="p-3 bg-muted/20 border-border"
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="space-y-1">
                                        <div className="text-sm font-medium text-foreground">
                                          {failure.issue}
                                        </div>
                                        {failure.note && (
                                          <div className="text-xs text-muted-foreground">
                                            {failure.note}
                                          </div>
                                        )}
                                      </div>
                                      {failure.code && (
                                        <Badge
                                          variant="destructive"
                                          className="text-xs font-mono"
                                        >
                                          {failure.code}
                                        </Badge>
                                      )}
                                    </div>
                                  </Card>
                                ),
                              )}
                            </div>
                          </div>
                          {/* Sources */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">
                              Sources
                            </h4>
                            <div className="space-y-2">
                              {tech.sources.map((source: Source) => (
                                <div
                                  key={source.name}
                                  className="flex items-start gap-2"
                                >
                                  <Badge
                                    variant="outline"
                                    className="text-xs shrink-0 mt-0.5 border-border text-foreground"
                                  >
                                    🔍
                                  </Badge>
                                  <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors"
                                  >
                                    {source.name}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Mobile View - Hidden on desktop */}
                    <div className="md:hidden p-2">
                      <TechnologyCard tech={tech} />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      {/* Source Disclaimer */}
      <Card className="bg-muted/30 border-border">
        <CardContent className="p-6">
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Badge
              variant="outline"
              className="text-xs shrink-0 mt-0.5 border-border text-foreground"
            >
              †
            </Badge>
            <p className="text-left leading-relaxed">
              All technical descriptions and failure data sourced from{" "}
              <a
                href="https://www.bmwgroup.com/en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
              >
                BMW Group Product Technical Reports
                <ExternalLink className="h-3 w-3" />
              </a>
              ,{" "}
              <a
                href="https://www.bmw-techinfo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
              >
                BMW TIS Service Information
                <ExternalLink className="h-3 w-3" />
              </a>
              , and{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
              >
                EU Regulation (EC) No 715/2007
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              on vehicle type-approval.
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TechnologyOverview;
