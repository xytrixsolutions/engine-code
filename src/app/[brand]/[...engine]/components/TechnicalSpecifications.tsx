import { JSX } from "react";
import Container from "@/components/Container";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { H1, SH, P } from "@/components/Typography";
import { AlertCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecifications = ({
  engine,
  description,
  engineSpecs,
  practicalImplications,
}: TechnicalSpecsProps): JSX.Element => {
  return (
    <Container>
      <H1>{engine.toUpperCase()} Technical Specifications</H1>
      <SH>{description}</SH>
      <EngineSpecsTable data={engineSpecs} tableType="technical-specs" />
      <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
            <CardTitle className="text-xl text-foreground">
              {practicalImplications.heading}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <P>{practicalImplications.content}</P>

          {practicalImplications.dataVerificationNotes && (
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                Data Verification Notes
              </h3>
              <div className="space-y-3 ml-6">
                {Object.entries(
                  practicalImplications.dataVerificationNotes,
                ).map(([key, value]) => (
                  <div key={key} className="px-3 py-1">
                    <p className="font-medium text-foreground">
                      <strong>
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{" "}
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {practicalImplications.primarySources && (
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                Primary Sources
              </h3>
              <div className="space-y-2 ml-6">
                {practicalImplications.primarySources.map((source, index) => {
                  const urlMatch = source.match(/https?:\/\/[^\s)]+/);
                  const url = urlMatch ? urlMatch[0] : null;
                  const displayText = url
                    ? source.replace(url, "").trim()
                    : source;

                  return (
                    <div key={index} className="px-3 py-1">
                      <p className="font-medium text-foreground">
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            {displayText || url}
                            <ExternalLink className="inline h-3 w-3 flex-shrink-0" />
                          </a>
                        ) : (
                          displayText
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default TechnicalSpecifications;
