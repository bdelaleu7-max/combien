"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Toolbar } from "@/components/Toolbar";
import { ProductCard } from "@/components/ProductCard";
import { ListPanel, type ListEntry } from "@/components/ListPanel";
import { useCatalog, type CategoryFilter } from "@/hooks/useCatalog";
import { useHydrated } from "@/hooks/useHydrated";
import { useList } from "@/lib/store";
import { PRODUCTS } from "@/lib/products";
import { formatEUR } from "@/lib/format";

export function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Tout");
  const [ascending, setAscending] = useState(true);

  const hydrated = useHydrated();
  const items = useList((state) => state.items);
  const add = useList((state) => state.add);
  const decrement = useList((state) => state.decrement);
  const remove = useList((state) => state.remove);

  const results = useCatalog(query, category, ascending);

  const entries = useMemo<ListEntry[]>(
    () =>
      Object.entries(items)
        .map(([id, quantity]) => {
          const product = PRODUCTS.find((candidate) => candidate.id === Number(id));
          return product ? { product, quantity } : null;
        })
        .filter((entry): entry is ListEntry => entry !== null),
    [items]
  );

  const total = useMemo(
    () => entries.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0),
    [entries]
  );

  const count = entries.reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <>
      <Header query={query} onQuery={setQuery} total={total} hydrated={hydrated} />

      <main className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-7 px-5 pb-32 pt-6 lg:grid-cols-[1fr_320px]">
        <section>
          <Toolbar
            category={category}
            onCategory={setCategory}
            ascending={ascending}
            onToggleSort={() => setAscending((value) => !value)}
            resultCount={results.length}
          />

          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-line2 px-[18px] py-9 text-center text-[13px] text-ink3">
              Rien trouvé pour « {query} ». Essaie un autre terme ou change de catégorie.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] sm:gap-4">
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={hydrated ? items[product.id] ?? 0 : 0}
                  onAdd={() => add(product.id)}
                  onDecrement={() => decrement(product.id)}
                />
              ))}
            </div>
          )}
        </section>

        <ListPanel entries={entries} total={total} onRemove={remove} hydrated={hydrated} />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between bg-ink px-5 py-3.5 text-white shadow-[0_-4px_20px_rgba(0,0,0,.15)] lg:hidden">
        <span className="text-sm">
          {hydrated ? `${count} article${count > 1 ? "s" : ""}` : "—"}
        </span>
        <span className="num font-display text-2xl font-semibold">
          {hydrated ? formatEUR(total) : "—"}
        </span>
      </div>

      <p className="mx-auto max-w-[1200px] px-5 pb-10 text-xs leading-relaxed text-ink3">
        Prototype · données d&apos;exemple. En production, le catalogue est alimenté par des flux
        d&apos;affiliation (Amazon PA-API, AliExpress, Jumia, Awin) qui fournissent prix, image
        officielle et lien d&apos;achat. Le bouton « voir le produit » devient ton lien affilié.
      </p>
    </>
  );
}
