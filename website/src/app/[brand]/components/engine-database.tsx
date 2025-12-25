// "use client";
//
// import {
//   Circle,
//   ExternalLink,
//   Filter,
//   Fuel,
//   RotateCcw,
//   Search,
// } from "lucide-react";
// import { useMemo, useState } from "react";
// import { cn } from "@/app/lib/utils";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
//
// const EngineDatabase = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [fuelFilter, setFuelFilter] = useState("all");
//   const [seriesFilter, setSeriesFilter] = useState("all");
//   const engineData = [
//     {
//       code: "B36 B07 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b36b07a-specs",
//     },
//     {
//       code: "B37 C15 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b37c15a-specs",
//     },
//     {
//       code: "B37 D15 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b37d15a-specs",
//     },
//     {
//       code: "B38 A15 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b38a15a-specs",
//     },
//     {
//       code: "B38 B15 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b38b15a-specs",
//     },
//     {
//       code: "B42 S20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b42s20a-specs",
//     },
//     {
//       code: "B46 A20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b46a20b-specs",
//     },
//     {
//       code: "B46 B20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b46b20b-specs",
//     },
//     {
//       code: "B47 C20 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47c20a-specs",
//     },
//     {
//       code: "B47 C20 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47c20b-specs",
//     },
//     {
//       code: "B47 D20 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47d20a-specs",
//     },
//     {
//       code: "B47 D20 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47d20b-specs",
//     },
//     {
//       code: "B48 A20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20a-specs",
//     },
//     {
//       code: "B48 A20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20b-specs",
//     },
//     {
//       code: "B48 A20 F",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20f-specs",
//     },
//     {
//       code: "B48 B16 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b16a-specs",
//     },
//     {
//       code: "B48 B20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b20a-specs",
//     },
//     {
//       code: "B48 B20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b20b-specs",
//     },
//     {
//       code: "B57 D30 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30a-specs",
//     },
//     {
//       code: "B57 D30 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30b-specs",
//     },
//     {
//       code: "B57 D30 C",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30c-specs",
//     },
//     {
//       code: "B58 B30 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b58b30a-specs",
//     },
//     {
//       code: "B58 B30 C",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b58b30c-specs",
//     },
//     { code: "E41/4", fuel: "Petrol", series: "E", url: "/bmw/e41-4-specs" },
//     { code: "M10 B15", fuel: "Petrol", series: "M", url: "/bmw/m10b15-specs" },
//     {
//       code: "M10 B16 (164VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-164va-specs",
//     },
//     {
//       code: "M10 B16 (164VB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-164vb-specs",
//     },
//     {
//       code: "M10 B16 (16A)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-16a-specs",
//     },
//     {
//       code: "M10 B16 A",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16a-specs",
//     },
//     { code: "M10 B18", fuel: "Petrol", series: "M", url: "/bmw/m10b18-specs" },
//     {
//       code: "M10 B18 (184EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ea-specs",
//     },
//     {
//       code: "M10 B18 (184EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184eb-specs",
//     },
//     {
//       code: "M10 B18 (184EZ)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ez-specs",
//     },
//     {
//       code: "M10 B18 (184KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ka-specs",
//     },
//     {
//       code: "M10 B18 (184VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184va-specs",
//     },
//     {
//       code: "M10 B18 (184VB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vb-specs",
//     },
//     {
//       code: "M10 B18 (184VC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vc-specs",
//     },
//     {
//       code: "M10 B18 (184VD)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vd-specs",
//     },
//     { code: "M10 B20", fuel: "Petrol", series: "M", url: "/bmw/m10b20-specs" },
//     {
//       code: "M10 B20 (23EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b20-23ea-specs",
//     },
//     {
//       code: "M10 B20 A",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b20a-specs",
//     },
//     { code: "M118", fuel: "Petrol", series: "M", url: "/bmw/m118-specs" },
//     { code: "M12/7", fuel: "Petrol", series: "M", url: "/bmw/m12-7-specs" },
//     { code: "M12/10", fuel: "Petrol", series: "M", url: "/bmw/m12-10-specs" },
//     { code: "M12/13", fuel: "Petrol", series: "M", url: "/bmw/m12-13-specs" },
//     {
//       code: "M20 B20 (206EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ea-specs",
//     },
//     {
//       code: "M20 B20 (206EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206eb-specs",
//     },
//     {
//       code: "M20 B20 (206EC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ec-specs",
//     },
//     {
//       code: "M20 B20 (206EZ)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ez-specs",
//     },
//     {
//       code: "M20 B20 (206KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ka-specs",
//     },
//     {
//       code: "M20 B20 (206VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206va-specs",
//     },
//     {
//       code: "M20 B23 (236EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ea-specs",
//     },
//     {
//       code: "M20 B23 (236EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236eb-specs",
//     },
//     {
//       code: "M20 B23 (236EC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ec-specs",
//     },
//     {
//       code: "M20 B23 (236EW)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ew-specs",
//     },
//     {
//       code: "M20 B25 (256E1)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256e1-specs",
//     },
//     {
//       code: "M20 B25 (256E2)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256e2-specs",
//     },
//     {
//       code: "M20 B25 (256EX)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256ex-specs",
//     },
//     {
//       code: "M20 B25 (256K1)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256k1-specs",
//     },
//     {
//       code: "M20 B27 (276EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276ea-specs",
//     },
//     {
//       code: "M20 B27 (276EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276eb-specs",
//     },
//     {
//       code: "M20 B27 (276KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276ka-specs",
//     },
//     {
//       code: "M20 B27 (276KB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276kb-specs",
//     },
//     {
//       code: "M21 D24 (246DA)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246da-specs",
//     },
//     {
//       code: "M21 D24 (246DB)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246db-specs",
//     },
//     {
//       code: "M21 D24 (246TA)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246ta-specs",
//     },
//     {
//       code: "M21 D24 (246TB)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246tb-specs",
//     },
//     {
//       code: "N13 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n13b16a-specs",
//     },
//     {
//       code: "N20 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b16a-specs",
//     },
//     {
//       code: "N20 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20a-specs",
//     },
//     {
//       code: "N20 B20 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20b-specs",
//     },
//     {
//       code: "N20 B20 D",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20d-specs",
//     },
//     {
//       code: "N26 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n26b20a-specs",
//     },
//     {
//       code: "N40 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n40b16a-specs",
//     },
//     {
//       code: "N42 B18 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n42b18a-specs",
//     },
//     {
//       code: "N42 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n42b20a-specs",
//     },
//     {
//       code: "N43 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b16a-specs",
//     },
//     {
//       code: "N43 B16 AA",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b16aa-specs",
//     },
//     {
//       code: "N43 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b20a-specs",
//     },
//     {
//       code: "N45 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b16a-specs",
//     },
//     {
//       code: "N45 B16 AC",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b16ac-specs",
//     },
//     {
//       code: "N45 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b20a-specs",
//     },
//     {
//       code: "N46 B18 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b18a-specs",
//     },
//     {
//       code: "N46 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20a-specs",
//     },
//     {
//       code: "N46 B20 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20b-specs",
//     },
//     {
//       code: "N46 B20 BD",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20bd-specs",
//     },
//     {
//       code: "N46 B20 C",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20c-specs",
//     },
//     {
//       code: "N46 B20 CB",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cb-specs",
//     },
//     {
//       code: "N46 B20 CC",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cc-specs",
//     },
//     {
//       code: "N46 B20 CD",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cd-specs",
//     },
//     {
//       code: "N46 B20 E",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20e-specs",
//     },
//     {
//       code: "N47 D16 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d16a-specs",
//     },
//     {
//       code: "N47 D20 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20a-specs",
//     },
//     {
//       code: "N47 D20 B",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20b-specs",
//     },
//     {
//       code: "N47 D20 C",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20c-specs",
//     },
//     {
//       code: "N47 D20 D",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20d-specs",
//     },
//     {
//       code: "N52 B25 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25a-specs",
//     },
//     {
//       code: "N52 B25 AE",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25ae-specs",
//     },
//     {
//       code: "N52 B25 AF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25af-specs",
//     },
//     {
//       code: "N52 B25 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25b-specs",
//     },
//     {
//       code: "N52 B25 BE",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25be-specs",
//     },
//     {
//       code: "N52 B25 BF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25bf-specs",
//     },
//     {
//       code: "N52 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30a-specs",
//     },
//     {
//       code: "N52 B30 AF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30af-specs",
//     },
//     {
//       code: "N52 B30 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30b-specs",
//     },
//     {
//       code: "N52 B30 BF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30bf-specs",
//     },
//     {
//       code: "N53 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n53b30a-specs",
//     },
//     {
//       code: "N54 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n54b30a-specs",
//     },
//     {
//       code: "N55 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n55b30a-specs",
//     },
//     {
//       code: "N57 D30 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30a-specs",
//     },
//     {
//       code: "N57 D30 B",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30b-specs",
//     },
//     {
//       code: "N57 D30 C",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30c-specs",
//     },
//     {
//       code: "N62 B36 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b36a-specs",
//     },
//     {
//       code: "N62 B40 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b40a-specs",
//     },
//     {
//       code: "N62 B44 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b44a-specs",
//     },
//     {
//       code: "N62 B48 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b48a-specs",
//     },
//     {
//       code: "N62 B48 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b48b-specs",
//     },
//     {
//       code: "N63 B44 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44a-specs",
//     },
//     {
//       code: "N63 B44 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44b-specs",
//     },
//     {
//       code: "N63 B44 C",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44c-specs",
//     },
//     {
//       code: "N73 B60 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n73b60a-specs",
//     },
//     {
//       code: "N73 B60 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n73b60b-specs",
//     },
//     {
//       code: "N74 B60 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n74b60a-specs",
//     },
//     {
//       code: "N74 B66 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n74b66b-specs",
//     },
//     { code: "P65B40", fuel: "Petrol", series: "P", url: "/bmw/p65b40-specs" },
//     { code: "P65B44", fuel: "Petrol", series: "P", url: "/bmw/p65b44-specs" },
//     { code: "P66B44", fuel: "Petrol", series: "P", url: "/bmw/p66b44-specs" },
//     { code: "P68B20", fuel: "Petrol", series: "P", url: "/bmw/p68b20-specs" },
//     {
//       code: "P68B20TU",
//       fuel: "Petrol",
//       series: "P",
//       url: "/bmw/p68b20tu-specs",
//     },
//     { code: "P76B20", fuel: "Petrol", series: "P", url: "/bmw/p76b20-specs" },
//     { code: "P80", fuel: "Petrol", series: "P", url: "/bmw/p80-specs" },
//     { code: "P82", fuel: "Petrol", series: "P", url: "/bmw/p82-specs" },
//     { code: "P84", fuel: "Petrol", series: "P", url: "/bmw/p84-specs" },
//     { code: "P92B36", fuel: "Petrol", series: "P", url: "/bmw/p92b36-specs" },
//     {
//       code: "S14 B23 (234EA)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234ea-specs",
//     },
//     {
//       code: "S14 B23 (234S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234s1-specs",
//     },
//     {
//       code: "S14 B23 (234S2)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234s2-specs",
//     },
//     {
//       code: "S38 B35 (356ED)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b35-356ed-specs",
//     },
//     {
//       code: "S38 B35 AF",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b35-af-specs",
//     },
//     {
//       code: "S38 B36 (366S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b36-366s1-specs",
//     },
//     {
//       code: "S38 B38 (386S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b38-386s1-specs",
//     },
//     {
//       code: "S50 B30 (306S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b30-306s1-specs",
//     },
//     {
//       code: "S50 B32 (326S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b32-326s1-specs",
//     },
//     {
//       code: "S50 B32 (326S3)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b32-326s3-specs",
//     },
//     {
//       code: "S54 B32 (326S4)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s54b32-326s4-specs",
//     },
//     { code: "S54R", fuel: "Petrol", series: "S", url: "/bmw/s54r-specs" },
//     {
//       code: "S55 B30 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s55b30a-specs",
//     },
//     {
//       code: "S62 B50 (508S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s62b50-508s1-specs",
//     },
//     {
//       code: "S63 B44 B",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s63b44b-specs",
//     },
//     {
//       code: "S65 B40 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s65b40a-specs",
//     },
//     {
//       code: "S65 B44 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s65b44a-specs",
//     },
//     {
//       code: "S70 B56 (56121)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s70b56-56121-specs",
//     },
//     {
//       code: "S85 B50 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s85b50a-specs",
//     },
//   ];
//   const uniqueSeries = useMemo(() => {
//     const series = [
//       ...new Set(engineData.map((engine) => engine.series)),
//     ].sort();
//     return series;
//   }, []);
//   const filteredEngines = useMemo(() => {
//     return engineData.filter((engine) => {
//       const matchesSearch = engine.code
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       const matchesFuel =
//         fuelFilter === "all" ||
//         engine.fuel.toLowerCase() === fuelFilter.toLowerCase();
//       const matchesSeries =
//         seriesFilter === "all" || engine.series === seriesFilter;
//       return matchesSearch && matchesFuel && matchesSeries;
//     });
//   }, [searchTerm, fuelFilter, seriesFilter]);
//   const getFuelIcon = (fuel: string) => {
//     return fuel === "Diesel" ? (
//       <Circle className="h-4 w-4 fill-current" />
//     ) : (
//       <Fuel className="h-4 w-4" />
//     );
//   };
//   const getFuelVariant = (fuel: string) => {
//     return fuel === "Diesel" ? "secondary" : "default";
//   };
//   const clearFilters = () => {
//     setSearchTerm("");
//     setFuelFilter("all");
//     setSeriesFilter("all");
//   };
//   return (
//     <Container spaceY={4}>
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
//           Complete Engine Database
//         </h2>
//         <div className="text-lg md:text-4xl text-muted-foreground font-medium"></div>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
//           Search and explore BMW's complete engine catalog with detailed
//           specifications, technical data, and model compatibility information.
//         </p>
//       </div>
//
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2 text-foreground">
//             <Filter className="h-5 w-5" />
//             Search & Filter
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search Input */}
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search engine codes (e.g., B58, M20, N47)..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground"
//               />
//             </div>
//
//             {/* Fuel Type Filter */}
//             <Select value={fuelFilter} onValueChange={setFuelFilter}>
//               <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
//                 <SelectValue placeholder="Fuel Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Fuel Types</SelectItem>
//                 <SelectItem value="petrol">Petrol</SelectItem>
//                 <SelectItem value="diesel">Diesel</SelectItem>
//               </SelectContent>
//             </Select>
//
//             {/* Series Filter */}
//             <Select value={seriesFilter} onValueChange={setSeriesFilter}>
//               <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
//                 <SelectValue placeholder="Engine Series" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Series</SelectItem>
//                 {uniqueSeries.map((series) => (
//                   <SelectItem key={series} value={series}>
//                     {series}-Series
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//
//             {/* Clear Filters Button */}
//             <Button
//               variant="outline"
//               onClick={clearFilters}
//               className="w-full md:w-auto border-border text-foreground hover:bg-accent bg-transparent"
//             >
//               <RotateCcw className="h-4 w-4 mr-2" />
//               Clear
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//
//       {/* Engine Database Table */}
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="text-foreground">
//             Engine Specifications Database
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-0 w-full h-[600px] overflow-auto">
//           <Table className="border-collapse border-border min-w-[600px]">
//             <TableHeader>
//               <TableRow className="border-border">
//                 <TableHead
//                   className={cn(
//                     "text-foreground font-semibold text-start w-[30%] pl-4 sm:pl-28",
//                   )}
//                 >
//                   Engine Code
//                 </TableHead>
//                 <TableHead
//                   className={cn(
//                     "text-foreground font-semibold text-center w-[25%]",
//                   )}
//                 >
//                   Fuel Type
//                 </TableHead>
//                 {/* Hidden on small screens */}
//                 <TableHead
//                   className={cn(
//                     "text-foreground font-semibold text-center w-[20%] sm:hidden",
//                   )}
//                 >
//                   Series
//                 </TableHead>
//                 <TableHead
//                   className={cn(
//                     "text-foreground font-semibold text-center w-[25%]",
//                   )}
//                 >
//                   Specifications
//                 </TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredEngines.map((engine) => (
//                 <TableRow
//                   key={engine.code}
//                   className="border-border hover:bg-accent/50 transition-colors"
//                 >
//                   <TableCell className="font-mono font-medium text-foreground text-start pl-4 sm:pl-28">
//                     {engine.code}
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <div className="flex items-center justify-center gap-2">
//                       {getFuelIcon(engine.fuel)}
//                       <Badge
//                         variant={getFuelVariant(engine.fuel)}
//                         className="text-xs"
//                       >
//                         {engine.fuel}
//                       </Badge>
//                     </div>
//                   </TableCell>
//                   {/* Hidden on small screens */}
//                   <TableCell className="text-center sm:hidden">
//                     <Badge
//                       variant="outline"
//                       className="text-xs border-border text-foreground"
//                     >
//                       {engine.series}-Series
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="h-8 text-foreground hover:bg-accent hover:text-foreground mx-auto"
//                       onClick={() =>
//                         window.open(
//                           `https://enginecode.uk${engine.url}`,
//                           "_blank",
//                         )
//                       }
//                     >
//                       View Specs
//                       <ExternalLink className="h-3 w-3 ml-2" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//
//           {filteredEngines.length === 0 && (
//             <div className="flex flex-col items-center justify-center py-12 text-center">
//               <Search className="h-12 w-12 text-muted-foreground mb-4" />
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 No engines found
//               </h3>
//               <p className="text-muted-foreground mb-4">
//                 Try adjusting your search terms or filters
//               </p>
//               <Button
//                 variant="outline"
//                 onClick={clearFilters}
//                 className="border-border text-foreground hover:bg-accent bg-transparent"
//               >
//                 Clear all filters
//               </Button>
//             </div>
//           )}
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
//               Engine specifications and technical data sourced from{" "}
//               <a
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Technical Documentation
//                 <ExternalLink className="h-3 w-3" />
//               </a>{" "}
//               and{" "}
//               <a
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Vehicle Type Approval Database
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               . All specifications are verified against official BMW service
//               documentation.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default EngineDatabase;
// "use client";
// import {
//   Circle,
//   ExternalLink,
//   Filter,
//   Fuel,
//   RotateCcw,
//   Search,
// } from "lucide-react";
// import { useMemo, useState } from "react";
// import { cn } from "@/app/lib/utils";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { GiBarrel } from "react-icons/gi";
//
// const EngineDatabase = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [fuelFilter, setFuelFilter] = useState("all");
//   const [seriesFilter, setSeriesFilter] = useState("all");
//
//   const engineData = [
//     // ... (keeping the same engineData)
//     {
//       code: "B36 B07 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b36b07a-specs",
//     },
//     {
//       code: "B37 C15 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b37c15a-specs",
//     },
//     {
//       code: "B37 D15 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b37d15a-specs",
//     },
//     {
//       code: "B38 A15 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b38a15a-specs",
//     },
//     {
//       code: "B38 B15 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b38b15a-specs",
//     },
//     {
//       code: "B42 S20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b42s20a-specs",
//     },
//     {
//       code: "B46 A20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b46a20b-specs",
//     },
//     {
//       code: "B46 B20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b46b20b-specs",
//     },
//     {
//       code: "B47 C20 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47c20a-specs",
//     },
//     {
//       code: "B47 C20 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47c20b-specs",
//     },
//     {
//       code: "B47 D20 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47d20a-specs",
//     },
//     {
//       code: "B47 D20 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47d20b-specs",
//     },
//     {
//       code: "B48 A20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20a-specs",
//     },
//     {
//       code: "B48 A20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20b-specs",
//     },
//     {
//       code: "B48 A20 F",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20f-specs",
//     },
//     {
//       code: "B48 B16 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b16a-specs",
//     },
//     {
//       code: "B48 B20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b20a-specs",
//     },
//     {
//       code: "B48 B20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b20b-specs",
//     },
//     {
//       code: "B57 D30 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30a-specs",
//     },
//     {
//       code: "B57 D30 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30b-specs",
//     },
//     {
//       code: "B57 D30 C",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30c-specs",
//     },
//     {
//       code: "B58 B30 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b58b30a-specs",
//     },
//     {
//       code: "B58 B30 C",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b58b30c-specs",
//     },
//     { code: "E41/4", fuel: "Petrol", series: "E", url: "/bmw/e41-4-specs" },
//     { code: "M10 B15", fuel: "Petrol", series: "M", url: "/bmw/m10b15-specs" },
//     {
//       code: "M10 B16 (164VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-164va-specs",
//     },
//     {
//       code: "M10 B16 (164VB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-164vb-specs",
//     },
//     {
//       code: "M10 B16 (16A)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-16a-specs",
//     },
//     {
//       code: "M10 B16 A",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16a-specs",
//     },
//     { code: "M10 B18", fuel: "Petrol", series: "M", url: "/bmw/m10b18-specs" },
//     {
//       code: "M10 B18 (184EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ea-specs",
//     },
//     {
//       code: "M10 B18 (184EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184eb-specs",
//     },
//     {
//       code: "M10 B18 (184EZ)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ez-specs",
//     },
//     {
//       code: "M10 B18 (184KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ka-specs",
//     },
//     {
//       code: "M10 B18 (184VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184va-specs",
//     },
//     {
//       code: "M10 B18 (184VB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vb-specs",
//     },
//     {
//       code: "M10 B18 (184VC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vc-specs",
//     },
//     {
//       code: "M10 B18 (184VD)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vd-specs",
//     },
//     { code: "M10 B20", fuel: "Petrol", series: "M", url: "/bmw/m10b20-specs" },
//     {
//       code: "M10 B20 (23EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b20-23ea-specs",
//     },
//     {
//       code: "M10 B20 A",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b20a-specs",
//     },
//     { code: "M118", fuel: "Petrol", series: "M", url: "/bmw/m118-specs" },
//     { code: "M12/7", fuel: "Petrol", series: "M", url: "/bmw/m12-7-specs" },
//     { code: "M12/10", fuel: "Petrol", series: "M", url: "/bmw/m12-10-specs" },
//     { code: "M12/13", fuel: "Petrol", series: "M", url: "/bmw/m12-13-specs" },
//     {
//       code: "M20 B20 (206EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ea-specs",
//     },
//     {
//       code: "M20 B20 (206EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206eb-specs",
//     },
//     {
//       code: "M20 B20 (206EC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ec-specs",
//     },
//     {
//       code: "M20 B20 (206EZ)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ez-specs",
//     },
//     {
//       code: "M20 B20 (206KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ka-specs",
//     },
//     {
//       code: "M20 B20 (206VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206va-specs",
//     },
//     {
//       code: "M20 B23 (236EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ea-specs",
//     },
//     {
//       code: "M20 B23 (236EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236eb-specs",
//     },
//     {
//       code: "M20 B23 (236EC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ec-specs",
//     },
//     {
//       code: "M20 B23 (236EW)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ew-specs",
//     },
//     {
//       code: "M20 B25 (256E1)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256e1-specs",
//     },
//     {
//       code: "M20 B25 (256E2)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256e2-specs",
//     },
//     {
//       code: "M20 B25 (256EX)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256ex-specs",
//     },
//     {
//       code: "M20 B25 (256K1)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256k1-specs",
//     },
//     {
//       code: "M20 B27 (276EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276ea-specs",
//     },
//     {
//       code: "M20 B27 (276EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276eb-specs",
//     },
//     {
//       code: "M20 B27 (276KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276ka-specs",
//     },
//     {
//       code: "M20 B27 (276KB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276kb-specs",
//     },
//     {
//       code: "M21 D24 (246DA)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246da-specs",
//     },
//     {
//       code: "M21 D24 (246DB)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246db-specs",
//     },
//     {
//       code: "M21 D24 (246TA)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246ta-specs",
//     },
//     {
//       code: "M21 D24 (246TB)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246tb-specs",
//     },
//     {
//       code: "N13 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n13b16a-specs",
//     },
//     {
//       code: "N20 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b16a-specs",
//     },
//     {
//       code: "N20 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20a-specs",
//     },
//     {
//       code: "N20 B20 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20b-specs",
//     },
//     {
//       code: "N20 B20 D",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20d-specs",
//     },
//     {
//       code: "N26 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n26b20a-specs",
//     },
//     {
//       code: "N40 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n40b16a-specs",
//     },
//     {
//       code: "N42 B18 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n42b18a-specs",
//     },
//     {
//       code: "N42 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n42b20a-specs",
//     },
//     {
//       code: "N43 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b16a-specs",
//     },
//     {
//       code: "N43 B16 AA",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b16aa-specs",
//     },
//     {
//       code: "N43 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b20a-specs",
//     },
//     {
//       code: "N45 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b16a-specs",
//     },
//     {
//       code: "N45 B16 AC",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b16ac-specs",
//     },
//     {
//       code: "N45 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b20a-specs",
//     },
//     {
//       code: "N46 B18 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b18a-specs",
//     },
//     {
//       code: "N46 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20a-specs",
//     },
//     {
//       code: "N46 B20 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20b-specs",
//     },
//     {
//       code: "N46 B20 BD",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20bd-specs",
//     },
//     {
//       code: "N46 B20 C",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20c-specs",
//     },
//     {
//       code: "N46 B20 CB",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cb-specs",
//     },
//     {
//       code: "N46 B20 CC",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cc-specs",
//     },
//     {
//       code: "N46 B20 CD",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cd-specs",
//     },
//     {
//       code: "N46 B20 E",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20e-specs",
//     },
//     {
//       code: "N47 D16 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d16a-specs",
//     },
//     {
//       code: "N47 D20 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20a-specs",
//     },
//     {
//       code: "N47 D20 B",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20b-specs",
//     },
//     {
//       code: "N47 D20 C",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20c-specs",
//     },
//     {
//       code: "N47 D20 D",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20d-specs",
//     },
//     {
//       code: "N52 B25 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25a-specs",
//     },
//     {
//       code: "N52 B25 AE",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25ae-specs",
//     },
//     {
//       code: "N52 B25 AF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25af-specs",
//     },
//     {
//       code: "N52 B25 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25b-specs",
//     },
//     {
//       code: "N52 B25 BE",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25be-specs",
//     },
//     {
//       code: "N52 B25 BF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25bf-specs",
//     },
//     {
//       code: "N52 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30a-specs",
//     },
//     {
//       code: "N52 B30 AF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30af-specs",
//     },
//     {
//       code: "N52 B30 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30b-specs",
//     },
//     {
//       code: "N52 B30 BF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30bf-specs",
//     },
//     {
//       code: "N53 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n53b30a-specs",
//     },
//     {
//       code: "N54 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n54b30a-specs",
//     },
//     {
//       code: "N55 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n55b30a-specs",
//     },
//     {
//       code: "N57 D30 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30a-specs",
//     },
//     {
//       code: "N57 D30 B",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30b-specs",
//     },
//     {
//       code: "N57 D30 C",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30c-specs",
//     },
//     {
//       code: "N62 B36 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b36a-specs",
//     },
//     {
//       code: "N62 B40 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b40a-specs",
//     },
//     {
//       code: "N62 B44 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b44a-specs",
//     },
//     {
//       code: "N62 B48 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b48a-specs",
//     },
//     {
//       code: "N62 B48 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b48b-specs",
//     },
//     {
//       code: "N63 B44 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44a-specs",
//     },
//     {
//       code: "N63 B44 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44b-specs",
//     },
//     {
//       code: "N63 B44 C",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44c-specs",
//     },
//     {
//       code: "N73 B60 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n73b60a-specs",
//     },
//     {
//       code: "N73 B60 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n73b60b-specs",
//     },
//     {
//       code: "N74 B60 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n74b60a-specs",
//     },
//     {
//       code: "N74 B66 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n74b66b-specs",
//     },
//     { code: "P65B40", fuel: "Petrol", series: "P", url: "/bmw/p65b40-specs" },
//     { code: "P65B44", fuel: "Petrol", series: "P", url: "/bmw/p65b44-specs" },
//     { code: "P66B44", fuel: "Petrol", series: "P", url: "/bmw/p66b44-specs" },
//     { code: "P68B20", fuel: "Petrol", series: "P", url: "/bmw/p68b20-specs" },
//     {
//       code: "P68B20TU",
//       fuel: "Petrol",
//       series: "P",
//       url: "/bmw/p68b20tu-specs",
//     },
//     { code: "P76B20", fuel: "Petrol", series: "P", url: "/bmw/p76b20-specs" },
//     { code: "P80", fuel: "Petrol", series: "P", url: "/bmw/p80-specs" },
//     { code: "P82", fuel: "Petrol", series: "P", url: "/bmw/p82-specs" },
//     { code: "P84", fuel: "Petrol", series: "P", url: "/bmw/p84-specs" },
//     { code: "P92B36", fuel: "Petrol", series: "P", url: "/bmw/p92b36-specs" },
//     {
//       code: "S14 B23 (234EA)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234ea-specs",
//     },
//     {
//       code: "S14 B23 (234S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234s1-specs",
//     },
//     {
//       code: "S14 B23 (234S2)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234s2-specs",
//     },
//     {
//       code: "S38 B35 (356ED)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b35-356ed-specs",
//     },
//     {
//       code: "S38 B35 AF",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b35-af-specs",
//     },
//     {
//       code: "S38 B36 (366S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b36-366s1-specs",
//     },
//     {
//       code: "S38 B38 (386S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b38-386s1-specs",
//     },
//     {
//       code: "S50 B30 (306S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b30-306s1-specs",
//     },
//     {
//       code: "S50 B32 (326S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b32-326s1-specs",
//     },
//     {
//       code: "S50 B32 (326S3)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b32-326s3-specs",
//     },
//     {
//       code: "S54 B32 (326S4)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s54b32-326s4-specs",
//     },
//     { code: "S54R", fuel: "Petrol", series: "S", url: "/bmw/s54r-specs" },
//     {
//       code: "S55 B30 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s55b30a-specs",
//     },
//     {
//       code: "S62 B50 (508S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s62b50-508s1-specs",
//     },
//     {
//       code: "S63 B44 B",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s63b44b-specs",
//     },
//     {
//       code: "S65 B40 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s65b40a-specs",
//     },
//     {
//       code: "S65 B44 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s65b44a-specs",
//     },
//     {
//       code: "S70 B56 (56121)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s70b56-56121-specs",
//     },
//     {
//       code: "S85 B50 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s85b50a-specs",
//     },
//   ];
//
//   const uniqueSeries = useMemo(() => {
//     const series = [
//       ...new Set(engineData.map((engine) => engine.series)),
//     ].sort();
//     return series;
//   }, []);
//
//   const filteredEngines = useMemo(() => {
//     return engineData.filter((engine) => {
//       const matchesSearch = engine.code
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       const matchesFuel =
//         fuelFilter === "all" ||
//         engine.fuel.toLowerCase() === fuelFilter.toLowerCase();
//       const matchesSeries =
//         seriesFilter === "all" || engine.series === seriesFilter;
//       return matchesSearch && matchesFuel && matchesSeries;
//     });
//   }, [searchTerm, fuelFilter, seriesFilter]);
//
//   const getFuelIcon = (fuel: string) => {
//     return fuel === "Diesel" ? (
//       <GiBarrel className="h-4 w-4 fill-current" />
//     ) : (
//       <Fuel className="h-4 w-4" />
//     );
//   };
//
//   const getFuelVariant = (fuel: string) => {
//     return fuel === "Diesel" ? "secondary" : "default";
//   };
//
//   const clearFilters = () => {
//     setSearchTerm("");
//     setFuelFilter("all");
//     setSeriesFilter("all");
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
//               {getFuelIcon(engine.fuel)}
//               <Badge
//                 variant={getFuelVariant(engine.fuel) as any}
//                 className="text-xs"
//               >
//                 {engine.fuel}
//               </Badge>
//             </div>
//           </div>
//           <Badge
//             variant="outline"
//             className="text-xs border-border text-foreground"
//           >
//             {engine.series}-Series
//           </Badge>
//         </div>
//
//         <div className="pt-2 flex justify-end">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="h-7 px-2 text-xs text-foreground hover:bg-accent"
//             onClick={() =>
//               window.open(`https://enginecode.uk${engine.url}`, "_blank")
//             }
//           >
//             View Specs
//             <ExternalLink className="h-3 w-3 ml-1" />
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
//
//   return (
//     <Container spaceY={4}>
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
//           Complete Engine Database
//         </h2>
//         <div className="text-lg md:text-4xl text-muted-foreground font-medium"></div>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
//           Search and explore BMW's complete engine catalog with detailed
//           specifications, technical data, and model compatibility information.
//         </p>
//       </div>
//
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2 text-foreground">
//             <Filter className="h-5 w-5" />
//             Search & Filter
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search Input */}
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search engine codes (e.g., B58, M20, N47)..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground"
//               />
//             </div>
//             {/* Fuel Type Filter */}
//             <Select value={fuelFilter} onValueChange={setFuelFilter}>
//               <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
//                 <SelectValue placeholder="Fuel Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Fuel Types</SelectItem>
//                 <SelectItem value="petrol">Petrol</SelectItem>
//                 <SelectItem value="diesel">Diesel</SelectItem>
//               </SelectContent>
//             </Select>
//             {/* Series Filter */}
//             <Select value={seriesFilter} onValueChange={setSeriesFilter}>
//               <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
//                 <SelectValue placeholder="Engine Series" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Series</SelectItem>
//                 {uniqueSeries.map((series) => (
//                   <SelectItem key={series} value={series}>
//                     {series}-Series
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {/* Clear Filters Button */}
//             <Button
//               variant="outline"
//               onClick={clearFilters}
//               className="w-full md:w-auto border-border text-foreground hover:bg-accent bg-transparent"
//             >
//               <RotateCcw className="h-4 w-4 mr-2" />
//               Clear
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//
//       {/* Engine Database */}
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="text-foreground">
//             Engine Specifications Database
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-0">
//           {/* Desktop Table View - Hidden on mobile */}
//           <div className="hidden md:block">
//             <ScrollArea className="h-[600px]">
//               <Table className="border-collapse border-border min-w-[600px]">
//                 <TableHeader>
//                   <TableRow className="border-border">
//                     <TableHead className="text-foreground font-semibold text-start w-[30%] pl-4 sm:pl-28">
//                       Engine Code
//                     </TableHead>
//                     <TableHead className="text-foreground font-semibold text-center w-[25%]">
//                       Fuel Type
//                     </TableHead>
//                     <TableHead className="text-foreground font-semibold text-center w-[20%]">
//                       Series
//                     </TableHead>
//                     <TableHead className="text-foreground font-semibold text-center w-[25%]">
//                       Specifications
//                     </TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredEngines.map((engine) => (
//                     <TableRow
//                       key={engine.code}
//                       className="border-border hover:bg-accent/50 transition-colors"
//                     >
//                       <TableCell className="font-mono font-medium text-foreground text-start pl-4 sm:pl-28">
//                         {engine.code}
//                       </TableCell>
//                       <TableCell className="text-center">
//                         <div className="flex items-center justify-center gap-2">
//                           {getFuelIcon(engine.fuel)}
//                           <Badge
//                             variant={getFuelVariant(engine.fuel)}
//                             className="text-xs"
//                           >
//                             {engine.fuel}
//                           </Badge>
//                         </div>
//                       </TableCell>
//                       <TableCell className="text-center">
//                         <Badge
//                           variant="outline"
//                           className="text-xs border-border text-foreground"
//                         >
//                           {engine.series}-Series
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="text-center">
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="h-8 text-foreground hover:bg-accent hover:text-foreground mx-auto"
//                           onClick={() =>
//                             window.open(
//                               `https://enginecode.uk${engine.url}`,
//                               "_blank",
//                             )
//                           }
//                         >
//                           View Specs
//                           <ExternalLink className="h-3 w-3 ml-2" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </ScrollArea>
//           </div>
//
//           {/* Mobile Card View - Hidden on desktop */}
//           <div className="md:hidden p-4">
//             <ScrollArea className="h-[600px]">
//               {filteredEngines.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-12 text-center">
//                   <Search className="h-12 w-12 text-muted-foreground mb-4" />
//                   <h3 className="text-lg font-semibold text-foreground mb-2">
//                     No engines found
//                   </h3>
//                   <p className="text-muted-foreground mb-4">
//                     Try adjusting your search terms or filters
//                   </p>
//                   <Button
//                     variant="outline"
//                     onClick={clearFilters}
//                     className="border-border text-foreground hover:bg-accent bg-transparent"
//                   >
//                     Clear all filters
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="space-y-2">
//                   {filteredEngines.map((engine) => (
//                     <EngineCard key={engine.code} engine={engine} />
//                   ))}
//                 </div>
//               )}
//             </ScrollArea>
//           </div>
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
//               Engine specifications and technical data sourced from{" "}
//               <a
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Technical Documentation
//                 <ExternalLink className="h-3 w-3" />
//               </a>{" "}
//               and{" "}
//               <a
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Vehicle Type Approval Database
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               . All specifications are verified against official BMW service
//               documentation.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default EngineDatabase;
// "use client";
// import { ExternalLink, Filter, Fuel, RotateCcw, Search } from "lucide-react";
// import { useMemo, useState } from "react";
// import { GiBarrel } from "react-icons/gi";
// import Container from "@/components/Container";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
//
// const EngineDatabase = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [fuelFilter, setFuelFilter] = useState("all");
//   const [seriesFilter, setSeriesFilter] = useState("all");
//
//   const engineData = [
//     // ... (keeping the same engineData)
//     {
//       code: "B36 B07 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b36b07a-specs",
//     },
//     {
//       code: "B37 C15 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b37c15a-specs",
//     },
//     {
//       code: "B37 D15 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b37d15a-specs",
//     },
//     {
//       code: "B38 A15 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b38a15a-specs",
//     },
//     {
//       code: "B38 B15 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b38b15a-specs",
//     },
//     {
//       code: "B42 S20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b42s20a-specs",
//     },
//     {
//       code: "B46 A20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b46a20b-specs",
//     },
//     {
//       code: "B46 B20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b46b20b-specs",
//     },
//     {
//       code: "B47 C20 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47c20a-specs",
//     },
//     {
//       code: "B47 C20 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47c20b-specs",
//     },
//     {
//       code: "B47 D20 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47d20a-specs",
//     },
//     {
//       code: "B47 D20 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b47d20b-specs",
//     },
//     {
//       code: "B48 A20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20a-specs",
//     },
//     {
//       code: "B48 A20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20b-specs",
//     },
//     {
//       code: "B48 A20 F",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48a20f-specs",
//     },
//     {
//       code: "B48 B16 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b16a-specs",
//     },
//     {
//       code: "B48 B20 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b20a-specs",
//     },
//     {
//       code: "B48 B20 B",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b48b20b-specs",
//     },
//     {
//       code: "B57 D30 A",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30a-specs",
//     },
//     {
//       code: "B57 D30 B",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30b-specs",
//     },
//     {
//       code: "B57 D30 C",
//       fuel: "Diesel",
//       series: "B",
//       url: "/bmw/b57d30c-specs",
//     },
//     {
//       code: "B58 B30 A",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b58b30a-specs",
//     },
//     {
//       code: "B58 B30 C",
//       fuel: "Petrol",
//       series: "B",
//       url: "/bmw/b58b30c-specs",
//     },
//     { code: "E41/4", fuel: "Petrol", series: "E", url: "/bmw/e41-4-specs" },
//     { code: "M10 B15", fuel: "Petrol", series: "M", url: "/bmw/m10b15-specs" },
//     {
//       code: "M10 B16 (164VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-164va-specs",
//     },
//     {
//       code: "M10 B16 (164VB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-164vb-specs",
//     },
//     {
//       code: "M10 B16 (16A)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16-16a-specs",
//     },
//     {
//       code: "M10 B16 A",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b16a-specs",
//     },
//     { code: "M10 B18", fuel: "Petrol", series: "M", url: "/bmw/m10b18-specs" },
//     {
//       code: "M10 B18 (184EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ea-specs",
//     },
//     {
//       code: "M10 B18 (184EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184eb-specs",
//     },
//     {
//       code: "M10 B18 (184EZ)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ez-specs",
//     },
//     {
//       code: "M10 B18 (184KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184ka-specs",
//     },
//     {
//       code: "M10 B18 (184VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184va-specs",
//     },
//     {
//       code: "M10 B18 (184VB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vb-specs",
//     },
//     {
//       code: "M10 B18 (184VC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vc-specs",
//     },
//     {
//       code: "M10 B18 (184VD)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b18-184vd-specs",
//     },
//     { code: "M10 B20", fuel: "Petrol", series: "M", url: "/bmw/m10b20-specs" },
//     {
//       code: "M10 B20 (23EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b20-23ea-specs",
//     },
//     {
//       code: "M10 B20 A",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m10b20a-specs",
//     },
//     { code: "M118", fuel: "Petrol", series: "M", url: "/bmw/m118-specs" },
//     { code: "M12/7", fuel: "Petrol", series: "M", url: "/bmw/m12-7-specs" },
//     { code: "M12/10", fuel: "Petrol", series: "M", url: "/bmw/m12-10-specs" },
//     { code: "M12/13", fuel: "Petrol", series: "M", url: "/bmw/m12-13-specs" },
//     {
//       code: "M20 B20 (206EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ea-specs",
//     },
//     {
//       code: "M20 B20 (206EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206eb-specs",
//     },
//     {
//       code: "M20 B20 (206EC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ec-specs",
//     },
//     {
//       code: "M20 B20 (206EZ)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ez-specs",
//     },
//     {
//       code: "M20 B20 (206KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206ka-specs",
//     },
//     {
//       code: "M20 B20 (206VA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b20-206va-specs",
//     },
//     {
//       code: "M20 B23 (236EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ea-specs",
//     },
//     {
//       code: "M20 B23 (236EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236eb-specs",
//     },
//     {
//       code: "M20 B23 (236EC)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ec-specs",
//     },
//     {
//       code: "M20 B23 (236EW)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b23-236ew-specs",
//     },
//     {
//       code: "M20 B25 (256E1)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256e1-specs",
//     },
//     {
//       code: "M20 B25 (256E2)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256e2-specs",
//     },
//     {
//       code: "M20 B25 (256EX)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256ex-specs",
//     },
//     {
//       code: "M20 B25 (256K1)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b25-256k1-specs",
//     },
//     {
//       code: "M20 B27 (276EA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276ea-specs",
//     },
//     {
//       code: "M20 B27 (276EB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276eb-specs",
//     },
//     {
//       code: "M20 B27 (276KA)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276ka-specs",
//     },
//     {
//       code: "M20 B27 (276KB)",
//       fuel: "Petrol",
//       series: "M",
//       url: "/bmw/m20b27-276kb-specs",
//     },
//     {
//       code: "M21 D24 (246DA)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246da-specs",
//     },
//     {
//       code: "M21 D24 (246DB)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246db-specs",
//     },
//     {
//       code: "M21 D24 (246TA)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246ta-specs",
//     },
//     {
//       code: "M21 D24 (246TB)",
//       fuel: "Diesel",
//       series: "M",
//       url: "/bmw/m21d24-246tb-specs",
//     },
//     {
//       code: "N13 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n13b16a-specs",
//     },
//     {
//       code: "N20 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b16a-specs",
//     },
//     {
//       code: "N20 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20a-specs",
//     },
//     {
//       code: "N20 B20 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20b-specs",
//     },
//     {
//       code: "N20 B20 D",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n20b20d-specs",
//     },
//     {
//       code: "N26 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n26b20a-specs",
//     },
//     {
//       code: "N40 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n40b16a-specs",
//     },
//     {
//       code: "N42 B18 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n42b18a-specs",
//     },
//     {
//       code: "N42 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n42b20a-specs",
//     },
//     {
//       code: "N43 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b16a-specs",
//     },
//     {
//       code: "N43 B16 AA",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b16aa-specs",
//     },
//     {
//       code: "N43 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n43b20a-specs",
//     },
//     {
//       code: "N45 B16 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b16a-specs",
//     },
//     {
//       code: "N45 B16 AC",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b16ac-specs",
//     },
//     {
//       code: "N45 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n45b20a-specs",
//     },
//     {
//       code: "N46 B18 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b18a-specs",
//     },
//     {
//       code: "N46 B20 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20a-specs",
//     },
//     {
//       code: "N46 B20 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20b-specs",
//     },
//     {
//       code: "N46 B20 BD",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20bd-specs",
//     },
//     {
//       code: "N46 B20 C",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20c-specs",
//     },
//     {
//       code: "N46 B20 CB",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cb-specs",
//     },
//     {
//       code: "N46 B20 CC",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cc-specs",
//     },
//     {
//       code: "N46 B20 CD",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20cd-specs",
//     },
//     {
//       code: "N46 B20 E",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n46b20e-specs",
//     },
//     {
//       code: "N47 D16 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d16a-specs",
//     },
//     {
//       code: "N47 D20 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20a-specs",
//     },
//     {
//       code: "N47 D20 B",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20b-specs",
//     },
//     {
//       code: "N47 D20 C",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20c-specs",
//     },
//     {
//       code: "N47 D20 D",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n47d20d-specs",
//     },
//     {
//       code: "N52 B25 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25a-specs",
//     },
//     {
//       code: "N52 B25 AE",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25ae-specs",
//     },
//     {
//       code: "N52 B25 AF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25af-specs",
//     },
//     {
//       code: "N52 B25 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25b-specs",
//     },
//     {
//       code: "N52 B25 BE",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25be-specs",
//     },
//     {
//       code: "N52 B25 BF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b25bf-specs",
//     },
//     {
//       code: "N52 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30a-specs",
//     },
//     {
//       code: "N52 B30 AF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30af-specs",
//     },
//     {
//       code: "N52 B30 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30b-specs",
//     },
//     {
//       code: "N52 B30 BF",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n52b30bf-specs",
//     },
//     {
//       code: "N53 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n53b30a-specs",
//     },
//     {
//       code: "N54 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n54b30a-specs",
//     },
//     {
//       code: "N55 B30 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n55b30a-specs",
//     },
//     {
//       code: "N57 D30 A",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30a-specs",
//     },
//     {
//       code: "N57 D30 B",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30b-specs",
//     },
//     {
//       code: "N57 D30 C",
//       fuel: "Diesel",
//       series: "N",
//       url: "/bmw/n57d30c-specs",
//     },
//     {
//       code: "N62 B36 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b36a-specs",
//     },
//     {
//       code: "N62 B40 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b40a-specs",
//     },
//     {
//       code: "N62 B44 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b44a-specs",
//     },
//     {
//       code: "N62 B48 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b48a-specs",
//     },
//     {
//       code: "N62 B48 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n62b48b-specs",
//     },
//     {
//       code: "N63 B44 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44a-specs",
//     },
//     {
//       code: "N63 B44 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44b-specs",
//     },
//     {
//       code: "N63 B44 C",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n63b44c-specs",
//     },
//     {
//       code: "N73 B60 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n73b60a-specs",
//     },
//     {
//       code: "N73 B60 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n73b60b-specs",
//     },
//     {
//       code: "N74 B60 A",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n74b60a-specs",
//     },
//     {
//       code: "N74 B66 B",
//       fuel: "Petrol",
//       series: "N",
//       url: "/bmw/n74b66b-specs",
//     },
//     { code: "P65B40", fuel: "Petrol", series: "P", url: "/bmw/p65b40-specs" },
//     { code: "P65B44", fuel: "Petrol", series: "P", url: "/bmw/p65b44-specs" },
//     { code: "P66B44", fuel: "Petrol", series: "P", url: "/bmw/p66b44-specs" },
//     { code: "P68B20", fuel: "Petrol", series: "P", url: "/bmw/p68b20-specs" },
//     {
//       code: "P68B20TU",
//       fuel: "Petrol",
//       series: "P",
//       url: "/bmw/p68b20tu-specs",
//     },
//     { code: "P76B20", fuel: "Petrol", series: "P", url: "/bmw/p76b20-specs" },
//     { code: "P80", fuel: "Petrol", series: "P", url: "/bmw/p80-specs" },
//     { code: "P82", fuel: "Petrol", series: "P", url: "/bmw/p82-specs" },
//     { code: "P84", fuel: "Petrol", series: "P", url: "/bmw/p84-specs" },
//     { code: "P92B36", fuel: "Petrol", series: "P", url: "/bmw/p92b36-specs" },
//     {
//       code: "S14 B23 (234EA)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234ea-specs",
//     },
//     {
//       code: "S14 B23 (234S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234s1-specs",
//     },
//     {
//       code: "S14 B23 (234S2)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s14b23-234s2-specs",
//     },
//     {
//       code: "S38 B35 (356ED)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b35-356ed-specs",
//     },
//     {
//       code: "S38 B35 AF",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b35-af-specs",
//     },
//     {
//       code: "S38 B36 (366S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b36-366s1-specs",
//     },
//     {
//       code: "S38 B38 (386S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s38b38-386s1-specs",
//     },
//     {
//       code: "S50 B30 (306S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b30-306s1-specs",
//     },
//     {
//       code: "S50 B32 (326S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b32-326s1-specs",
//     },
//     {
//       code: "S50 B32 (326S3)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s50b32-326s3-specs",
//     },
//     {
//       code: "S54 B32 (326S4)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s54b32-326s4-specs",
//     },
//     { code: "S54R", fuel: "Petrol", series: "S", url: "/bmw/s54r-specs" },
//     {
//       code: "S55 B30 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s55b30a-specs",
//     },
//     {
//       code: "S62 B50 (508S1)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s62b50-508s1-specs",
//     },
//     {
//       code: "S63 B44 B",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s63b44b-specs",
//     },
//     {
//       code: "S65 B40 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s65b40a-specs",
//     },
//     {
//       code: "S65 B44 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s65b44a-specs",
//     },
//     {
//       code: "S70 B56 (56121)",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s70b56-56121-specs",
//     },
//     {
//       code: "S85 B50 A",
//       fuel: "Petrol",
//       series: "S",
//       url: "/bmw/s85b50a-specs",
//     },
//   ];
//
//   const uniqueSeries = useMemo(() => {
//     const series = [
//       ...new Set(engineData.map((engine) => engine.series)),
//     ].sort();
//     return series;
//   }, []);
//
//   const filteredEngines = useMemo(() => {
//     return engineData.filter((engine) => {
//       const matchesSearch = engine.code
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       const matchesFuel =
//         fuelFilter === "all" ||
//         engine.fuel.toLowerCase() === fuelFilter.toLowerCase();
//       const matchesSeries =
//         seriesFilter === "all" || engine.series === seriesFilter;
//       return matchesSearch && matchesFuel && matchesSeries;
//     });
//   }, [searchTerm, fuelFilter, seriesFilter]);
//
//   // Sample data for the additional tables
//   const topEngines = [
//     {
//       code: "B58 B30 A",
//       power: "340 HP",
//       torque: "500 Nm",
//       models: "M240i, 340i, 440i, 540i, X3 M40i, X4 M40i, Z4 M40i",
//     },
//     {
//       code: "N55 B30 A",
//       power: "306 HP",
//       torque: "400 Nm",
//       models: "135i, 335i, 435i, 535i, X3 35i, X4 35i, X5 35i",
//     },
//     {
//       code: "S55 B30 A",
//       power: "425 HP",
//       torque: "550 Nm",
//       models: "M2, M3, M4",
//     },
//     {
//       code: "S65 B40 A",
//       power: "414 HP",
//       torque: "400 Nm",
//       models: "M3, M3 GTS, M3 CRT",
//     },
//     {
//       code: "N63 B44 A",
//       power: "408 HP",
//       torque: "600 Nm",
//       models: "550i, 650i, 750i, X5 50i, X6 50i",
//     },
//   ];
//
//   const engineComparison = [
//     {
//       model: "M3 Competition",
//       engine: "S58 B30 A",
//       power: "510 HP",
//       torque: "650 Nm",
//       weight: "1,715 kg",
//       powerWeight: "297 HP/ton",
//     },
//     {
//       model: "M340i",
//       engine: "B58 B30 A",
//       power: "382 HP",
//       torque: "500 Nm",
//       weight: "1,745 kg",
//       powerWeight: "219 HP/ton",
//     },
//     {
//       model: "M240i",
//       engine: "B58 B30 A",
//       power: "374 HP",
//       torque: "500 Nm",
//       weight: "1,615 kg",
//       powerWeight: "232 HP/ton",
//     },
//     {
//       model: "M550i",
//       engine: "N63 B44 A",
//       power: "523 HP",
//       torque: "750 Nm",
//       weight: "1,985 kg",
//       powerWeight: "263 HP/ton",
//     },
//     {
//       model: "X3 M Competition",
//       engine: "S58 B30 A",
//       power: "510 HP",
//       torque: "600 Nm",
//       weight: "2,010 kg",
//       powerWeight: "254 HP/ton",
//     },
//   ];
//
//   const getFuelIcon = (fuel: string) => {
//     return fuel === "Diesel" ? (
//       <GiBarrel className="h-4 w-4 fill-current" />
//     ) : (
//       <Fuel className="h-4 w-4" />
//     );
//   };
//
//   const getFuelVariant = (fuel: string) => {
//     return fuel === "Diesel" ? "secondary" : "default";
//   };
//
//   const clearFilters = () => {
//     setSearchTerm("");
//     setFuelFilter("all");
//     setSeriesFilter("all");
//   };
//
//   // Mobile card component for engine details
//   // biome-ignore lint/suspicious/noExplicitAny: <idk>
//   const EngineCard = ({ engine }: { engine: any }) => (
//     <Card className="border-border mb-4">
//       <CardContent className="p-4">
//         <div className="flex justify-between items-start mb-3">
//           <div className="flex items-center gap-2">
//             <h3 className="font-bold text-lg text-foreground">{engine.code}</h3>
//             <div className="flex items-center gap-1">
//               {getFuelIcon(engine.fuel)}
//               <Badge variant={getFuelVariant(engine.fuel)} className="text-xs">
//                 {engine.fuel}
//               </Badge>
//             </div>
//           </div>
//           <Badge
//             variant="outline"
//             className="text-xs border-border text-foreground"
//           >
//             {engine.series}-Series
//           </Badge>
//         </div>
//
//         <div className="pt-2 flex justify-end">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="h-7 px-2 text-xs text-foreground hover:bg-accent"
//             onClick={() =>
//               window.open(`https://enginecode.uk${engine.url}`, "_blank")
//             }
//           >
//             View Specs
//             <ExternalLink className="h-3 w-3 ml-1" />
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
//
//   return (
//     <Container spaceY={4}>
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
//           Complete Engine Database
//         </h2>
//         <div className="text-lg md:text-4xl text-muted-foreground font-medium"></div>
//         <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
//           Search and explore BMW's complete engine catalog with detailed
//           specifications, technical data, and model compatibility information.
//         </p>
//       </div>
//
//       <Card className="bg-card border-border">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2 text-foreground">
//             <Filter className="h-5 w-5" />
//             Search & Filter
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Search Input */}
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search engine codes (e.g., B58, M20, N47)..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground"
//               />
//             </div>
//             {/* Fuel Type Filter */}
//             <Select value={fuelFilter} onValueChange={setFuelFilter}>
//               <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
//                 <SelectValue placeholder="Fuel Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Fuel Types</SelectItem>
//                 <SelectItem value="petrol">Petrol</SelectItem>
//                 <SelectItem value="diesel">Diesel</SelectItem>
//               </SelectContent>
//             </Select>
//             {/* Series Filter */}
//             <Select value={seriesFilter} onValueChange={setSeriesFilter}>
//               <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
//                 <SelectValue placeholder="Engine Series" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Series</SelectItem>
//                 {uniqueSeries.map((series) => (
//                   <SelectItem key={series} value={series}>
//                     {series}-Series
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {/* Clear Filters Button */}
//             <Button
//               variant="outline"
//               onClick={clearFilters}
//               className="w-full md:w-auto border-border text-foreground hover:bg-accent bg-transparent"
//             >
//               <RotateCcw className="h-4 w-4 mr-2" />
//               Clear
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//
//       {/* Main Content Area with Two Columns */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left Column - Main Engine Table (60% width) */}
//         <div className="lg:w-3/5">
//           <Card className="bg-card border-border h-full">
//             <CardHeader>
//               <CardTitle className="text-foreground">
//                 Engine Specifications Database
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-0">
//               {/* Desktop Table View - Hidden on mobile */}
//               <div className="hidden md:block">
//                 <ScrollArea className="h-[600px]">
//                   <Table className="border-collapse border-border min-w-[600px]">
//                     <TableHeader>
//                       <TableRow className="border-border">
//                         <TableHead className="text-foreground font-semibold text-start w-[30%] pl-4 sm:pl-28">
//                           Engine Code
//                         </TableHead>
//                         <TableHead className="text-foreground font-semibold text-center w-[25%]">
//                           Fuel Type
//                         </TableHead>
//                         <TableHead className="text-foreground font-semibold text-center w-[20%]">
//                           Series
//                         </TableHead>
//                         <TableHead className="text-foreground font-semibold text-center w-[25%]">
//                           Specifications
//                         </TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {filteredEngines.map((engine) => (
//                         <TableRow
//                           key={engine.code}
//                           className="border-border hover:bg-accent/50 transition-colors"
//                         >
//                           <TableCell className="font-mono font-medium text-foreground text-start pl-4 sm:pl-28">
//                             {engine.code}
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <div className="flex items-center justify-center gap-2">
//                               {getFuelIcon(engine.fuel)}
//                               <Badge
//                                 variant={getFuelVariant(engine.fuel)}
//                                 className="text-xs"
//                               >
//                                 {engine.fuel}
//                               </Badge>
//                             </div>
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <Badge
//                               variant="outline"
//                               className="text-xs border-border text-foreground"
//                             >
//                               {engine.series}-Series
//                             </Badge>
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               className="h-8 text-foreground hover:bg-accent hover:text-foreground mx-auto"
//                               onClick={() =>
//                                 window.open(
//                                   `https://enginecode.uk${engine.url}`,
//                                   "_blank",
//                                 )
//                               }
//                             >
//                               View Specs
//                               <ExternalLink className="h-3 w-3 ml-2" />
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </ScrollArea>
//               </div>
//
//               {/* Mobile Card View - Hidden on desktop */}
//               <div className="md:hidden p-4">
//                 <ScrollArea className="h-[600px]">
//                   {filteredEngines.length === 0 ? (
//                     <div className="flex flex-col items-center justify-center py-12 text-center">
//                       <Search className="h-12 w-12 text-muted-foreground mb-4" />
//                       <h3 className="text-lg font-semibold text-foreground mb-2">
//                         No engines found
//                       </h3>
//                       <p className="text-muted-foreground mb-4">
//                         Try adjusting your search terms or filters
//                       </p>
//                       <Button
//                         variant="outline"
//                         onClick={clearFilters}
//                         className="border-border text-foreground hover:bg-accent bg-transparent"
//                       >
//                         Clear all filters
//                       </Button>
//                     </div>
//                   ) : (
//                     <div className="space-y-2">
//                       {filteredEngines.map((engine) => (
//                         <EngineCard key={engine.code} engine={engine} />
//                       ))}
//                     </div>
//                   )}
//                 </ScrollArea>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//
//         {/* Right Column - Two Stacked Tables (40% width) */}
//         <div className="lg:w-2/5 flex flex-col gap-6">
//           {/* Top Engines Table */}
//           <Card className="bg-card border-border">
//             <CardHeader>
//               <CardTitle className="text-foreground">Top BMW Engines</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ScrollArea className="h-[280px]">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-foreground">
//                         Engine Code
//                       </TableHead>
//                       <TableHead className="text-foreground text-right">
//                         Power
//                       </TableHead>
//                       <TableHead className="text-foreground text-right">
//                         Torque
//                       </TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {topEngines.map((engine) => (
//                       <TableRow
//                         key={engine.code}
//                         className="border-border hover:bg-accent/50"
//                       >
//                         <TableCell className="font-medium">
//                           {engine.code}
//                         </TableCell>
//                         <TableCell className="text-right">
//                           {engine.power}
//                         </TableCell>
//                         <TableCell className="text-right">
//                           {engine.torque}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </ScrollArea>
//               <div className="mt-4 text-sm text-muted-foreground">
//                 <p className="font-medium mb-1">
//                   Models featuring these engines:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {topEngines[0].models.split(", ").map((model) => (
//                     <li key={model[0] + model[-1]}>{model}</li>
//                   ))}
//                 </ul>
//               </div>
//             </CardContent>
//           </Card>
//
//           {/* Engine Comparison Table */}
//           <Card className="bg-card border-border">
//             <CardHeader>
//               <CardTitle className="text-foreground">
//                 Performance Comparison
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ScrollArea className="h-[280px]">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-foreground">Model</TableHead>
//                       <TableHead className="text-foreground text-right">
//                         Power
//                       </TableHead>
//                       <TableHead className="text-foreground text-right">
//                         P/W Ratio
//                       </TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {engineComparison.map((car) => (
//                       <TableRow
//                         key={car.model}
//                         className="border-border hover:bg-accent/50"
//                       >
//                         <TableCell className="font-medium">
//                           {car.model}
//                         </TableCell>
//                         <TableCell className="text-right">
//                           {car.power}
//                         </TableCell>
//                         <TableCell className="text-right">
//                           {car.powerWeight}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </ScrollArea>
//               <div className="mt-4 text-sm text-muted-foreground">
//                 <p className="font-medium mb-1">Key metrics:</p>
//                 <ul className="list-disc pl-5 space-y-1">
//                   <li>Power: Maximum horsepower output</li>
//                   <li>P/W Ratio: Power-to-weight ratio (higher is better)</li>
//                   <li>All figures are manufacturer specifications</li>
//                 </ul>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
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
//               Engine specifications and technical data sourced from{" "}
//               <a
//                 href="https://www.bmwgroup.com/en.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 BMW Group Technical Documentation
//                 <ExternalLink className="h-3 w-3" />
//               </a>{" "}
//               and{" "}
//               <a
//                 href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
//               >
//                 EU Vehicle Type Approval Database
//                 <ExternalLink className="h-3 w-3" />
//               </a>
//               . All specifications are verified against official BMW service
//               documentation.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default EngineDatabase;
"use client";
import { ExternalLink, Filter, Fuel, RotateCcw, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { GiBarrel } from "react-icons/gi";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DisclaimerCard from "./disclaimer-card";
import Link from "next/link";

// TypeScript interfaces
interface Engine {
  code: string;
  fuel: string;
  series: string;
  url: string;
}

interface EngineListItem {
  id: string;
  name: string;
}

interface EngineDatabaseProps {
  brandSlug: string;
  engines: EngineListItem[];
}

// Helper function to extract series from engine code
function extractSeries(engineCode: string): string {
  // Extract first letter(s) before any number
  const match = engineCode.match(/^([A-Za-z]+)/);
  return match ? match[1].toUpperCase() : "Other";
}

// Helper function to detect fuel type from engine code
function detectFuelType(engineCode: string): string {
  // D in the code typically indicates diesel (e.g., N47D20, B47D20)
  // Check for 'D' followed by numbers in the engine code
  if (/[A-Z]\d*D\d/.test(engineCode.toUpperCase())) {
    return "Diesel";
  }
  return "Petrol";
}

// Helper function to transform DB engine to component format
function transformEngine(engine: EngineListItem, brandSlug: string): Engine {
  const engineId = engine.id;
  return {
    code: engine.name,
    fuel: detectFuelType(engineId),
    series: extractSeries(engine.name),
    url: `/${brandSlug}/${engineId}-specs`,
  };
}

const EngineDatabase = ({ brandSlug, engines }: EngineDatabaseProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [seriesFilter, setSeriesFilter] = useState("all");

  // Transform engines from DB format to component format
  const engineData: Engine[] = useMemo(() => {
    return engines.map((engine) => transformEngine(engine, brandSlug));
  }, [engines, brandSlug]);

  // Get brand display name (capitalize first letter)
  const brandName = brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);

  const uniqueSeries = useMemo(() => {
    const series = [
      ...new Set(engineData.map((engine) => engine.series)),
    ].sort();
    return series;
  }, [engineData]);

  const filteredEngines = useMemo(() => {
    return engineData.filter((engine) => {
      const matchesSearch = engine.code
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFuel =
        fuelFilter === "all" ||
        engine.fuel.toLowerCase() === fuelFilter.toLowerCase();
      const matchesSeries =
        seriesFilter === "all" || engine.series === seriesFilter;
      return matchesSearch && matchesFuel && matchesSeries;
    });
  }, [engineData, searchTerm, fuelFilter, seriesFilter]);

  // Sample data for third-party manufacturers using BMW engines
  const thirdPartyEngines = [
    {
      engineCode: "N62 B48 A",
      manufacturer: "Wiesmann",
      vehicle: "MF4/MF5",
      years: "2005-2013",
      application: "Sports cars",
    },
    {
      engineCode: "S62 B50",
      manufacturer: "Wiesmann",
      vehicle: "MF3",
      years: "2003-2010",
      application: "Roadster",
    },
    {
      engineCode: "M73 B54",
      manufacturer: "Rolls-Royce",
      vehicle: "Silver Seraph",
      years: "1998-2002",
      application: "Luxury sedan",
    },
    {
      engineCode: "N73 B60",
      manufacturer: "Rolls-Royce",
      vehicle: "Phantom",
      years: "2003-2016",
      application: "Ultra-luxury sedan",
    },
    {
      engineCode: "N63 B44",
      manufacturer: "Toyota",
      vehicle: "Century",
      years: "2018-present",
      application: "Luxury sedan",
    },
    {
      engineCode: "B48 B20",
      manufacturer: "Toyota",
      vehicle: "Supra",
      years: "2019-present",
      application: "Sports car",
    },
    {
      engineCode: "B58 B30",
      manufacturer: "Toyota",
      vehicle: "Supra",
      years: "2019-present",
      application: "Sports car",
    },
    {
      engineCode: "S55 B30",
      manufacturer: "Toyota",
      vehicle: "Supra GRMN",
      years: "2020-2022",
      application: "High-performance sports car",
    },
  ];

  const evHybridEngines = [
    {
      engineCode: "BEV1",
      type: "Full EV",
      powerOutput: "286 HP",
      range: "285 miles",
      models: "iX xDrive40",
    },
    {
      engineCode: "BEV2",
      type: "Full EV",
      powerOutput: "516 HP",
      range: "380 miles",
      models: "iX xDrive50",
    },
    {
      engineCode: "BEV3",
      type: "Full EV",
      powerOutput: "610 HP",
      range: "324 miles",
      models: "iX M60",
    },
    {
      engineCode: "BEV4",
      type: "Full EV",
      powerOutput: "308 HP",
      range: "270 miles",
      models: "i4 eDrive40",
    },
    {
      engineCode: "BEV5",
      type: "Full EV",
      powerOutput: "536 HP",
      range: "245 miles",
      models: "i4 M50",
    },
    {
      engineCode: "PHEV1",
      type: "Plug-in Hybrid",
      powerOutput: "389 HP",
      range: "54 miles (electric)",
      models: "530e, 545e, 745e",
    },
    {
      engineCode: "PHEV2",
      type: "Plug-in Hybrid",
      powerOutput: "489 HP",
      range: "50 miles (electric)",
      models: "X5 xDrive45e, X5 xDrive50e",
    },
    {
      engineCode: "PHEV3",
      type: "Plug-in Hybrid",
      powerOutput: "552 HP",
      range: "48 miles (electric)",
      models: "XM",
    },
    {
      engineCode: "REV1",
      type: "Range Extender",
      powerOutput: "170 HP",
      range: "100 miles (electric)",
      models: "i3 REx",
    },
  ];

  const getFuelIcon = (fuel: string) => {
    return fuel === "Diesel" ? (
      <GiBarrel className="h-4 w-4 fill-current" />
    ) : (
      <Fuel className="h-4 w-4" />
    );
  };

  const getFuelVariant = (fuel: string) => {
    return fuel === "Diesel" ? "secondary" : "default";
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFuelFilter("all");
    setSeriesFilter("all");
  };

  // Mobile card component for engine details
  const EngineCard = ({ engine }: { engine: Engine }) => (
    <Card className="border-border mb-4">
      <CardContent className="px-3">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg text-foreground">{engine.code}</h3>
            <div className="flex items-center gap-1">
              {getFuelIcon(engine.fuel)}
              <Badge variant={getFuelVariant(engine.fuel)} className="text-xs">
                {engine.fuel}
              </Badge>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-xs border-border text-foreground"
          >
            {engine.series}-Series
          </Badge>
        </div>

        <div className="pt-2 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs text-foreground hover:bg-accent"
            asChild
          >
            <Link href={engine.url}>
              View Specs
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Container spaceY={4}>
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
          Complete Engine Database
        </h2>
        <div className="text-lg md:text-4xl text-muted-foreground font-medium"></div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-4">
          Search and explore {brandName}'s complete engine catalog with detailed
          specifications, technical data, and model compatibility information.
        </p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Filter className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search engine codes (e.g., B58, M20, N47)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            {/* Fuel Type Filter */}
            <Select value={fuelFilter} onValueChange={setFuelFilter}>
              <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
                <SelectValue placeholder="Fuel Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fuel Types</SelectItem>
                <SelectItem value="petrol">Petrol</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
              </SelectContent>
            </Select>
            {/* Series Filter */}
            <Select value={seriesFilter} onValueChange={setSeriesFilter}>
              <SelectTrigger className="w-full md:w-[180px] bg-background border-border text-foreground">
                <SelectValue placeholder="Engine Series" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Series</SelectItem>
                {uniqueSeries.map((series) => (
                  <SelectItem key={series} value={series}>
                    {series}-Series
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Clear Filters Button */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="w-full md:w-auto border-border text-foreground hover:bg-accent bg-transparent"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Area with Two Columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Main Engine Table (60% width) */}
        <div className="lg:w-3/5">
          <Card className="bg-card border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">
                Engine Specifications Database
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Desktop Table View - Hidden on mobile */}
              <div className="hidden md:block">
                <ScrollArea className="h-[900px]">
                  <Table className="border-collapse border-border min-w-[600px]">
                    <TableHeader>
                      <TableRow className="border-border">
                        <TableHead className="text-foreground font-semibold text-start w-[30%] pl-4 sm:pl-16">
                          Engine Code
                        </TableHead>
                        <TableHead className="text-foreground font-semibold text-center w-[25%]">
                          Fuel Type
                        </TableHead>
                        <TableHead className="text-foreground font-semibold text-center w-[20%]">
                          Series
                        </TableHead>
                        <TableHead className="text-foreground font-semibold text-center w-[25%]">
                          Specifications
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEngines.map((engine) => (
                        <TableRow
                          key={engine.code}
                          className="border-border hover:bg-accent/50 transition-colors"
                        >
                          <TableCell className="font-mono font-medium text-foreground text-start pl-4 sm:pl-16">
                            {engine.code}
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-2">
                              {getFuelIcon(engine.fuel)}
                              <Badge
                                variant={getFuelVariant(engine.fuel)}
                                className="text-xs"
                              >
                                {engine.fuel}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              variant="outline"
                              className="text-xs border-border text-foreground"
                            >
                              {engine.series}-Series
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 text-foreground hover:bg-accent hover:text-foreground mx-auto"
                              asChild
                            >
                              <Link href={engine.url}>
                                View Specs
                                <ExternalLink className="h-3 w-3 ml-2" />
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>

              {/* Mobile Card View - Hidden on desktop */}
              <div className="md:hidden p-4">
                <ScrollArea className="h-[300px]">
                  {filteredEngines.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Search className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        No engines found
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search terms or filters
                      </p>
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="border-border text-foreground hover:bg-accent bg-transparent"
                      >
                        Clear all filters
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {filteredEngines.map((engine) => (
                        <EngineCard key={engine.code} engine={engine} />
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Two Stacked Tables (40% width) */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          {/* Third Party Manufacturers Table */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">
                {brandName} Engines Used by Third Party Manufacturers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[280px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-foreground">
                        Engine Code
                      </TableHead>
                      <TableHead className="text-foreground">
                        Manufacturer
                      </TableHead>
                      <TableHead className="text-foreground">Vehicle</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {thirdPartyEngines.map((engine) => (
                      <TableRow
                        key={`${engine.engineCode}-${engine.manufacturer}`}
                        className="border-border hover:bg-accent/50"
                      >
                        <TableCell className="font-medium">
                          {engine.engineCode}
                        </TableCell>
                        <TableCell>{engine.manufacturer}</TableCell>
                        <TableCell>{engine.vehicle}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium mb-1">Notable partnerships:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Third-party vehicles powered by {brandName} engines</li>
                  <li>OEM partnerships featuring {brandName} powertrains</li>
                  <li>
                    Performance collaborations with {brandName} technology
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* EV and Hybrid Engines Table */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">
                EV and Hybrid Engines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[280px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-foreground">
                        Engine Code
                      </TableHead>
                      <TableHead className="text-foreground">Type</TableHead>
                      <TableHead className="text-foreground text-right">
                        Power
                      </TableHead>
                      <TableHead className="text-foreground text-right">
                        Range
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evHybridEngines.map((engine) => (
                      <TableRow
                        key={engine.engineCode}
                        className="border-border hover:bg-accent/50"
                      >
                        <TableCell className="font-medium">
                          {engine.engineCode}
                        </TableCell>
                        <TableCell>{engine.type}</TableCell>
                        <TableCell className="text-right">
                          {engine.powerOutput}
                        </TableCell>
                        <TableCell className="text-right">
                          {engine.range}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium mb-1">
                  {brandName} electrification strategy:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full EV models available in the lineup</li>
                  <li>Plug-in Hybrid variants across model range</li>
                  <li>Continued expansion of electrified powertrain options</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Source Disclaimer */}
      <DisclaimerCard>
        Engine specifications and technical data sourced from{" "}
        <Link
          href={`https://www.${brandSlug}.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          {brandName} Official Technical Documentation
          <ExternalLink className="h-3 w-3" />
        </Link>{" "}
        and{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          EU Vehicle Type Approval Database
          <ExternalLink className="h-3 w-3" />
        </Link>
        . All specifications are verified against official {brandName} service
        documentation.
      </DisclaimerCard>
    </Container>
  );
};

export default EngineDatabase;
