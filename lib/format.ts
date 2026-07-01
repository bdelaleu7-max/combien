const full = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });
const oneDp = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });

export const formatEUR = (value: number): string => `${full.format(value)} €`;

export const formatShort = (value: number): string => {
  if (value >= 1_000_000) return `${oneDp.format(value / 1_000_000)} M €`;
  if (value >= 1_000) return `${oneDp.format(value / 1_000)} k €`;
  return formatEUR(value);
};
