// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
//
// import { Card, CardContent } from "@/components/ui/card";
// import { FileText } from "lucide-react";
// export interface EngineSpecsTableProps {
//   data: TableData;
// }
//
// export function EngineSpecsTable({ data }: EngineSpecsTableProps) {
//   if (!data.length) return null;
//
//   const columns = Object.keys(data[0]);
//
//   return (
//     <div className="w-full my-6 mx-auto">
//       <div
//         aria-label="Desktop-Table"
//         className="rounded-2xl shadow-lg border border-border overflow-hidden hidden lg:block"
//       >
//         <Table className="w-full table-fixed">
//           <TableHeader className="bg-[#383838]">
//             <TableRow>
//               {columns.map((col) => (
//                 <TableHead
//                   key={String(col)}
//                   className="font-medium text-[#d0d0d0] px-5 break-words"
//                 >
//                   {String(col).charAt(0).toUpperCase() + String(col).slice(1)}
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//
//           <TableBody>
//             {data.map((row, rowIndex) => (
//               <TableRow
//                 key={rowIndex}
//                 className={`transition-colors ${
//                   rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"
//                 } hover:bg-muted/50`}
//               >
//                 {columns.map((col) => (
//                   <TableCell
//                     key={String(col)}
//                     className={`px-5 break-words ${
//                       col === columns[0] ? "font-medium" : ""
//                     }`}
//                   >
//                     {row[col]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       <div aria-label="Mobile Table" className="lg:hidden space-y-4 mx-auto">
//         {data.map((row, rowIndex) => {
//           const isSourceColumn =
//             columns.length > 0 &&
//             (columns[columns.length - 1].toLowerCase() === "source" ||
//               columns[columns.length - 1].toLowerCase() === "oem source");
//           const displayColumns = isSourceColumn
//             ? columns.slice(0, -1)
//             : columns;
//           // Source value if applicable
//           const sourceValue = isSourceColumn
//             ? row[columns[columns.length - 1]]
//             : null;
//
//           return (
//             <Card
//               key={rowIndex}
//               className={rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"}
//             >
//               <CardContent className="p-4">
//                 <div className="space-y-2">
//                   {displayColumns.map((col) => (
//                     <div key={String(col)} className="flex">
//                       <div className="font-bold text-[#d0d0d0] w-1/3 truncate">
//                         {String(col).charAt(0).toUpperCase() +
//                           String(col).slice(1)}
//                         :
//                       </div>
//                       <div className="w-2/3 break-words">{row[col]}</div>
//                     </div>
//                   ))}
//
//                   {isSourceColumn && sourceValue && (
//                     <details className="mt-2 pt-2 border-t border-border">
//                       <summary className="cursor-pointer flex items-center justify-center text-primary hover:underline list-none">
//                         <FileText className="h-4 w-4 mr-1" />
//                         View Source
//                       </summary>
//                       <div className="mt-2 pl-5 text-sm text-muted-foreground break-words text-center">
//                         {sourceValue}
//                       </div>
//                     </details>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface EngineSpecsTableProps {
  data: TableData;
  tableType?: "technical-specs" | "compatible-models"; // New prop to differentiate table types
}

export function EngineSpecsTable({ data, tableType }: EngineSpecsTableProps) {
  const columns = Object.keys(data[0]);
  const [showSourcePopup, setShowSourcePopup] = useState(false);
  const [currentSource, setCurrentSource] = useState("");

  if (!data.length) {
    return null;
  }

  const isSourceColumn =
    columns.length > 0 &&
    (columns[columns.length - 1].toLowerCase() === "source" ||
      columns[columns.length - 1].toLowerCase() === "oem source");

  return (
    <div className="w-full my-6 mx-auto">
      {/* Desktop view - same for both table types */}
      <div
        aria-label="Desktop-Table"
        className="rounded-2xl shadow-lg border border-border overflow-hidden hidden lg:block"
      >
        <Table className="w-full table-fixed">
          <TableHeader className="bg-[#383838]">
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={String(col)}
                  className="font-medium text-[#d0d0d0] px-5 break-words"
                >
                  {String(col).charAt(0).toUpperCase() + String(col).slice(1)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className={`transition-colors ${
                  rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"
                } hover:bg-muted/50`}
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={String(col)}
                    className={`px-5 break-words ${
                      col === columns[0] ? "font-medium" : ""
                    }`}
                  >
                    {isSourceColumn &&
                    colIndex === columns.length - 1 &&
                    tableType === "technical-specs" ? (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          setCurrentSource(row[col] as string);
                          setShowSourcePopup(true);
                        }}
                      >
                        <Info className="h-4 w-4" />
                        <span className="sr-only">View source</span>
                      </Button>
                    ) : (
                      row[col]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view for compatible models (card view) */}
      {tableType === "compatible-models" && (
        <div aria-label="Mobile Table" className="lg:hidden space-y-4 mx-auto">
          {data.map((row, rowIndex) => {
            const displayColumns = isSourceColumn
              ? columns.slice(0, -1)
              : columns;
            const sourceValue = isSourceColumn
              ? row[columns[columns.length - 1]]
              : null;

            return (
              <Card
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {displayColumns.map((col) => (
                      <div key={String(col)} className="flex">
                        <div className="font-bold text-[#d0d0d0] w-1/3 truncate">
                          {String(col).charAt(0).toUpperCase() +
                            String(col).slice(1)}
                          :
                        </div>
                        <div className="w-2/3 break-words">{row[col]}</div>
                      </div>
                    ))}

                    {isSourceColumn && sourceValue && (
                      <details className="mt-2 pt-2 border-t border-border">
                        <summary className="cursor-pointer flex items-center justify-center text-primary hover:underline list-none">
                          <FileText className="h-4 w-4 mr-1" />
                          View Source
                        </summary>
                        <div className="mt-2 pl-5 text-sm text-muted-foreground break-words text-center">
                          {sourceValue}
                        </div>
                      </details>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Mobile view for technical specs (table-like view) */}
      {tableType === "technical-specs" && (
        <div aria-label="Mobile Table" className="lg:hidden overflow-x-auto">
          <div className="rounded-lg border border-border min-w-[600px]">
            <Table className="w-full">
              <TableHeader className="bg-[#383838]">
                <TableRow>
                  {columns.map((col) => (
                    <TableHead
                      key={String(col)}
                      className="font-medium text-[#d0d0d0] px-3 py-2 text-xs break-words"
                    >
                      {String(col).charAt(0).toUpperCase() +
                        String(col).slice(1)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className={`transition-colors ${
                      rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"
                    }`}
                  >
                    {columns.map((col, colIndex) => (
                      <TableCell
                        key={String(col)}
                        className={`px-3 py-2 text-xs break-words ${
                          col === columns[0] ? "font-medium" : ""
                        }`}
                      >
                        {isSourceColumn && colIndex === columns.length - 1 ? (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => {
                              setCurrentSource(row[col] as string);
                              setShowSourcePopup(true);
                            }}
                          >
                            <Info className="h-3 w-3" />
                            <span className="sr-only">View source</span>
                          </Button>
                        ) : (
                          row[col]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Source Popup for technical specs */}
      <Dialog open={showSourcePopup} onOpenChange={setShowSourcePopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Source Information</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground">{currentSource}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
