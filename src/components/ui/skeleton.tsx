import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-2xl bg-[linear-gradient(110deg,#f5f3ef,45%,#ffffff,55%,#f5f3ef)] bg-[length:200%_100%]",
        className,
      )}
      {...props}
    />
  );
}
