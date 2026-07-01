"use client";

import { X } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatEUR, formatShort } from "@/lib/format";

export interface ListEntry {
  product: Product;
  quantity: number;
}

interface ListPanelProps {
  entries: ListEntry[];
  total: number;
  onRemove: (id: number) => void;
  hydrated: boolean;
}

export function ListPanel({ entries, total, onRemove, hydrated }: ListPanelProps) {
  const count = entries.reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <aside className="sticky top-[86px] hidden overflow-hidden rounded-lg border border-line bg-surface shadow-e-1 lg:block">
      <div className="flex items-center justify-between border-b border-line px-[18px] py-4">
        <h2 className="font-display text-lg font-semibold">Ma liste</h2>
        <span className="text-xs text-ink3">
          {hydrated ? `${count} article${count > 1 ? "s" : ""}` : "—"}
        </span>
      </div>

      {!hydrated || entries.length === 0 ? (
        <p className="px-[18px] py-9 text-center text-[13px] leading-relaxed text-ink3">
          Ta liste est vide.
          <br />
          Ajoute des objets pour voir le total grimper.
        </p>
      ) : (
        <div className="max-h-[340px] overflow-auto py-1.5">
          {entries.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-2.5 px-[18px] py-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold">{product.name}</p>
                <p className="text-xs text-ink3">
                  {quantity} × {formatEUR(product.price)}
                </p>
              </div>
              <span className="num text-[13px] font-semibold">
                {formatShort(product.price * quantity)}
              </span>
              <button
                className="rounded-md p-1 text-ink3 hover:bg-line hover:text-accent-ink"
                onClick={() => onRemove(product.id)}
                aria-label={`Retirer ${product.name}`}
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-line bg-accent-soft px-[18px] py-4">
        <div className="flex items-end justify-between">
          <span className="text-[13px] font-semibold text-accent-ink">Coût total</span>
          <span className="num font-display text-3xl font-semibold text-accent-ink">
            {hydrated ? formatEUR(total) : "—"}
          </span>
        </div>
      </div>
    </aside>
  );
}
