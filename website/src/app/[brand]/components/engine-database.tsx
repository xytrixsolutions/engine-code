"use client";

import {
  Circle,
  ExternalLink,
  Filter,
  Fuel,
  RotateCcw,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
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
import { cn } from "@/app/lib/utils";

const EngineDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [seriesFilter, setSeriesFilter] = useState("all");
  const engineData = [
    {
      code: "B36 B07 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b36b07a-specs",
    },
    {
      code: "B37 C15 A",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b37c15a-specs",
    },
    {
      code: "B37 D15 A",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b37d15a-specs",
    },
    {
      code: "B38 A15 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b38a15a-specs",
    },
    {
      code: "B38 B15 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b38b15a-specs",
    },
    {
      code: "B42 S20 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b42s20a-specs",
    },
    {
      code: "B46 A20 B",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b46a20b-specs",
    },
    {
      code: "B46 B20 B",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b46b20b-specs",
    },
    {
      code: "B47 C20 A",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b47c20a-specs",
    },
    {
      code: "B47 C20 B",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b47c20b-specs",
    },
    {
      code: "B47 D20 A",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b47d20a-specs",
    },
    {
      code: "B47 D20 B",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b47d20b-specs",
    },
    {
      code: "B48 A20 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b48a20a-specs",
    },
    {
      code: "B48 A20 B",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b48a20b-specs",
    },
    {
      code: "B48 A20 F",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b48a20f-specs",
    },
    {
      code: "B48 B16 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b48b16a-specs",
    },
    {
      code: "B48 B20 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b48b20a-specs",
    },
    {
      code: "B48 B20 B",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b48b20b-specs",
    },
    {
      code: "B57 D30 A",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b57d30a-specs",
    },
    {
      code: "B57 D30 B",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b57d30b-specs",
    },
    {
      code: "B57 D30 C",
      fuel: "Diesel",
      series: "B",
      url: "/bmw/b57d30c-specs",
    },
    {
      code: "B58 B30 A",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b58b30a-specs",
    },
    {
      code: "B58 B30 C",
      fuel: "Petrol",
      series: "B",
      url: "/bmw/b58b30c-specs",
    },
    { code: "E41/4", fuel: "Petrol", series: "E", url: "/bmw/e41-4-specs" },
    { code: "M10 B15", fuel: "Petrol", series: "M", url: "/bmw/m10b15-specs" },
    {
      code: "M10 B16 (164VA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b16-164va-specs",
    },
    {
      code: "M10 B16 (164VB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b16-164vb-specs",
    },
    {
      code: "M10 B16 (16A)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b16-16a-specs",
    },
    {
      code: "M10 B16 A",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b16a-specs",
    },
    { code: "M10 B18", fuel: "Petrol", series: "M", url: "/bmw/m10b18-specs" },
    {
      code: "M10 B18 (184EA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184ea-specs",
    },
    {
      code: "M10 B18 (184EB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184eb-specs",
    },
    {
      code: "M10 B18 (184EZ)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184ez-specs",
    },
    {
      code: "M10 B18 (184KA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184ka-specs",
    },
    {
      code: "M10 B18 (184VA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184va-specs",
    },
    {
      code: "M10 B18 (184VB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184vb-specs",
    },
    {
      code: "M10 B18 (184VC)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184vc-specs",
    },
    {
      code: "M10 B18 (184VD)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b18-184vd-specs",
    },
    { code: "M10 B20", fuel: "Petrol", series: "M", url: "/bmw/m10b20-specs" },
    {
      code: "M10 B20 (23EA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b20-23ea-specs",
    },
    {
      code: "M10 B20 A",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m10b20a-specs",
    },
    { code: "M118", fuel: "Petrol", series: "M", url: "/bmw/m118-specs" },
    { code: "M12/7", fuel: "Petrol", series: "M", url: "/bmw/m12-7-specs" },
    { code: "M12/10", fuel: "Petrol", series: "M", url: "/bmw/m12-10-specs" },
    { code: "M12/13", fuel: "Petrol", series: "M", url: "/bmw/m12-13-specs" },
    {
      code: "M20 B20 (206EA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b20-206ea-specs",
    },
    {
      code: "M20 B20 (206EB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b20-206eb-specs",
    },
    {
      code: "M20 B20 (206EC)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b20-206ec-specs",
    },
    {
      code: "M20 B20 (206EZ)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b20-206ez-specs",
    },
    {
      code: "M20 B20 (206KA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b20-206ka-specs",
    },
    {
      code: "M20 B20 (206VA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b20-206va-specs",
    },
    {
      code: "M20 B23 (236EA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b23-236ea-specs",
    },
    {
      code: "M20 B23 (236EB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b23-236eb-specs",
    },
    {
      code: "M20 B23 (236EC)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b23-236ec-specs",
    },
    {
      code: "M20 B23 (236EW)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b23-236ew-specs",
    },
    {
      code: "M20 B25 (256E1)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b25-256e1-specs",
    },
    {
      code: "M20 B25 (256E2)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b25-256e2-specs",
    },
    {
      code: "M20 B25 (256EX)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b25-256ex-specs",
    },
    {
      code: "M20 B25 (256K1)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b25-256k1-specs",
    },
    {
      code: "M20 B27 (276EA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b27-276ea-specs",
    },
    {
      code: "M20 B27 (276EB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b27-276eb-specs",
    },
    {
      code: "M20 B27 (276KA)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b27-276ka-specs",
    },
    {
      code: "M20 B27 (276KB)",
      fuel: "Petrol",
      series: "M",
      url: "/bmw/m20b27-276kb-specs",
    },
    {
      code: "M21 D24 (246DA)",
      fuel: "Diesel",
      series: "M",
      url: "/bmw/m21d24-246da-specs",
    },
    {
      code: "M21 D24 (246DB)",
      fuel: "Diesel",
      series: "M",
      url: "/bmw/m21d24-246db-specs",
    },
    {
      code: "M21 D24 (246TA)",
      fuel: "Diesel",
      series: "M",
      url: "/bmw/m21d24-246ta-specs",
    },
    {
      code: "M21 D24 (246TB)",
      fuel: "Diesel",
      series: "M",
      url: "/bmw/m21d24-246tb-specs",
    },
    {
      code: "N13 B16 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n13b16a-specs",
    },
    {
      code: "N20 B16 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n20b16a-specs",
    },
    {
      code: "N20 B20 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n20b20a-specs",
    },
    {
      code: "N20 B20 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n20b20b-specs",
    },
    {
      code: "N20 B20 D",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n20b20d-specs",
    },
    {
      code: "N26 B20 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n26b20a-specs",
    },
    {
      code: "N40 B16 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n40b16a-specs",
    },
    {
      code: "N42 B18 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n42b18a-specs",
    },
    {
      code: "N42 B20 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n42b20a-specs",
    },
    {
      code: "N43 B16 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n43b16a-specs",
    },
    {
      code: "N43 B16 AA",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n43b16aa-specs",
    },
    {
      code: "N43 B20 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n43b20a-specs",
    },
    {
      code: "N45 B16 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n45b16a-specs",
    },
    {
      code: "N45 B16 AC",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n45b16ac-specs",
    },
    {
      code: "N45 B20 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n45b20a-specs",
    },
    {
      code: "N46 B18 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b18a-specs",
    },
    {
      code: "N46 B20 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20a-specs",
    },
    {
      code: "N46 B20 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20b-specs",
    },
    {
      code: "N46 B20 BD",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20bd-specs",
    },
    {
      code: "N46 B20 C",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20c-specs",
    },
    {
      code: "N46 B20 CB",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20cb-specs",
    },
    {
      code: "N46 B20 CC",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20cc-specs",
    },
    {
      code: "N46 B20 CD",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20cd-specs",
    },
    {
      code: "N46 B20 E",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n46b20e-specs",
    },
    {
      code: "N47 D16 A",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n47d16a-specs",
    },
    {
      code: "N47 D20 A",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n47d20a-specs",
    },
    {
      code: "N47 D20 B",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n47d20b-specs",
    },
    {
      code: "N47 D20 C",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n47d20c-specs",
    },
    {
      code: "N47 D20 D",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n47d20d-specs",
    },
    {
      code: "N52 B25 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b25a-specs",
    },
    {
      code: "N52 B25 AE",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b25ae-specs",
    },
    {
      code: "N52 B25 AF",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b25af-specs",
    },
    {
      code: "N52 B25 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b25b-specs",
    },
    {
      code: "N52 B25 BE",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b25be-specs",
    },
    {
      code: "N52 B25 BF",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b25bf-specs",
    },
    {
      code: "N52 B30 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b30a-specs",
    },
    {
      code: "N52 B30 AF",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b30af-specs",
    },
    {
      code: "N52 B30 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b30b-specs",
    },
    {
      code: "N52 B30 BF",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n52b30bf-specs",
    },
    {
      code: "N53 B30 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n53b30a-specs",
    },
    {
      code: "N54 B30 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n54b30a-specs",
    },
    {
      code: "N55 B30 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n55b30a-specs",
    },
    {
      code: "N57 D30 A",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n57d30a-specs",
    },
    {
      code: "N57 D30 B",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n57d30b-specs",
    },
    {
      code: "N57 D30 C",
      fuel: "Diesel",
      series: "N",
      url: "/bmw/n57d30c-specs",
    },
    {
      code: "N62 B36 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n62b36a-specs",
    },
    {
      code: "N62 B40 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n62b40a-specs",
    },
    {
      code: "N62 B44 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n62b44a-specs",
    },
    {
      code: "N62 B48 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n62b48a-specs",
    },
    {
      code: "N62 B48 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n62b48b-specs",
    },
    {
      code: "N63 B44 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n63b44a-specs",
    },
    {
      code: "N63 B44 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n63b44b-specs",
    },
    {
      code: "N63 B44 C",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n63b44c-specs",
    },
    {
      code: "N73 B60 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n73b60a-specs",
    },
    {
      code: "N73 B60 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n73b60b-specs",
    },
    {
      code: "N74 B60 A",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n74b60a-specs",
    },
    {
      code: "N74 B66 B",
      fuel: "Petrol",
      series: "N",
      url: "/bmw/n74b66b-specs",
    },
    { code: "P65B40", fuel: "Petrol", series: "P", url: "/bmw/p65b40-specs" },
    { code: "P65B44", fuel: "Petrol", series: "P", url: "/bmw/p65b44-specs" },
    { code: "P66B44", fuel: "Petrol", series: "P", url: "/bmw/p66b44-specs" },
    { code: "P68B20", fuel: "Petrol", series: "P", url: "/bmw/p68b20-specs" },
    {
      code: "P68B20TU",
      fuel: "Petrol",
      series: "P",
      url: "/bmw/p68b20tu-specs",
    },
    { code: "P76B20", fuel: "Petrol", series: "P", url: "/bmw/p76b20-specs" },
    { code: "P80", fuel: "Petrol", series: "P", url: "/bmw/p80-specs" },
    { code: "P82", fuel: "Petrol", series: "P", url: "/bmw/p82-specs" },
    { code: "P84", fuel: "Petrol", series: "P", url: "/bmw/p84-specs" },
    { code: "P92B36", fuel: "Petrol", series: "P", url: "/bmw/p92b36-specs" },
    {
      code: "S14 B23 (234EA)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s14b23-234ea-specs",
    },
    {
      code: "S14 B23 (234S1)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s14b23-234s1-specs",
    },
    {
      code: "S14 B23 (234S2)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s14b23-234s2-specs",
    },
    {
      code: "S38 B35 (356ED)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s38b35-356ed-specs",
    },
    {
      code: "S38 B35 AF",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s38b35-af-specs",
    },
    {
      code: "S38 B36 (366S1)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s38b36-366s1-specs",
    },
    {
      code: "S38 B38 (386S1)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s38b38-386s1-specs",
    },
    {
      code: "S50 B30 (306S1)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s50b30-306s1-specs",
    },
    {
      code: "S50 B32 (326S1)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s50b32-326s1-specs",
    },
    {
      code: "S50 B32 (326S3)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s50b32-326s3-specs",
    },
    {
      code: "S54 B32 (326S4)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s54b32-326s4-specs",
    },
    { code: "S54R", fuel: "Petrol", series: "S", url: "/bmw/s54r-specs" },
    {
      code: "S55 B30 A",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s55b30a-specs",
    },
    {
      code: "S62 B50 (508S1)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s62b50-508s1-specs",
    },
    {
      code: "S63 B44 B",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s63b44b-specs",
    },
    {
      code: "S65 B40 A",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s65b40a-specs",
    },
    {
      code: "S65 B44 A",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s65b44a-specs",
    },
    {
      code: "S70 B56 (56121)",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s70b56-56121-specs",
    },
    {
      code: "S85 B50 A",
      fuel: "Petrol",
      series: "S",
      url: "/bmw/s85b50a-specs",
    },
  ];
  const uniqueSeries = useMemo(() => {
    const series = [
      ...new Set(engineData.map((engine) => engine.series)),
    ].sort();
    return series;
  }, []);
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
  }, [searchTerm, fuelFilter, seriesFilter]);
  const getFuelIcon = (fuel: string) => {
    return fuel === "Diesel" ? (
      <Circle className="h-4 w-4 fill-current" />
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
  return (
    <Container spaceY={4}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Complete Engine Database
        </h2>
        <div className="text-lg md:text-4xl text-muted-foreground font-medium"></div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          Search and explore BMW's complete engine catalog with detailed
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

      {/* Engine Database Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">
            Engine Specifications Database
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[600px]">
            {/* <Table className="border-collapse border-border"> */}
            {/*   <TableHeader> */}
            {/*     <TableRow className="border-border"> */}
            {/*       {["Engine Code", "Fuel Type", "Series", "Specifications"].map( */}
            {/*         (header) => ( */}
            {/*           <TableHead */}
            {/*             key={header} */}
            {/*             className="text-foreground font-semibold" */}
            {/*           > */}
            {/*             {header} */}
            {/*           </TableHead> */}
            {/*         ), */}
            {/*       )} */}
            {/*     </TableRow> */}
            {/*   </TableHeader> */}
            {/*   <TableBody> */}
            {/*     {filteredEngines.map((engine) => ( */}
            {/*       <TableRow */}
            {/*         key={engine.code} */}
            {/*         className="border-border hover:bg-accent/50 transition-colors" */}
            {/*       > */}
            {/*         <TableCell className="font-mono font-medium text-foreground"> */}
            {/*           {engine.code} */}
            {/*         </TableCell> */}
            {/*         <TableCell> */}
            {/*           <div className="flex items-center gap-2"> */}
            {/*             {getFuelIcon(engine.fuel)} */}
            {/*             <Badge */}
            {/*               // biome-ignore lint/suspicious/noExplicitAny: <idk> */}
            {/*               variant={getFuelVariant(engine.fuel) as any} */}
            {/*               className="text-xs" */}
            {/*             > */}
            {/*               {engine.fuel} */}
            {/*             </Badge> */}
            {/*           </div> */}
            {/*         </TableCell> */}
            {/*         <TableCell> */}
            {/*           <Badge */}
            {/*             variant="outline" */}
            {/*             className="text-xs border-border text-foreground" */}
            {/*           > */}
            {/*             {engine.series}-Series */}
            {/*           </Badge> */}
            {/*         </TableCell> */}
            {/*         <TableCell> */}
            {/*           <Button */}
            {/*             variant="ghost" */}
            {/*             size="sm" */}
            {/*             className="h-8 text-foreground hover:bg-accent hover:text-foreground" */}
            {/*             onClick={() => */}
            {/*               window.open( */}
            {/*                 `https://enginecode.uk${engine.url}`, */}
            {/*                 "_blank", */}
            {/*               ) */}
            {/*             } */}
            {/*           > */}
            {/*             View Specs */}
            {/*             <ExternalLink className="h-3 w-3 ml-2" /> */}
            {/*           </Button> */}
            {/*         </TableCell> */}
            {/*       </TableRow> */}
            {/*     ))} */}
            {/*   </TableBody> */}
            {/* </Table> */}
            <Table className="border-collapse border-border table-fixed w-full">
              <TableHeader>
                <TableRow className="border-border">
                  {["Engine Code", "Fuel Type", "Series", "Specifications"].map(
                    (header) => (
                      <TableHead
                        key={header}
                        className={cn(
                          "text-foreground font-semibold text-center w-1/4",
                          header === "Engine Code" && "pl-28 text-start",
                        )}
                      >
                        {header}
                      </TableHead>
                    ),
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEngines.map((engine) => (
                  <TableRow
                    key={engine.code}
                    className="border-border hover:bg-accent/50 transition-colors"
                  >
                    <TableCell className="font-mono font-medium text-foreground pl-28 text-start">
                      {engine.code}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        {getFuelIcon(engine.fuel)}
                        <Badge
                          variant={getFuelVariant(engine.fuel) as any}
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
                        onClick={() =>
                          window.open(
                            `https://enginecode.uk${engine.url}`,
                            "_blank",
                          )
                        }
                      >
                        View Specs
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {filteredEngines.length === 0 && (
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
            )}
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
              Engine specifications and technical data sourced from{" "}
              <a
                href="https://www.bmwgroup.com/en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
              >
                BMW Group Technical Documentation
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              and{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
              >
                EU Vehicle Type Approval Database
                <ExternalLink className="h-3 w-3" />
              </a>
              . All specifications are verified against official BMW service
              documentation.
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EngineDatabase;
