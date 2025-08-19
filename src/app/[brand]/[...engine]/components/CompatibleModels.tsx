import { JSX, ReactNode } from "react";
import { EngineSpecsTable } from "./EngineSpecsTable";
import Container from "@/components/Container";
import { H1, SH, P } from "@/components/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wrench, Settings, Search, Info } from "lucide-react";

interface DynamicSectionProps {
  title: string;
  data: Record<string, string | string[]>;
  icon: ReactNode;
}

const DynamicSection = ({ title, data, icon }: DynamicSectionProps) => {
  return (
    <div className="space-y-4 border-l-2 border-border pl-4 my-4">
      <h3 className="font-semibold text-foreground flex items-center gap-2 text-lg">
        {icon}
        {title}
      </h3>

      <div className="space-y-3 ml-4">
        {Object.entries(data).map(([propertyKey, value]) => {
          // Format the property key for display (convert camelCase to Title Case)
          const formattedKey = propertyKey
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())
            .trim();

          return (
            <div key={propertyKey} className="my-2">
              <h4 className="font-medium text-foreground inline">
                {formattedKey}:
              </h4>

              {Array.isArray(value) ? (
                value.length > 1 ? (
                  <ul className="list-disc pl-6 space-y-1 mt-1 inline-block w-full">
                    {value.map((item, index) => (
                      <li key={index} className="text-foreground text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-foreground text-sm ml-2 inline">
                    {value[0]}
                  </span>
                )
              ) : (
                <span className="text-foreground text-sm ml-2 inline">
                  {value}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CompatibleModels = ({
  engine,
  description,
  compatibleModels,
  guidanceTitle,
  guidanceText,
  extraNotes,
}: CompatibleModelsProps): JSX.Element => {
  const getIcon = (key: string) => {
    const keyLower = key.toLowerCase();
    if (keyLower.includes("identification"))
      return <Search className="h-5 w-5" />;
    if (keyLower.includes("compatibility"))
      return <Settings className="h-5 w-5" />;
    if (keyLower.includes("tensioner") || keyLower.includes("upgrade"))
      return <Wrench className="h-5 w-5" />;
    return <Info className="h-5 w-5" />;
  };

  return (
    <Container>
      <H1>{engine.toUpperCase()} Compatible Models</H1>
      <SH dangerouslySetInnerHTML={{ __html: description }} />
      <EngineSpecsTable data={compatibleModels} tableType="compatible-models" />

      <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-xl text-foreground">
              {guidanceTitle}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <P>{guidanceText}</P>

          {extraNotes?.map((note) => {
            // Extract the key and the rest of the properties
            const { key, ...data } = note;

            return (
              <DynamicSection
                key={key}
                title={key}
                data={data}
                icon={getIcon(key)}
              />
            );
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CompatibleModels;
