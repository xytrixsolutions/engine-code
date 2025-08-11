import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";
import { FAQItem } from "../types";
import Container from "@/components/Container";

const FAQs = ({ faqData }: { faqData: FAQItem[] }): JSX.Element => {
  return (
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, and
          policies.
        </p>
      </div>

      <div className="space-y-6">
        {faqData.map((item, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className="mt-12 text-center"> */}
      {/*   <p className="text-muted-foreground mb-4"> */}
      {/*     {"Didn't find what you're looking for?"} */}
      {/*   </p> */}
      {/*   <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
      {/*     <a */}
      {/*       href="#contact" */}
      {/*       className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors" */}
      {/*     > */}
      {/*       Contact Support */}
      {/*     </a> */}
      {/*     <a */}
      {/*       href="#help" */}
      {/*       className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors" */}
      {/*     > */}
      {/*       Visit Help Center */}
      {/*     </a> */}
      {/*   </div> */}
      {/* </div> */}
    </Container>
  );
};

export default FAQs;
