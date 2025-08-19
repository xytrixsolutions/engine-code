import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Info } from "lucide-react";
import Link from "next/link";

const RelatedEngines = () => {
  return (
    <Card className="bg-gradient-to-br from-white via-yellow-50 to-yellow-100 dark:from-gray-900 dark:via-yellow-950/30 dark:to-yellow-900 border border-border shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400 dark:bg-yellow-500 rounded-lg">
            <Info className="h-5 w-5 text-black dark:text-black" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Related Engines
            </h3>
            <p className="text-sm text-muted-foreground">
              BMW N47D20 Series Variants
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {[
            "BMW N47D20B",
            "BMW N47D20C",
            "BMW N47D20D",
            "BMW N47D20O0",
            "BMW N47D20O1",
            "BMW N47D20U0",
            "BMW N47D20U1",
          ].map((engine, idx) => (
            <Link
              key={idx}
              href="#"
              className="flex items-center justify-between p-3 border border-border rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-950/20 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors duration-300"
            >
              <span className="text-foreground font-medium">{engine} </span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default RelatedEngines;
