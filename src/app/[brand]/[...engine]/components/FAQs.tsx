import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JSX } from "react";
import Container from "@/components/Container";

const FAQs = ({
  faqData,
  brand: brandName,
  engine: engineName,
}: {
  faqData: FAQItem[];
  brand: string;
  engine: string;
}): JSX.Element => {
  const brand = brandName.toUpperCase();
  const engine = engineName.toUpperCase();
  return (
    <Container>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-relaxed text-center mb-6">
          Frequently Asked Questions about {brand} {engine}
        </h1>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-center">
          Find answers to most commonly asked questions about {brand} {engine}.
        </p>
      </div>

      <div className="space-y-2 pb-4">
        <Accordion type="single" collapsible className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-xl shadow-sm "
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQs;
