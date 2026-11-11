import type { Content } from "@/content";

/** "All" plus each distinct specialty (first word before " &"). */
export const teamFilters = ({ copy, doctors }: Pick<Content, "copy" | "doctors">) => [copy.team.allFilter, ...Array.from(new Set(doctors.map((d) => d.specialty.split(" &")[0])))];
