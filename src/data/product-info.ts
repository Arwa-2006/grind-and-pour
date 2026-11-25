/**
 * Extra product-page content for the Arabic-speaking market (course project:
 * Digital Marketing & Branding, Al-Quds Open University). Only coffees listed
 * here get the Arabic block, safety, product information and reviews sections.
 */

export type Review = {
  /** First name or initials only, as the reviewer agreed. */
  name: string;
  /** 1–5 */
  rating: number;
  /** Their words, unchanged. */
  text: string;
  /** e.g. "نوفمبر 2026" */
  date: string;
};

export type ProductInfo = {
  ar: { name: string; short: string; description: string; best: string[] };
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
    ar: {
      name: "تركيش جولد — قهوة تركي",
      short: "خلطة برازيلي وإثيوبي · كاكاو، بندق محمّص، وش كثيف",
      description:
        "قهوة تركي مطحونة ناعمة جدًا للكنكة، بتحميص وسط مائل للغامق. تطلع فنجانًا ثقيلًا ناعمًا بنكهة الكاكاو والبندق المحمّص ووش كثيف. حلوة سادة أو بقليل من السكر.",
      best: ["الكنكة (الإبريق التركي)", "سادة أو مظبوط أو زيادة", "فنجان الصبح أو مع الضيوف"],
    },
    safety: [
      "تحتوي على الكافيين (حوالي 50–65 ملغ في الفنجان الواحد تقريبًا).",
      "لا يُنصح بها للأطفال.",
      "للحوامل والمرضعات ومن لديهم حساسية من الكافيين أو أمراض القلب أو الضغط: استشيروا الطبيب قبل الشرب.",
      "يُفضّل عدم تجاوز 3–4 فناجين في اليوم للبالغين.",
    ],
    storage: [
      "في مكان بارد وجاف بعيدًا عن الشمس والحرارة.",
      "أغلق الكيس جيدًا بعد كل استخدام، أو انقلها إلى علبة محكمة الإغلاق.",
      "لا تضعها في الثلاجة: الرطوبة والروائح تفسد طعمها.",
    ],
    legal: [
      { label: "اسم المنتج", value: "Turkish Gold — بن تركي مطحون" },
      { label: "المكوّنات", value: "100% بن أرابيكا محمّص ومطحون (بدون إضافات أو هيل)" },
      { label: "بلد المنشأ", value: "البرازيل (سول دي ميناس) وإثيوبيا (سيداما)" },
      { label: "الوزن الصافي", value: "250 غ / 500 غ / 1 كغ حسب الحجم المختار" },
      { label: "تاريخ التحميص", value: "مطبوع على كل كيس" },
      { label: "مدة الصلاحية", value: "الأفضل خلال 3 أشهر من تاريخ التحميص، و4 أسابيع بعد الفتح" },
      { label: "ضمان الاستبدال", value: "إذا وصلك الكيس تالفًا أو القهوة غير طازجة نستبدله مجانًا خلال 14 يومًا" },
      { label: "البائع", value: "Grind & Pour — متجر تجريبي لمشروع جامعي (جامعة القدس المفتوحة)" },
    ],
    reviews: [],
  },
};

export const getProductInfo = (slug: string): ProductInfo | undefined => PRODUCT_INFO[slug];
