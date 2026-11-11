import { Link } from "@/i18n/navigation";
import { clinic } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex shrink-0 items-center gap-3 text-foreground ${className}`}>
      <span className="grid size-9 place-items-center rounded-[10px] bg-brand text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3c-2.5 0-4 1.5-6 1.5S3 6 3 9c0 4 2 7 3 11 .5 2 2 2 2.5 0 .5-2 1-4 3.5-4s3 2 3.5 4c.5 2 2 2 2.5 0 1-4 3-7 3-11 0-3-1-4.5-3-4.5S14.5 3 12 3z" />
        </svg>
      </span>
      <span className="whitespace-nowrap font-heading text-2xl font-semibold tracking-tight">{clinic.name}</span>
    </Link>
  );
}
