import { Skeleton } from "@app/ui/components/skeleton";

interface SkeletonLoaderProps {
  assetType: string;
}

export function SkeletonLoader({ assetType }: SkeletonLoaderProps) {
  // Return different skeleton layouts based on asset type
  switch (assetType) {
    default:
      return <DefaultSkeleton />;
  }
}

function DefaultSkeleton() {
  return <Skeleton variant="rounded" className="h-40" />; // Default skeleton layout
}
