import { ExternalLink, HelpCircle } from "lucide-react";
import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DisclaimerCard from "./disclaimer-card";
import Link from "next/link";

import type { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FaqItem {
  question: string;
  answer: ReactNode;
}
const faqData: FaqItem[] = [
  {
    question: "What does a BMW engine code mean?",
    answer: (
      <>
        <p>
          A BMW engine code (e.g., N47D20A, B48B20O1) identifies the engine
          family, fuel type, displacement, and generation.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>First letter:</strong> Era (M = 1990s, N = 2000s, B = 2010s)
          </li>
          <li>
            <strong>Numbers:</strong> Displacement (47 = ~2.0L)
          </li>
          <li>
            <strong>Suffix:</strong> Variant (D20A = diesel, 2.0L, revision A)
          </li>
        </ul>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <Link
            href="https://www.bmw-techinfo.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW TIS Doc. A15001 <ExternalLink className="h-3 w-3" />
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Is BMW still making diesel engines?",
    answer: (
      <>
        <p>
          Yes, but production is declining. The B47D20 diesel engine is still
          used in the 520d, X3 xDrive20d, and X5 xDrive20d (2024 UK models).
          However, BMW plans to phase out diesel by 2030 in line with EU
          emissions targets.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Regulation (EC) No 715/2007 <ExternalLink className="h-3 w-3" />
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Which BMW engine is the most reliable?",
    answer: (
      <>
        <p>
          The <strong>B58B30</strong> (3.0L turbo) is widely regarded as BMW's
          most reliable modern engine. Older naturally aspirated engines like
          the <strong>M50B25</strong> and <strong>M60B40</strong> are also
          durable if maintained. Avoid early N20 and N47 engines due to timing
          chain and turbo issues.
        </p>
      </>
    ),
  },
  {
    question: "Do BMW engines have timing chains or belts?",
    answer: (
      <>
        <p>
          Most modern BMWs (M54 onwards) use <strong>timing chains</strong>.
          Exceptions include the M43 (belt). The N47 has a rear-mounted chain
          prone to failure if oil changes are delayed. B-series engines (B48,
          B58) have improved chain designs.
        </p>
      </>
    ),
  },
  {
    question: "Can I swap a N47 for a B47 engine?",
    answer: (
      <>
        <p>
          Technically possible, but complex. Requires ECU remapping, wiring
          harness changes, and mount modifications. Not recommended without
          expert tuning. Ensure compliance with UK emissions rules.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <Link
            href="https://www.gov.uk/vehicle-approval"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            DVLA Vehicle Approval <ExternalLink className="h-3 w-3" />
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Where is the engine code located on a BMW 320d F30?",
    answer: (
      <>
        <p>
          On the N47 or B47 engine, the code is stamped on the{" "}
          <strong>front timing cover</strong> or on a label near the camshaft
          housing. Also check the <strong>V5C logbook</strong> under "Engine
          Number".
        </p>
      </>
    ),
  },
  {
    question: "How do I read my V5C to find the engine code?",
    answer: (
      <>
        <p>
          On the UK V5C registration document, look for the{" "}
          <strong>"Engine Number"</strong> field (not VIN). This matches the
          engine code (e.g., N47D20A). If the engine was replaced, this may not
          reflect the current unit.
        </p>
      </>
    ),
  },
  {
    question: "Are N47 engines reliable?",
    answer: (
      <>
        <p>
          No. The N47 diesel engine (2007–2015) is known for{" "}
          <strong>timing chain failure</strong>, turbo spring breakage, and EGR
          clogging. BMW issued Service Bulletin <strong>SI B11 03 08</strong>{" "}
          recommending replacement at 100,000 km. High-risk for UK high-mileage
          drivers.
        </p>
      </>
    ),
  },
  {
    question: "What's the difference between B47 and B48?",
    answer: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>B47:</strong> 2.0L diesel (B47D20) – used in 320d, X3
            xDrive20d
          </li>
          <li>
            <strong>B48:</strong> 2.0L petrol (B48B20) – used in 330i, Z4
          </li>
        </ul>
        <p className="mt-2">
          Both are modular engines, but B48 has higher reliability. B47 early
          models had chain issues.
        </p>
      </>
    ),
  },
  {
    question: "Can I use a BMW engine code to order parts?",
    answer: (
      <>
        <p>
          Yes. The engine code (e.g., B58B30A) is required for ordering correct
          parts (ECU, turbo, injectors). Using VIN alone can lead to errors.
          Always verify with the physical engine code.
        </p>
      </>
    ),
  },
  {
    question: "Does engine code affect insurance?",
    answer: (
      <>
        <p>
          Yes. High-performance engines (S58, N55) or high-failure engines (N47)
          can increase premiums. Insurers use engine type to assess risk. Always
          declare correct engine code.
        </p>
      </>
    ),
  },
  {
    question: "How long does a B58 engine last?",
    answer: (
      <>
        <p>
          The B58 (2015–present) is designed for <strong>200,000+ miles</strong>{" "}
          with proper maintenance. Known for forged internals and closed-deck
          block. Water pump is a common service item (~100k miles).
        </p>
      </>
    ),
  },
  {
    question: "Are BMW B-series engines interference engines?",
    answer: (
      <>
        <p>
          Yes. All B-series engines (B38, B48, B58) are{" "}
          <strong>interference engines</strong>. If the timing chain fails,
          internal damage is likely. Immediate towing required.
        </p>
      </>
    ),
  },
  {
    question: "What BMW engines are affected by HPFP failure?",
    answer: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>N54B30:</strong> High failure rate (Siemens HPFP)
          </li>
          <li>
            <strong>N20B20:</strong> Over-stressed pump
          </li>
          <li>
            <strong>B48B20:</strong> Improved but still a wear item
          </li>
        </ul>
        <p className="mt-2">
          BMW extended warranty on N54 via{" "}
          <strong>Warranty Bulletin WB-12-07-01</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Can a BMW engine be replaced with a different code?",
    answer: (
      <>
        <p>
          Yes, but must be declared to DVLA. Changing engine code (e.g., petrol
          to diesel) may affect MoT, insurance, and emissions compliance.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <Link
            href="https://www.gov.uk/change-engine-mot"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            DVLA guidelines <ExternalLink className="h-3 w-3" />
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Do hybrid BMWs use B-series engines?",
    answer: (
      <>
        <p>
          Yes. The <strong>330e</strong>, <strong>530e</strong>, and{" "}
          <strong>X5 xDrive45e</strong> use the B48B20 petrol engine paired with
          an electric motor. The engine is de-tuned for hybrid efficiency.
        </p>
      </>
    ),
  },
  {
    question: "Is the B37 engine reliable in Mini models?",
    answer: (
      <>
        <p>
          The B37C15A (1.5L diesel) is generally reliable but prone to{" "}
          <strong>EGR and DPF issues</strong> in urban driving. Common in Mini
          One D (F56). Service interval: 12,000 miles in UK conditions.
        </p>
      </>
    ),
  },
  {
    question: "How do I decode a BMW VIN to find the engine?",
    answer: (
      <>
        <p>
          Positions 4–7 of the VIN indicate engine type. Example:{" "}
          <code>WBA1A1A1...</code> → "1A1A" = N47D20A.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <Link
            href="https://www.bmw-techinfo.com/document/A15001"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW TIS Doc. A15001 – VIN Structure{" "}
            <ExternalLink className="h-3 w-3" />
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Are old BMW engines better than new ones?",
    answer: (
      <>
        <p>
          Some are. M50, M60, and M54 engines are simpler and more durable than
          early N-series. However, B58 and B48 offer better efficiency and
          emissions compliance under Euro 6.
        </p>
      </>
    ),
  },
  {
    question: "Where can I find official BMW engine specs?",
    answer: (
      <>
        <p>
          Use{" "}
          <Link
            href="https://www.bmw-techinfo.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW TIS (Technical Information System){" "}
            <ExternalLink className="h-3 w-3" />
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.bmwgroup.com/en.html"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            BMW Group Product Reports <ExternalLink className="h-3 w-3" />
          </Link>
          . Public data also in EU type-approval documents.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            CELEX:32007R0715 <ExternalLink className="h-3 w-3" />
          </Link>
        </p>
      </>
    ),
  },
];

export function FrequentlyAskedQuestions() {
  return (
    <Container spaceY={4}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance flex items-center justify-center gap-2">
          <HelpCircle className="h-8 w-8" />
          BMW Engine Codes: Frequently Asked Questions (UK Owners)
        </h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Answers to the most common technical questions from UK BMW owners,
          based on official BMW documentation, DVLA records, and EU vehicle
          regulations.
        </p>
      </div>

      {/* FAQ Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>
            20 High-Intent, Authority-Building Questions for UK BMW Owners &
            Enthusiasts
          </CardTitle>
          <CardDescription>
            Comprehensive answers covering engine reliability, V5C
            documentation, timing systems, part compatibility, insurance
            implications, and MoT requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <ScrollArea className="h-[365px]">
              {faqData.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline cursor-pointer">
                    <p className="text-lg">{faq.question}</p>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm space-y-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </ScrollArea>
          </Accordion>
        </CardContent>
      </Card>

      {/* Source Disclaimer */}
      <DisclaimerCard>
        <Link
          href="https://www.bmwgroup.com/en.html"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary hover:underline inline-flex items-center gap-1"
        >
          BMW Group technical documentation <ExternalLink className="h-3 w-3" />
        </Link>
        ,{" "}
        <Link
          href="https://www.gov.uk"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary hover:underline inline-flex items-center gap-1"
        >
          UK government vehicle standards <ExternalLink className="h-3 w-3" />
        </Link>
        , and{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary hover:underline inline-flex items-center gap-1"
        >
          EU Regulation (EC) No 715/2007 <ExternalLink className="h-3 w-3" />
        </Link>
        .
      </DisclaimerCard>
    </Container>
  );
}
