import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: string;
  align?: "left" | "center";
  link?: { label: string; href: string };
  className?: string;
};

export function SectionHeading({ kicker, title, align = "left", link, className }: Props) {
  return (
    <div className={cn("flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between", align === "center" && "sm:flex-col sm:items-center sm:text-center", className)}>
      <div className={cn("flex max-w-2xl flex-col gap-3", align === "center" && "items-center")}>
        <span className="text-[13px] font-bold uppercase tracking-[1px] text-brand">{kicker}</span>
        <h2 className="font-heading text-[32px] font-medium leading-[1.1] tracking-tight sm:text-[46px]">{title}</h2>
      </div>
      {link && (
        <Link href={link.href} className="inline-flex items-center gap-2 text-[15px] font-bold hover:text-brand">
          {link.label} <ArrowRight className="size-[18px]" />
        </Link>
      )}
    </div>
  );
}
