"use client";

import { useState } from "react";
import { useContent } from "@/content/use-content";
import type { ServiceCategory } from "@/types";
import { serviceFilters, type ServiceFilter } from "./utils/constants";
import { FilterTabs } from "@/components/shared/filter-tabs";
import { ServiceCard } from "@/components/shared/service-card";

export function ServicesGrid() {
  const { copy, services } = useContent();
  const SERVICE_FILTERS = serviceFilters(copy);
  const [filter, setFilter] = useState<ServiceFilter>(SERVICE_FILTERS[0]);
  const list = filter === SERVICE_FILTERS[0] ? services : services.filter((s) => s.category === (filter as ServiceCategory));
  return (
    <div className="container-site flex flex-col gap-10 pt-10">
      <FilterTabs items={SERVICE_FILTERS} value={filter} onChange={setFilter} labels={copy.categories} />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {list.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </div>
  );
}
