# Combien.

Moteur de découverte de prix : cherche n'importe quel objet, vois son prix réel,
ajoute-le à ta liste, vois le total grimper, et clique pour aller l'acheter.

## Démarrer (sur ta machine)

Il te faut **Node.js 18+**. Vérifie : `node -v`

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Stack

- Next.js 14 (App Router) + TypeScript strict
- Tailwind CSS (design tokens dans `app/globals.css`)
- Zustand (liste persistée en localStorage)
- lucide-react (icônes)

## Structure

```
app/            layout, page, styles globaux
components/      Header, Toolbar, ProductCard, ListPanel, Catalog
hooks/          useCatalog (filtre/tri), useHydrated
lib/            products (données + types), store (zustand), format
```

## Prochaines étapes

1. **Brancher un vrai flux produits.** Crée `app/api/search/route.ts` qui interroge
   un flux d'affiliation (Amazon PA-API, AliExpress, Jumia, Awin) et renvoie
   `{ name, price, image, url }`. Remplace `lib/products.ts` par cet appel via React Query.
2. **Liens affiliés.** Le champ `url` de chaque produit devient ton lien de tracking.
3. **Tier « extrême ».** Garde une liste curée à la main (jets, îles, œuvres) en plus du flux.
4. **SEO.** Une page par figure / par catégorie pour capter le trafic francophone.

> Les données actuelles sont des exemples. Les prix sont indicatifs.
