import type React from "react";
import { cn } from "@/app/lib/utils"; // adjust path as needed

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  centerText?: boolean;
  spaceY?: 4 | 6 | 8; // single prop instead of multiple
}

const Container = ({
  children,
  centerText,
  spaceY,
  className,
  ...props
}: WrapperProps) => {
  return (
    <div
      className={cn(
        "w-11/12 md:w-10/12 2xl:w-8/12 mx-auto py-16",
        centerText && "text-center",
        spaceY && `space-y-${spaceY}`, // dynamically applied
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
