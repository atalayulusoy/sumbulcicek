import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-3xl border border-surface-outline bg-white/80 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition duration-300 placeholder:text-foreground/45 focus:border-brand/30 focus:ring-4 focus:ring-brand/10",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
