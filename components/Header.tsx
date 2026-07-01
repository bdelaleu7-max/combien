"use client";

import { Search, X } from "lucide-react";
import { formatShort } from "@/lib/format";

interface HeaderProps {
  query: string;
  onQuery: (value: string) => void;
  total: number;
  hydrated: boolean;
}

export function Header({ query, onQuery, total, hydrated }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-5 py-3.5">
        <span className="flex items-center gap-1.5 whitespace-nowrap font-display text-[22px] font-semibold">
          Combien<span className="text-accent">.</span>
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            className="rounded-[2px] shadow-e-1"
            aria-label="Drapeau français"
            role="img"
          >
            <rect width="22" height="15" rx="2" fill="#FFFFFF" />
            <rect width="7.33" height="15" rx="0" fill="#0B2A86" />
            <rect x="14.67" width="7.33" height="15" fill="#C8102E" />
          </svg>
        </span>

        <div className="relative min-w-0 flex-1">
          <Search size={18} className="absolute left-3 top-3 text-ink3" />
          <input
            className="field font-sans"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Cherche n'importe quoi — des chaussettes à une île privée…"
            aria-label="Rechercher un produit"
          />
          {query && (
            <button
              className="absolute right-2.5 top-2.5 rounded-md p-1 text-ink3 hover:bg-line"
              onClick={() => onQuery("")}
              aria-label="Effacer la recherche"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="hidden items-center gap-2 rounded border border-line2 bg-surface px-3.5 py-2.5 text-sm font-semibold shadow-e-1 sm:flex">
          <span className="text-ink2">Total</span>
          <span className="num text-accent">{hydrated ? formatShort(total) : "—"}</span>
        </div>
      </div>
    </header>
  );
}
