export type Issue = {
  title: string;
  cause: string;
  fix: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
// Generic type so it works with any table data
export type TableCellValue = string | number | null | undefined;

export interface TableRowData {
  [key: string]: TableCellValue;
}

export type TableData = TableRowData[];

export interface FAQItem {
  question: string;
  answer: string;
}
