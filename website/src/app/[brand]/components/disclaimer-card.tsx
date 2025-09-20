import { Info } from "lucide-react";
import type { JSX, ReactNode } from "react";
import { Card } from "@/components/ui/card";

const DisclaimerCard = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Card className="p-3 bg-muted/30 border-border">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Info className="w-4 h-4" />
        <p className="text-left leading-relaxed">{children}</p>
      </div>
    </Card>
  );
};

export default DisclaimerCard;
