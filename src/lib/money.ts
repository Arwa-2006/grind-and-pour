/**
 * All arithmetic is done in integer piastres (1/100 EGP); pounds only appear at the edges.
 * The function names still say "cents" so the rest of the code didn't have to change.
 */
export const toCents = (pounds: number) => Math.round(pounds * 100);

/** Egyptian pounds, whole numbers: "250 EGP". */
const egp = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
export const formatCents = (cents: number) => `${egp.format(cents / 100)} EGP`;

/** Free standard shipping from 1,000 EGP (e.g. one 1 kg bag of Turkish Gold). */
export const FREE_SHIPPING_CENTS = toCents(1000);
export const PROMO_CODES: Record<string, { label: string; percentOff: number }> = {
  WELCOME10: { label: "WELCOME10 · 10% off", percentOff: 10 },
};

export const DELIVERY = {
  standard: { label: "Standard", price: toCents(50), days: "3–5 business days", minDays: 3, maxDays: 5 },
  express: { label: "Express", price: toCents(100), days: "1–2 business days", minDays: 1, maxDays: 2 },
} as const;
export type DeliveryMethod = keyof typeof DELIVERY;

export function discountCents(subtotal: number, promo: string | null) {
  const code = promo ? PROMO_CODES[promo] : undefined;
  return code ? Math.round((subtotal * code.percentOff) / 100) : 0;
}

/** Standard is free from 1,000 EGP of merchandise (before discounts); express always costs. */
export function shippingCents(subtotal: number, method: DeliveryMethod) {
  if (method === "standard" && subtotal >= FREE_SHIPPING_CENTS) return 0;
  return DELIVERY[method].price;
}

export function totals(subtotal: number, promo: string | null, method: DeliveryMethod | null) {
  const discount = discountCents(subtotal, promo);
  const shipping = method ? shippingCents(subtotal, method) : 0;
  return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}
