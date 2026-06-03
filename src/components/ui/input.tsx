import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-2xl border border-surface-outline bg-white/80 px-4 py-2 text-sm text-foreground shadow-sm outline-none transition duration-300 placeholder:text-foreground/45 focus:border-brand/30 focus:ring-4 focus:ring-brand/10",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
