import { AlertCircle } from "lucide-react";
import { JSX } from "react";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { Card, CardContent } from "../../../components/ui/card";
import Container from "../../../components/Container";
import { TableData } from "../types";

const CompatibleModels = ({
  compatibleModels,
}: {
  compatibleModels: TableData;
}): JSX.Element => {
  return (
    <Container>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-relaxed text-center mb-6">
        N47D20A Compatible Models
      </h1>
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-center">
        The N47D20A was shared across BMW&apos;s E8x/E9x platforms with
        longitudinal mounting, and licensed to Toyota for transverse
        applications in European markets. Key partnerships included technology
        exchange agreements allowing Toyota&apos;s 2.0 D-4D engines to utilize
        BMW&apos;s injection architecture. Platform-specific adaptations
        occurred: E60 5 Series models used reinforced engine mounts, while E87 1
        Series variants featured shortened intake paths. Post-facelift E90 LCIs
        (2010+) received N47TU variants with dual-mass flywheel revisions,
        creating interchange limitations with pre-LCI models.
      </p>
      <EngineSpecsTable data={compatibleModels} />
      <Card
        className="mt-12 rounded-xl shadow-lg border bg-card border-border
             relative overflow-hidden"
      >
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
                Identification Guidance:
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Locate the engine code stamped vertically on the right-side
                engine block near the oil filter housing (BMW TIS A24890). The
                7th VIN digit indicates engine family (&apos;D&apos; for N47
                series). Pre-2009 models have silver valve covers with black
                plastic timing covers; post-2009 units use black valve covers.
                Critical differentiation from N47N: Original N47D20A has Bosch
                EDC17CP09 ECU with round diagnostic port under hood, while N47N
                uses EDC17C49 with trapezoidal port. Service parts require
                production date verification - timing kits for engines before
                03/2009 are incompatible with later units due to guide rail
                redesign (BMW SIB 12 03 15).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Related Engines</strong>: For other variants (e.g.,
                N47N, N47TÜ) or full engine listings, visit the [BMW
                engines](/bmw) page.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CompatibleModels;
