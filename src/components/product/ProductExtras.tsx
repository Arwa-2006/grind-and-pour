import Link from "next/link";
import { Star } from "lucide-react";
import { AccordionItem } from "@/components/Accordion";
import { OPT_IN_FORM, type ProductInfo } from "@/data/product-info";

const arLink = "font-medium text-espresso underline underline-offset-4 hover:text-roast";

/** Arabic summary under the English description. */
export function ArabicIntro({ info }: { info: ProductInfo }) {
  return (
    <div lang="ar" dir="rtl" className="mt-6 rounded-2xl border border-espresso/15 bg-cream-light p-5 text-right">
      <p className="text-xl font-bold text-espresso">{info.ar.name}</p>
      <p className="mt-1 text-roast">{info.ar.short}</p>
      <p className="mt-3 text-[17px] leading-loose text-espresso">{info.ar.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {info.ar.best.map((b) => (
          <li key={b} className="rounded-full bg-cream px-3 py-1 text-sm text-espresso">
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[15px]">
        أول مرة تعملها؟ اقرأ{" "}
        <Link href="/blog/turkish-coffee-guide" className={arLink}>
          طريقة عمل القهوة التركي المظبوطة
        </Link>
        .
      </p>
    </div>
  );
}

/** Safety & storage, and the product information printed on the bag. */
export function InfoAccordions({ info }: { info: ProductInfo }) {
  return (
    <>
      <AccordionItem title="Safety & storage · السلامة والتخزين">
        <div lang="ar" dir="rtl" className="text-right">
          <p className="font-semibold">تنبيهات صحية</p>
          <ul className="mt-2 list-disc space-y-1.5 pr-5">
            {info.safety.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">طريقة الحفظ</p>
          <ul className="mt-2 list-disc space-y-1.5 pr-5">
            {info.storage.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem title="Product information · بيانات المنتج">
        <dl lang="ar" dir="rtl" className="grid grid-cols-[minmax(7rem,auto)_1fr] gap-x-6 gap-y-2 text-right">
          {info.legal.map((d) => (
            <div key={d.label} className="contents">
              <dt className="text-roast">{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>
      </AccordionItem>
    </>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} من 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`size-4 ${i < rating ? "fill-terracotta text-terracotta" : "text-espresso/25"}`} aria-hidden="true" />
      ))}
    </span>
  );
}

/** Real customer reviews; an honest empty state until the first ones arrive. */
export function Reviews({ info }: { info: ProductInfo }) {
  const { reviews } = info;
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  return (
    <section aria-labelledby="reviews-title" lang="ar" dir="rtl" className="mt-20 text-right lg:mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-roast">Reviews</p>
          <h2 id="reviews-title" className="mt-2 text-3xl font-bold text-espresso sm:text-4xl">
            آراء من جرّبوها
          </h2>
        </div>
        {reviews.length > 0 && (
          <p className="flex items-center gap-2 text-espresso">
            <Stars rating={Math.round(avg)} />
            <span className="tabular-nums">
              {avg.toFixed(1)} من 5 · {reviews.length} تقييم
            </span>
          </p>
        )}
      </div>

      {reviews.length > 0 ? (
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name + r.date} className="rounded-2xl border border-espresso/15 bg-cream-light p-5">
              <Stars rating={r.rating} />
              <p className="mt-3 leading-loose text-espresso">«{r.text}»</p>
              <p className="mt-3 text-sm text-roast">
                {r.name} · {r.date}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 max-w-2xl rounded-2xl border border-dashed border-espresso/25 p-5 text-espresso">
          لا توجد تقييمات بعد. جرّبتها؟ شاركنا رأيك عبر{" "}
          <Link href="/contact" className={arLink}>
            صفحة التواصل
          </Link>
          .
        </p>
      )}

      <div className="mt-8 rounded-2xl bg-espresso p-6 text-cream">
        <p className="text-xl font-bold">عروض ونصائح تحضير على واتساب أو الإيميل</p>
        <p className="mt-1 text-cream/80">سجّل مرة واحدة، ويمكنك إلغاء الاشتراك في أي وقت.</p>
        <a
          href={OPT_IN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-cream px-6 font-semibold text-espresso hover:bg-cream-light"
        >
          اشترك الآن
        </a>
      </div>
    </section>
  );
}
