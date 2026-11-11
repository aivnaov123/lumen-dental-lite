"use client";

import { useState } from "react";
import { useContent } from "@/content/use-content";
import { teamFilters } from "./utils/constants";
import { FilterTabs } from "@/components/shared/filter-tabs";
import { DoctorCard } from "./doctor-card";

export function TeamGrid() {
  const { copy, doctors } = useContent();
  const TEAM_FILTERS = teamFilters({ copy, doctors });
  const [filter, setFilter] = useState(TEAM_FILTERS[0]);
  const list = filter === TEAM_FILTERS[0] ? doctors : doctors.filter((d) => d.specialty.startsWith(filter));
  return (
    <div className="container-site flex flex-col gap-10 pt-10">
      <FilterTabs items={TEAM_FILTERS} value={filter} onChange={setFilter} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((d) => (
          <DoctorCard key={d.slug} doctor={d} />
        ))}
      </div>
    </div>
  );
}
