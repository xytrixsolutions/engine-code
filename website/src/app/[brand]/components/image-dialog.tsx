import { X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/app/lib/utils";

interface ImageDialogProps {
  src: string;
  alt: string;
  thumbWidth?: number;
  thumbHeight?: number;
  className?: string;
  buttonColor?: "black" | "white";
  fill?: boolean;
}

export function ImageDialog({
  src,
  alt,
  thumbWidth = 200,
  thumbHeight = 200,
  className,
  buttonColor = "white",
  fill = false, // Default to false for backward compatibility
}: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          alt={alt}
          {...(!fill && { width: thumbWidth, height: thumbHeight })}
          fill={fill}
          sizes="100%"
          className={cn("w-full h-48 object-cover rounded-xl", className)}
        />
      </DialogTrigger>
      <DialogContent className="max-w-max p-0" showCloseButton={false}>
        <DialogTitle hidden />
        <DialogClose asChild>
          <button
            type="button"
            className={cn("absolute top-2 right-2 bg-transparent transition", {
              "text-white/60 hover:text-white": buttonColor === "white",
              "text-black/60 hover:text-black": buttonColor === "black",
            })}
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
