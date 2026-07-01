import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ListState {
  items: Record<number, number>;
  add: (id: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
}

export const useList = create<ListState>()(
  persist(
    (set) => ({
      items: {},
      add: (id) =>
        set((state) => ({ items: { ...state.items, [id]: (state.items[id] ?? 0) + 1 } })),
      decrement: (id) =>
        set((state) => {
          const next = { ...state.items };
          const qty = (next[id] ?? 0) - 1;
          if (qty <= 0) delete next[id];
          else next[id] = qty;
          return { items: next };
        }),
      remove: (id) =>
        set((state) => {
          const next = { ...state.items };
          delete next[id];
          return { items: next };
        }),
      clear: () => set({ items: {} }),
    }),
    { name: "combien-list" }
  )
);
