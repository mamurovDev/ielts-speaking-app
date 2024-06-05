import { Skeleton } from '@/components/ui/skeleton';
export function CustomSkeleton() {
    return (
        <div className="flex items-center  w-full sm:h-16 md:h-24">
            <Skeleton className="ml-3 h-12 w-12 rounded-full" />
            <div className="w-full flex flex-col justify-between h-12">
                <Skeleton className="h-4 ml-3 w-[85%]" />
                <Skeleton className="h-4 ml-3 w-[65%]" />
            </div>
        </div>
    );
}