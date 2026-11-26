import Link from "next/link";
import { Star } from "lucide-react";
import { AccordionItem } from "@/components/Accordion";
import { OPT_IN_FORM, type ProductInfo } from "@/data/product-info";

const link = "font-medium text-espresso underline underline-offset-4 hover:text-roast";

/** Short "why this coffee" card under the description, with a link to the brew guide. */
export function ProductIntro({ info }: { info: ProductInfo }) {
  return (
    <div className="mt-6 rounded-2xl border border-espresso/15 bg-cream-light p-5">
      <p className="font-display text-xl font-semibold text-espresso">{info.intro.title}</p>
      <p className="mt-2 text-[16px] leading-relaxed text-espresso">{info.intro.text}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {info.intro.best.map((b) => (
          <li key={b} className="rounded-full bg-cream px-3 py-1 text-sm text-espresso">
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[15px]">
        First time?{" "}
        <Link href="/blog/turkish-coffee-guide" className={link}>
          How to make the perfect Turkish coffee
        </Link>
      </p>
    </div>
  );
}

/** Safety & storage, and the product information printed on the bag. */
export function InfoAccordions({ info }: { info: ProductInfo }) {
  return (
    <>
      <AccordionItem title="Safety & storage">
        <p className="font-semibold">Health notes</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          {info.safety.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-4 font-semibold">Storage</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          {info.storage.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem title="Product information">
        <dl className="grid grid-cols-[minmax(7rem,auto)_1fr] gap-x-6 gap-y-2">
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
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5`}>
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
    <section aria-labelledby="reviews-title" className="mt-20 lg:mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-roast">Reviews</p>
          <h2 id="reviews-title" className="font-display mt-2 text-3xl font-semibold text-espresso sm:text-4xl">
            What people say
          </h2>
        </div>
        {reviews.length > 0 && (
          <p className="flex items-center gap-2 text-espresso">
            <Stars rating={Math.round(avg)} />
            <span className="tabular-nums">
              {avg.toFixed(1)} out of 5 · {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
            </span>
          </p>
        )}
      </div>

      {reviews.length > 0 ? (
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name + r.date} className="rounded-2xl border border-espresso/15 bg-cream-light p-5">
              <Stars rating={r.rating} />
              <p className="mt-3 leading-relaxed text-espresso">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-3 text-sm text-roast">
                {r.name} · {r.date}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 max-w-2xl rounded-2xl border border-dashed border-espresso/25 p-5 text-espresso">
          No reviews yet. Tried it? Tell us what you think on our{" "}
          <Link href="/contact" className={link}>
            contact page
          </Link>
          .
        </p>
      )}

      <div className="mt-8 rounded-2xl bg-espresso p-6 text-cream">
        <p className="font-display text-xl font-semibold">Offers and brewing tips, by WhatsApp or email</p>
        <p className="mt-1 text-cream/80">Sign up once. Unsubscribe anytime.</p>
        <a
          href={OPT_IN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-cream px-6 font-semibold text-espresso hover:bg-cream-light"
        >
          Sign up
        </a>
      </div>
    </section>
  );
}
