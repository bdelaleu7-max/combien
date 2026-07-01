import { useMemo } from "react";
import { PRODUCTS, type Category, type Product } from "@/lib/products";

export type CategoryFilter = "Tout" | Category;

export function useCatalog(
  query: string,
  category: CategoryFilter,
  ascending: boolean
): Product[] {
  return useMemo(() => {
    const term = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => category === "Tout" || product.category === category)
      .filter((product) => {
        if (!term) return true;
        return (
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term) ||
          product.merchant.toLowerCase().includes(term)
        );
      })
      .sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
  }, [query, category, ascending]);
}
