import { JSX, ReactNode } from "react"; // Import ReactNode
import { EngineSpecsTable } from "./EngineSpecsTable";
import Container from "@/components/Container";
import { H1, SH, P } from "@/components/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wrench, Settings } from "lucide-react";

interface DynamicSectionProps {
  title: string;
  data: AdditionalInfoBlock;
  icon: ReactNode; // Accept an icon component
}

const DynamicSection = ({ title, data, icon }: DynamicSectionProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground flex items-center gap-2">
        {icon} {/* Use the passed icon */}
        {title}
      </h3>
      <div className="space-y-3 ml-6">
        {Object.entries(data).map(([key, value]) => {
          // Determine how to render based on the value type
          let content: ReactNode;

          if (Array.isArray(value)) {
            // If it's an array (like visualCues), render as a list
            content = (
              <ul className="list-disc pl-5 space-y-1">
                {value.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            );
          } else {
            // If it's a string, render it directly (potentially with a label)
            // You might want to format keys like 'location' or 'evidence' differently
            // For now, we'll just display the value, assuming the key is a label if needed contextually
            // Or, render key: value if key seems like a label (e.g., not 'evidence')
            // A simple heuristic: if key is 'evidence', treat value as standalone text.
            // Otherwise, format as "Key: Value" or just "Value" based on your data structure preference.
            // Let's assume the key is descriptive enough or value contains the full text.
            content = <span className="text-foreground">{value}</span>;
          }

          return (
            <div key={key} className="p-3 rounded-lg bg-muted">
              {/* Optional: Display the key as a label if it's informative */}
              {/* Example heuristic: Show key if it's not 'evidence' */}
              {/* Adjust this logic based on your actual data structure */}
              {/* {!key.toLowerCase().includes('evidence') && ( 
                <p className="font-medium text-foreground mb-1">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                </p>
              )} */}
              {/* For simplicity, just render the content */}
              <div className="font-medium text-foreground">
                {/* If key looks like a label, show it */}
                {key.toLowerCase() !== "evidence" &&
                key.toLowerCase() !== "issue" &&
                key.toLowerCase() !== "recommendation" ? (
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                ) : null}
                {/* Add space if a label was shown */}
                {key.toLowerCase() !== "evidence" &&
                key.toLowerCase() !== "issue" &&
                key.toLowerCase() !== "recommendation"
                  ? " "
                  : ""}
                {content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// --- End Helper Component ---

const CompatibleModels = ({
  engine,
  description,
  compatibleModels,
  guidanceTitle,
  guidanceText,
  // Use destructuring with rest to capture dynamic properties
  ...dynamicSections
}: CompatibleModelsProps): JSX.Element => {
  // Known fixed property keys - these will NOT be rendered dynamically by the loop
  const fixedKeys: (keyof CompatibleModelsProps)[] = [
    "description",
    "compatibleModels",
    "guidanceTitle",
    "guidanceText",
  ];

  // Filter out the fixed keys to get only the dynamic sections
  const dynamicEntries = Object.entries(dynamicSections).filter(
    // Type assertion needed because keyof CompatibleModelsProps includes string index signature
    ([key]) => !fixedKeys.includes(key as keyof CompatibleModelsProps),
  );

  return (
    <Container>
      <H1>{engine.toUpperCase()} Compatible Models</H1>
      <SH>{description}</SH>
      <EngineSpecsTable data={compatibleModels} tableType="compatible-models" />

      {/* === GUIDANCE CARD === */}
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

          {/* Dynamically Render Sections */}
          {dynamicEntries.map(([sectionKey, sectionData]) => {
            // Type guard to ensure we are dealing with an AdditionalInfoBlock
            if (
              sectionData &&
              typeof sectionData === "object" &&
              !Array.isArray(sectionData) // Ensure it's not TableData (array)
            ) {
              // Determine icon based on section name (you can add more mappings)
              let iconComponent: ReactNode = <Settings className="h-4 w-4" />; // Default icon
              if (sectionKey.toLowerCase().includes("identification")) {
                iconComponent = <Wrench className="h-4 w-4" />;
              } else if (
                sectionKey.toLowerCase().includes("tensioner") ||
                sectionKey.toLowerCase().includes("timing")
              ) {
                iconComponent = <Settings className="h-4 w-4" />;
              } // Add more conditions as needed

              // Format the section title (e.g., camelCase/PascalCase to spaced Title Case)
              const formattedTitle = sectionKey
                .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
                .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
                .trim();

              return (
                <DynamicSection
                  key={sectionKey}
                  title={formattedTitle}
                  data={sectionData}
                  icon={iconComponent}
                />
              );
            }
            // Optionally handle cases where sectionData is not an object (shouldn't happen with current interface)
            return null;
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CompatibleModels;
