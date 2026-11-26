import type { Metadata } from "next";
import Link from "next/link";
import { PageMain } from "@/components/PageHeader";
import { OPT_IN_FORM } from "@/data/product-info";

export const metadata: Metadata = {
  title: "How to make the perfect Turkish coffee",
  description:
    "Turkish coffee in a cezve with a thick foam: amounts per cup, the right heat, sugar levels (plain, medium, sweet) and the most common mistakes.",
  openGraph: { title: "How to make the perfect Turkish coffee · Grind & Pour" },
};

const link = "font-semibold text-espresso underline underline-offset-4 hover:text-roast";
const h2 = "font-display mt-12 text-2xl font-semibold text-espresso sm:text-3xl";

const SUGAR = [
  { name: "Plain (sade)", sugar: "No sugar" },
  { name: "A hint", sugar: "A pinch (about ¼ teaspoon)" },
  { name: "Medium (orta / mazbout)", sugar: "1 teaspoon" },
  { name: "Sweet (şekerli / ziyada)", sugar: "2 teaspoons" },
];

const STEPS = [
  { t: "Measure", d: "For each cup: 70 ml of cold water (one coffee cup), 7 g of coffee (a heaped teaspoon) and sugar to taste." },
  { t: "Mix", d: "Put the water, coffee and sugar in the cezve and stir once, just until the coffee sinks. Then stop stirring." },
  { t: "Low heat", d: "Set the cezve on low heat. Slow heating is the secret to a thick foam, so don't rush it (about 2–3 minutes)." },
  { t: "Watch the foam", d: "When the foam starts rising towards the rim, take the cezve off the heat right away, before it boils." },
  { t: "Share the foam", d: "Spoon a little foam into each cup, then return the cezve to the heat for a few seconds until the foam rises again." },
  { t: "Pour and rest", d: "Pour slowly over the foam and let the cup rest for a minute so the grounds settle before you sip." },
];

const MISTAKES = [
  "Letting it boil: boiling breaks the foam and makes the coffee bitter.",
  "High heat: the coffee heats up before the foam has time to form.",
  "Starting with hot water: always start with cold water.",
  "Stirring while it heats: it dissolves the foam. Stir once at the start only.",
  "A coarse grind: Turkish coffee needs a powder-fine grind.",
];

export default function TurkishCoffeeGuide() {
  return (
    <PageMain>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-espresso">
        <p className="eyebrow text-roast">Brew guide</p>
        <h1 className="font-display mt-3 text-4xl leading-tight font-black tracking-tight [font-variation-settings:'SOFT'_100,'WONK'_1] sm:text-5xl">
          How to make the perfect Turkish coffee
        </h1>
        <p className="mt-4 text-roast">3-minute read · from the Grind &amp; Pour team</p>

        <p className="mt-8">
          You can tell a good Turkish coffee by its foam: a thick, velvety layer that covers the whole cup. It&apos;s easy once
          you know three things: a powder-fine grind, cold water and low heat. This guide covers the amounts per cup, the
          steps, and the mistakes that most often ruin it.
        </p>

        <h2 className={h2}>What you need</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>A cezve (Turkish coffee pot), ideally small enough for the number of cups you&apos;re making.</li>
          <li>
            Powder-fine Turkish coffee, such as{" "}
            <Link href="/product/turkish-gold" className={link}>
              Turkish Gold
            </Link>
            .
          </li>
          <li>Cold water, and sugar if you like it sweet.</li>
          <li>Small coffee cups and a teaspoon.</li>
        </ul>

        <h2 className={h2}>Sugar per cup</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-espresso/25 text-roast">
                <th className="py-2 pr-4 font-semibold">How you take it</th>
                <th className="py-2 font-semibold">Sugar</th>
              </tr>
            </thead>
            <tbody>
              {SUGAR.map((r) => (
                <tr key={r.name} className="border-b border-espresso/10">
                  <td className="py-2 pr-4 font-semibold">{r.name}</td>
                  <td className="py-2">{r.sugar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2}>Step by step</h2>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s, i) => (
            <li key={s.t} className="flex gap-4 rounded-2xl bg-cream-light p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-espresso font-bold text-cream">
                {i + 1}
              </span>
              <div>
                <p className="font-bold">{s.t}</p>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className={h2}>Mistakes that ruin the cup</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 className={h2}>Keeping it fresh</h2>
        <p className="mt-4">
          Ground coffee loses its aroma quickly. Keep it in a tightly sealed bag or an airtight jar, somewhere cool and dry
          and out of the sun, and not in the fridge. It tastes best within 4 weeks of opening the bag.
        </p>

        <h2 className={h2}>A health note</h2>
        <p className="mt-4">
          Coffee contains caffeine. It isn&apos;t recommended for children, and if you are pregnant or have a heart or
          blood-pressure condition, check with your doctor.
        </p>

        <div className="mt-14 rounded-3xl bg-espresso p-7 text-cream">
          <p className="font-display text-2xl font-semibold">Ready for your first cup?</p>
          <p className="mt-2 text-cream/85">
            Turkish Gold: a Brazil &amp; Ethiopia blend, roasted medium-dark and ground for the cezve. From 250 EGP for 250 g.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/product/turkish-gold"
              className="inline-flex min-h-11 items-center rounded-full bg-cream px-6 font-semibold text-espresso hover:bg-cream-light"
            >
              Shop Turkish Gold
            </Link>
            <a
              href={OPT_IN_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-cream/50 px-6 font-semibold text-cream hover:bg-cream/10"
            >
              Get brewing tips
            </a>
          </div>
        </div>
      </article>
    </PageMain>
  );
}
