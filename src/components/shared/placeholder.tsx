import { cn } from "@/lib/utils";

/** Grey box used wherever the clinic should drop in its own photo. */
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("grid place-items-center bg-[#d7e6e4] text-center text-sm font-semibold text-[#4f6f6c] dark:bg-[#1c3235] dark:text-[#8fb3ae]", className)}>
      [{label}]
    </div>
  );
}
