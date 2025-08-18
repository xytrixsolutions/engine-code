"use client";

import { Info } from "lucide-react";
import { useRef } from "react";

interface SourceInfoButtonProps {
  cellValue: string;
  dialogId: string;
  label: string;
}

export function SourceInfoButton({
  cellValue,
  dialogId,
  label,
}: SourceInfoButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          openDialog();
        }}
        aria-label={label}
        className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        <Info className="h-5 w-5 mx-auto" />
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        className="rounded-lg shadow-xl border border-border bg-background p-0 w-[90vw] max-w-md"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">
              Source Information
            </h3>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="py-2">
            <p className="text-foreground break-words">{cellValue}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={closeDialog}
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
