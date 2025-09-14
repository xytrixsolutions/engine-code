"use client";

import {
  AlertTriangle,
  ChevronDown,
  ExternalLink,
  FileText,
  Hash,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Container from "@/components/Container";

const modelGuides = [
  {
    id: "e90-n47",
    title: "BMW 320d (E90, 2007–2011) – N47 Engine",
    description:
      "Locate the engine code on the front timing cover, just below the camshaft cover. It is stamped into the metal or on a label near the timing chain housing.",
    imageFilename: "bmw-e90-n47-engine-code-location.webp",
    altText:
      "BMW E90 320d N47 engine code location on timing cover – stamped near camshaft housing – UK model year 2009",
  },
  {
    id: "f30-b48",
    title: "BMW 330i (F30, 2015–2019) – B48 Engine",
    description:
      'The engine code is located on a label attached to the intake manifold, near the turbocharger. It reads "B48B20O0" or "B48B20O1".',
    imageFilename: "bmw-f30-b48-engine-code-intake-label.webp",
    altText:
      "BMW F30 330i B48B20 engine code on intake manifold label – turbo side – Euro 6 compliance",
  },
  {
    id: "g01-b47-b48",
    title: "BMW X3 (G01, 2018–Now) – B47D20 or B48B20",
    description:
      'Open the hood and look at the front left of the engine (passenger side). The code is on a white label near the timing cover. For diesel models, confirm "B47D20"; petrol models show "B48B20".',
    imageFilename: "bmw-g01-x3-b47-b48-engine-code-location.webp",
    altText:
      "BMW G01 X3 engine code location for B47D20 and B48B20 – label near timing cover – UK registration model",
  },
  {
    id: "e46-m54",
    title: "BMW 320i (E46, 2000–2005) – M54 Engine",
    description:
      'The engine code is cast into the front of the cylinder head, near the thermostat housing. Look for "M54B22" or "M54B30".',
    imageFilename: "bmw-e46-m54-engine-code-cast-location.webp",
    altText:
      "BMW E46 320i M54B22 engine code cast into cylinder head – thermostat housing area – Euro 4 model",
  },
];

export default function EngineCodeGuide() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  return (
    <Container centerText spaceY={4}>
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          How to Find Your BMW Engine Code
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          The engine code is essential for ordering parts, diagnosing issues,
          and verifying compatibility. It is{" "}
          <strong className="text-foreground">
            not the same as the VIN or chassis number
          </strong>
          . This guide shows exactly where to find it — by model and engine type
          — using official BMW and DVLA sources.
        </p>
      </div>

      {/* Important Warning */}
      <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-foreground">
          <strong>Important Distinctions:</strong>
          <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
            <li>
              <strong>Engine Code</strong> = Identifies the engine variant
              (e.g., N47D20A)
            </li>
            <li>
              <strong>VIN</strong> = Unique vehicle identifier (17-digit, on
              windscreen)
            </li>
            <li>
              <strong>Chassis Number</strong> = Same as VIN
            </li>
          </ul>
          <p className="mt-2 text-sm">
            Confusing these can lead to incorrect parts orders. Always verify
            using the engine code.
          </p>
        </AlertDescription>
      </Alert>

      {/* Method 1: Engine Bay */}
      <Card className="p-8 border-border bg-card">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              1. Engine Bay Sticker or Cast Marking
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The most reliable method. The engine code is stamped or labeled
            directly on the engine block or cover.
          </p>

          {/* Model-Specific Guides */}
          <div className="space-y-4">
            {modelGuides.map((guide) => (
              <Collapsible
                key={guide.id}
                open={openSections.includes(guide.id)}
                onOpenChange={() => toggleSection(guide.id)}
              >
                <CollapsibleTrigger className="w-full">
                  <Card className="p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-foreground text-left">
                        {guide.title}
                      </h4>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          openSections.includes(guide.id) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Card className="p-6 bg-muted/30 border-border">
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {guide.description}
                      </p>

                      {/* Image Placeholder */}
                      <div className="bg-muted border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <div className="text-muted-foreground space-y-2">
                          <div className="text-sm font-medium">
                            Image: {guide.imageFilename}
                          </div>
                          <div className="text-xs italic">{guide.altText}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </Card>

      {/* Method 2: V5C Registration */}
      <Card className="p-8 border-border bg-card">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              2. On Your V5C Registration Certificate
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The engine code is listed under the{" "}
            <strong className="text-foreground">"Engine Number"</strong> field
            on the V5C (logbook). This is the legal identifier used by DVLA.
          </p>

          {/* V5C Image Placeholder */}
          <div className="bg-muted border-2 border-dashed border-border rounded-lg p-8 text-center">
            <div className="text-muted-foreground space-y-2">
              <div className="text-sm font-medium">
                Image: bmw-v5c-logbook-engine-number-field-uk.webp
              </div>
              <div className="text-xs italic">
                Where to find engine code on UK V5C logbook – DVLA registration
                document – Engine Number field
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
            <AlertDescription className="text-sm text-muted-foreground">
              <strong>Note:</strong> If the engine has been replaced, the V5C
              may not reflect the current code. Always verify physically.
            </AlertDescription>
          </Alert>
        </div>
      </Card>

      {/* Method 3: VIN Decoding */}
      <Card className="p-8 border-border bg-card">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Hash className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              3. Decode Your VIN (Vehicle Identification Number)
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The VIN (on windscreen, door jamb, or V5C) contains encoded
            information, including engine type. Use a{" "}
            <strong className="text-foreground">
              BMW-specific VIN decoder
            </strong>{" "}
            to extract the engine code.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Recommended tool:</strong>{" "}
                <a href="/vin-decoder" className="text-primary hover:underline">
                  EngineCode.uk BMW VIN Decoder
                </a>{" "}
                <Badge variant="outline" className="text-xs ml-2">
                  In Development
                </Badge>
              </p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Manual method:</strong>{" "}
                Positions 4–7 of the VIN indicate engine type (per BMW TIS Doc.
                A15001). Example: VIN{" "}
                <code className="bg-muted px-1 rounded">WBA...1A1A...</code> →
                "1A1A" = N47D20A.
              </p>
            </div>

            {/* VIN Image Placeholder */}
            <div className="bg-muted border-2 border-dashed border-border rounded-lg p-8 text-center">
              <div className="text-muted-foreground space-y-2">
                <div className="text-sm font-medium">
                  Image: bmw-vin-plate-engine-code-segment-location.webp
                </div>
                <div className="text-xs italic">
                  BMW VIN number plate with engine code segment highlighted –
                  positions 4 to 7 – windscreen identification
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Source Disclaimer */}
      <Card className="p-6 bg-muted/30 border-border">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Badge variant="outline" className="text-xs shrink-0 mt-0.5">
            †
          </Badge>
          <p className="text-left leading-relaxed">
            Engine code locations per{" "}
            <a
              href="https://www.bmw-techinfo.com/document/A15001"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              BMW TIS Document A15001 – Vehicle Identification
              <ExternalLink className="h-3 w-3" />
            </a>
            . V5C field definitions from{" "}
            <a
              href="https://www.gov.uk/get-vehicle-information-from-dvla"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              DVLA Guide to Vehicle Registration
              <ExternalLink className="h-3 w-3" />
            </a>
            . VIN structure compliant with{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              EU Regulation (EC) No 715/2007, Article 7
              <ExternalLink className="h-3 w-3" />
            </a>
            .
          </p>
        </div>
      </Card>
    </Container>
  );
}
