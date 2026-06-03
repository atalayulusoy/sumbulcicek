import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container-edge space-y-8 py-10">
      <Skeleton className="h-[420px] rounded-[2.4rem]" />
      <div className="grid gap-5 md:grid-cols-3">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  );
}
