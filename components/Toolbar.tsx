"use client";

import { SlidersHorizontal } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import type { CategoryFilter } from "@/hooks/useCatalog";

interface ToolbarProps {
  category: CategoryFilter;
  onCategory: (value: CategoryFilter) => void;
  ascending: boolean;
  onToggleSort: () => void;
  resultCount: number;
}

const FILTERS: CategoryFilter[] = ["Tout", ...CATEGORIES];

export function Toolbar({
  category,
  onCategory,
  ascending,
  onToggleSort,
  resultCount,
}: ToolbarProps) {
  return (
    <div className="mb-3.5">
      <div className="mb-5 flex flex-wrap items-center gap-2.5">
        <div className="flex flex-1 flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`chip ${category === filter ? "chip-on" : ""}`}
              onClick={() => onCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-1.5 rounded-sm border border-line2 bg-surface px-3 py-2 text-[13px] font-semibold text-ink2 hover:border-ink3"
          onClick={onToggleSort}
        >
          <SlidersHorizontal size={15} />
          {ascending ? "Moins cher d'abord" : "Plus cher d'abord"}
        </button>
      </div>
      <p className="text-[13px] text-ink3">
        {resultCount} résultat{resultCount > 1 ? "s" : ""}
      </p>
    </div>
  );
}
