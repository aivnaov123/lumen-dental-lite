import type { ServiceIconName } from "@/types";
import { SERVICE_ICON_PATHS } from "./utils/service-icon-paths";

export function ServiceIcon({ icon, className = "size-6" }: { icon: ServiceIconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {SERVICE_ICON_PATHS[icon]}
    </svg>
  );
}
