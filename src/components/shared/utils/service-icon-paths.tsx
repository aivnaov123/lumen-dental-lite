import type { ServiceIconName } from "@/types";

/** Stroke paths for each service icon (24×24 viewBox). */
export const SERVICE_ICON_PATHS: Record<ServiceIconName, React.ReactNode> = {
  implant: <><path d="M12 2v6" /><path d="M8 8h8l-1 12H9z" /><path d="M9 5h6" /></>,
  sparkles: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>,
  braces: <><path d="M4 12h16" /><path d="M6 8v8" /><path d="M10 8v8" /><path d="M14 8v8" /><path d="M18 8v8" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  veneer: <><path d="M4 6h16v12H4z" /><path d="M8 6v12" /><path d="M12 10h6" /><path d="M12 14h6" /></>,
  heart: <><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11z" /><path d="M9 10l2 2 4-4" /></>,
  root: <><path d="M12 3v18" /><path d="M7 8c0-3 10-3 10 0" /><path d="M8 13h8" /></>,
  crown: <><path d="M3 17l3-9 6 5 6-5 3 9z" /><path d="M3 20h18" /></>,
  surgery: <><path d="M12 4v16" /><path d="M4 12h16" /><circle cx="12" cy="12" r="9" /></>,
};
