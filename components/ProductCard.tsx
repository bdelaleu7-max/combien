"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { CATEGORY_ICON, CATEGORY_IMAGE, type Product } from "@/lib/products";
import { formatEUR } from "@/lib/format";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onDecrement: () => void;
}

export function ProductCard({ product, quantity, onAdd, onDecrement }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = CATEGORY_ICON[product.category];
  const imageSrc = product.image ?? CATEGORY_IMAGE[product.category];
  const showImage = Boolean(imageSrc) && !imageFailed;

  return (
    <article className="card">
      <div className="thumb">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={product.name}
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <Icon size={40} strokeWidth={1.4} />
        )}
        <span className="absolute left-2.5 top-2.5 rounded-full border border-line bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink2 backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3.5">
        <h3 className="min-h-[2.6em] text-sm font-semibold leading-snug">{product.name}</h3>
        <p className="text-xs text-ink3">{product.merchant}</p>
        <p className="num mt-1.5 font-display text-[21px] font-semibold">{formatEUR(product.price)}</p>

        <div className="mt-2.5 flex gap-2">
          {quantity === 0 ? (
            <button className="btn btn-primary" onClick={onAdd}>
              <Plus size={16} /> Ajouter
            </button>
          ) : (
            <div className="stepper">
              <button onClick={onDecrement} aria-label="Retirer un">
                <Minus size={15} />
              </button>
              <span className="num text-sm font-bold">{quantity}</span>
              <button onClick={onAdd} aria-label="Ajouter un">
                <Plus size={15} />
              </button>
            </div>
          )}
          <a
            className="btn btn-ghost"
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Voir sur ${product.merchant}`}
            aria-label={`Voir sur ${product.merchant}`}
          >
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
