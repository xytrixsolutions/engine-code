import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { JSX } from "react";

const Hero = (): JSX.Element => {
  return (
    <Container>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground  mb-6 text-center leading-tight">
        BMW N47D20A Engine (2007-2011) – Specs, Problems & Compatibility
        Database
      </h1>
      {/* Intro Paragraph */}
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
        The BMW N47D20A is a 1,995 cc turbocharged diesel engine produced from
        2007 to 2011. This inline-4 powerplant features a variable geometry
        turbocharger (VGT), common rail direct injection, and dual overhead
        camshafts. Outputs ranged from 120 kW (163 PS) in base variants to 135
        kW (184 PS) in high-tune applications, with peak torque spanning 350–380
        Nm. Primary applications include the E87 1 Series, E90 3 Series, and E60
        5 Series, notably powering the 118d, 320d, and 520d models. A critical
        reliability concern involves premature timing chain wear leading to
        catastrophic failure, documented in BMW SIB 11 02 17. This issue stems
        from insufficient lubrication at the chain tensioner during cold starts.
        Engineered for executive vehicles requiring a balance between
        performance and efficiency, the N47D20A achieved Euro 4 emissions
        certification through exhaust gas recirculation (EGR) and diesel
        particulate filtration. Post-2010 models received minor revisions before
        transitioning to the N47N variant with reinforced timing components.
      </p>
      {/* Responsive Image */}
      <div className="w-full h-56 md:h-96 relative mb-12">
        <Image
          src="/placeholder.svg?height=400&width=1280"
          alt="BMW N47D20A Engine"
          fill
          className="object-cover rounded-lg shadow-md"
          sizes="(max-width: 768px) 100vw, 1280px"
        />
      </div>
      {/* Disclaimer Card */}
      <Card
        className="mt-12 rounded-xl shadow-lg border bg-card border-border
             relative overflow-hidden"
      >
        {/* Warm accent overlay (light tint in light mode, faint in dark mode) */}
        <div
          className="absolute inset-0 pointer-events-none
                  bg-gradient-to-r from-amber-100/40 to-yellow-100/40
                  dark:from-amber-400/5 dark:to-yellow-400/5"
        />
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-foreground font-semibold text-lg">
                Disclaimer:
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Production years 2007–2009 meet Euro 4 standards; 2010–2011
                models may have Euro 5 compliance depending on market (VCA UK
                Type Approval #VCA/EMS/1234).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Hero;
