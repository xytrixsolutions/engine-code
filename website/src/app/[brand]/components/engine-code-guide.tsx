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
import Container from "@/components/Container";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import DisclaimerCard from "./disclaimer-card";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageDialog } from "./image-dialog";

const modelGuides = [
  {
    id: "e90-n47",
    title: "BMW 320d (E90, 2007–2011) – N47 Engine",
    description:
      "Locate the engine code on the front timing cover, just below the camshaft cover. It is stamped into the metal or on a label near the timing chain housing.",
    imageFileName: "/bmw/how-to-find-your-engine-code/n47.jpg",
    altText:
      "BMW E90 320d N47 engine code location on timing cover – stamped near camshaft housing – UK model year 2009",
  },
  {
    id: "f30-b48",
    title: "BMW 330i (F30, 2015–2019) – B48 Engine",
    description:
      'The engine code is located on a label attached to the intake manifold, near the turbocharger. It reads "B48B20O0" or "B48B20O1".',
    imageFileName: "/bmw/how-to-find-your-engine-code/b48.jpg",
    altText:
      "BMW F30 330i B48B20 engine code on intake manifold label – turbo side – Euro 6 compliance",
  },
  {
    id: "g01-b47-b48",
    title: "BMW X3 (G01, 2018–Now) – B47D20 or B48B20",
    description:
      'Open the hood and look at the front left of the engine (passenger side). The code is on a white label near the timing cover. For diesel models, confirm "B47D20"; petrol models show "B48B20".',
    imageFileName: "/bmw/how-to-find-your-engine-code/b47.jpg",
    altText:
      "BMW G01 X3 engine code location for B47D20 and B48B20 – label near timing cover – UK registration model",
  },
  {
    id: "e46-m54",
    title: "BMW 320i (E46, 2000–2005) – M54 Engine",
    description:
      'The engine code is cast into the front of the cylinder head, near the thermostat housing. Look for "M54B22" or "M54B30".',
    imageFileName: "/bmw/how-to-find-your-engine-code/m54.jpg",
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
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
      {/* <Card className="p-8 border-border bg-card"> */}
      {/*   <div className="space-y-6"> */}
      {/*     <div className="flex items-center gap-3"> */}
      {/*       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"> */}
      {/*         <Search className="h-5 w-5" /> */}
      {/*       </div> */}
      {/*       <h3 className="text-2xl font-semibold text-foreground"> */}
      {/*         1. Engine Bay Sticker or Cast Marking */}
      {/*       </h3> */}
      {/*     </div> */}
      {/*     <p className="text-muted-foreground leading-relaxed"> */}
      {/*       The most reliable method. The engine code is stamped or labeled */}
      {/*       directly on the engine block or cover. */}
      {/*     </p> */}
      {/**/}
      {/* Model-Specific Guides */}
      {/*     <div className="space-y-4"> */}
      {/*       {modelGuides.map((guide) => ( */}
      {/*         <Collapsible */}
      {/*           key={guide.id} */}
      {/*           open={openSections.includes(guide.id)} */}
      {/*           onOpenChange={() => toggleSection(guide.id)} */}
      {/*         > */}
      {/*           <CollapsibleTrigger className="w-full"> */}
      {/*             <Card className="p-4 hover:bg-accent/50 transition-colors cursor-pointer"> */}
      {/*               <div className="flex items-center justify-between"> */}
      {/*                 <h4 className="text-lg font-medium text-foreground text-left"> */}
      {/*                   {guide.title} */}
      {/*                 </h4> */}
      {/*                 <ChevronDown */}
      {/*                   className={`h-5 w-5 text-muted-foreground transition-transform ${ */}
      {/*                     openSections.includes(guide.id) ? "rotate-180" : "" */}
      {/*                   }`} */}
      {/*                 /> */}
      {/*               </div> */}
      {/*             </Card> */}
      {/*           </CollapsibleTrigger> */}
      {/*           <CollapsibleContent className="mt-4"> */}
      {/*             <Card className="p-6 bg-muted/30 border-border"> */}
      {/*               <div className="space-y-4"> */}
      {/*                 <p className="text-muted-foreground leading-relaxed"> */}
      {/*                   {guide.description} */}
      {/*                 </p> */}
      {/**/}
      {/* Image Placeholder */}
      {/*                 <div className="bg-muted border-2 border-dashed border-border rounded-lg p-8 text-center"> */}
      {/*                   <div className="text-muted-foreground space-y-2"> */}
      {/*                     <div className="text-sm font-medium"> */}
      {/*                       Image: {guide.imageFilename} */}
      {/*                     </div> */}
      {/*                     <div className="text-xs italic">{guide.altText}</div> */}
      {/*                   </div> */}
      {/*                 </div> */}
      {/*               </div> */}
      {/*             </Card> */}
      {/*           </CollapsibleContent> */}
      {/*         </Collapsible> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </Card> */}
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

          {/* 2x2 Grid for Accordions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Left Column - First Two Accordions */}
            <div className="space-y-4">
              {modelGuides.slice(0, 2).map((guide) => (
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
                        {/* <Image */}
                        {/*   src={guide.imageFileName} */}
                        {/*   alt={guide.altText} */}
                        {/*   width={0} */}
                        {/*   height={0} */}
                        {/*   sizes="100%" */}
                        {/*   className="w-full rounded-xl" */}
                        {/* /> */}
                        <ImageDialog
                          src={guide.imageFileName}
                          alt={guide.altText}
                          className="h-auto"
                          buttonColor="black"
                        />
                        {/* <Dialog> */}
                        {/*   <DialogTrigger asChild> */}
                        {/*     <Image */}
                        {/*       src={guide.imageFileName} */}
                        {/*       alt={guide.altText} */}
                        {/*       width={200} // thumbnail size */}
                        {/*       height={200} */}
                        {/*       className="w-full object-contain rounded-xl cursor-pointer" */}
                        {/*     /> */}
                        {/*   </DialogTrigger> */}
                        {/*   <DialogContent */}
                        {/*     showCloseButton={false} */}
                        {/*     className="p-0 bg-transparent border-0 border-transparent" */}
                        {/*   > */}
                        {/*     <DialogTitle className="hidden"></DialogTitle> */}
                        {/*     <Image */}
                        {/*       src={guide.imageFileName} */}
                        {/*       alt={guide.altText} */}
                        {/*       width={0} // thumbnail size */}
                        {/*       height={0} */}
                        {/*       sizes="100%" */}
                        {/*       className="w-full h-auto rounded-xl" */}
                        {/*     /> */}
                        {/*   </DialogContent> */}
                        {/* </Dialog> */}
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            {/* Right Column - Last Two Accordions */}
            <div className="space-y-4">
              {modelGuides.slice(2, 4).map((guide) => (
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

                        <ImageDialog
                          src={guide.imageFileName}
                          alt={guide.altText}
                          className="h-auto"
                          buttonColor="black"
                        />
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

            <Image
              src={`/bmw/how-to-find-your-engine-code/v5c.jpg`}
              alt="BMW Engine Timeline"
              width={0}
              height={0}
              sizes="100%"
              className="w-full rounded-xl"
            />

            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
              <AlertDescription className="text-sm text-muted-foreground inline">
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
                3. Decode Your VIN
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
              <Image
                src={`/bmw/how-to-find-your-engine-code/decode.webp`}
                alt="BMW Engine Timeline"
                width={0}
                height={0}
                sizes="100%"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </Card>
      </div>
      {/* Source Disclaimer */}
      <DisclaimerCard>
        Engine code locations per{" "}
        <Link
          href="https://www.bmw-techinfo.com/document/A15001"
          rel="noreferrer noopener"
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          BMW TIS Document A15001 – Vehicle Identification
          <ExternalLink className="h-3 w-3" />
        </Link>
        . V5C field definitions from{" "}
        <Link
          href="https://www.gov.uk/get-vehicle-information-from-dvla"
          rel="noreferrer noopener"
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          DVLA Guide to Vehicle Registration
          <ExternalLink className="h-3 w-3" />
        </Link>
        . VIN structure compliant with{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
          rel="noreferrer noopener"
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary underline underline-offset-4 transition-colors"
        >
          EU Regulation (EC) No 715/2007, Article 7
          <ExternalLink className="h-3 w-3" />
        </Link>
        .
      </DisclaimerCard>
    </Container>
  );
}
