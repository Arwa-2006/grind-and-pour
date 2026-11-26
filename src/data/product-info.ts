/**
 * Extra product-page content (course project: Digital Marketing & Branding,
 * Al-Quds Open University). Only coffees listed here get the intro card,
 * safety & storage, product information and reviews sections.
 */

export type Review = {
  /** First name or initials only, as the reviewer agreed. */
  name: string;
  /** 1–5 */
  rating: number;
  /** Their words, unchanged. */
  text: string;
  /** e.g. "November 2026" */
  date: string;
};

export type ProductInfo = {
  intro: { title: string; text: string; best: string[] };
  safety: string[];
  storage: string[];
  legal: { label: string; value: string }[];
  /**
   * Real reviews only: paste what testers actually wrote (with their OK).
   * While the list is empty the page shows an honest "no reviews yet" state.
   */
  reviews: Review[];
};

/** Google Form where visitors leave their email/WhatsApp for offers and brewing tips. */
export const OPT_IN_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdb25d0xF_UroXDYE0ndyVBpNt09hMNpDM9A7mSiL35lVHq5w/viewform";

export const PRODUCT_INFO: Record<string, ProductInfo> = {
  "turkish-gold": {
    intro: {
      title: "Made for the cezve",
      text: "Turkish Gold is ground powder-fine, so it goes straight into your cezve: no grinder, no guesswork. Expect a heavy, smooth cup with cocoa, roasted hazelnut and a thick foam on top.",
      best: ["Cezve / ibrik", "Plain, medium or sweet", "Morning cups and guests"],
    },
    safety: [
      "Contains caffeine (roughly 50–65 mg per small cup).",
      "Not recommended for children.",
      "If you are pregnant or breastfeeding, sensitive to caffeine, or have a heart or blood-pressure condition, ask your doctor first.",
      "For most adults, up to 3–4 cups a day is a sensible limit.",
    ],
    storage: [
      "Keep in a cool, dry place away from sunlight and heat.",
      "Reseal the bag tightly after each use, or move it to an airtight jar.",
      "Don't keep it in the fridge: moisture and smells spoil the flavour.",
    ],
    legal: [
      { label: "Product", value: "Turkish Gold, ground Turkish coffee" },
      { label: "Ingredients", value: "100% roasted and ground arabica coffee (no additives, no cardamom)" },
      { label: "Country of origin", value: "Brazil (Sul de Minas) and Ethiopia (Sidama)" },
      { label: "Net weight", value: "250 g / 500 g / 1 kg, as selected" },
      { label: "Roast date", value: "Printed on every bag" },
      { label: "Best before", value: "Within 3 months of the roast date, and 4 weeks after opening" },
      { label: "Replacement guarantee", value: "If your bag arrives damaged or the coffee isn't fresh, we replace it free within 14 days" },
      { label: "Seller", value: "Grind & Pour, a demo store for a university project (Al-Quds Open University)" },
    ],
    reviews: [],
  },
};

export const getProductInfo = (slug: string): ProductInfo | undefined => PRODUCT_INFO[slug];
