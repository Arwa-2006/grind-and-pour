import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PageMain } from "@/components/PageHeader";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "How to order",
  description: "Order your coffee from Grind & Pour in five simple steps, from choosing a roast to brewing your first cup.",
};

const STEPS = [
  {
    t: "Choose your coffee",
    d: (
      <>
        Open the <Link href="/shop">shop</Link> and pick a coffee. Each card shows the roast and tasting notes. For Turkish
        coffee, go straight to <Link href="/product/turkish-gold">Turkish Gold</Link>.
      </>
    ),
  },
  {
    t: "Pick the size and grind",
    d: "Choose 250 g, 500 g or 1 kg, and the grind that matches your brewer (Turkish Gold comes ready for the cezve). Set the quantity and tap Add to cart.",
  },
  {
    t: "Check out",
    d: "Open the cart, review your order, and tap Checkout. Enter your address, choose standard or express delivery, and pay by card or cash on delivery. Standard delivery is 50 EGP, and free from 1,000 EGP.",
  },
  {
    t: "Brew it",
    d: (
      <>
        When your coffee arrives, scan the QR code on the bag or the thank-you card to open the product page with the
        brewing tips, or read <Link href="/blog/turkish-coffee-guide">how to make the perfect Turkish coffee</Link>.
      </>
    ),
  },
  {
    t: "Tell us what you think",
    d: (
      <>
        Enjoyed it, or something went wrong? Write to us on the <Link href="/contact">contact page</Link> or at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We read every message.
      </>
    ),
  },
];

export default function GuidePage() {
  return (
    <PageMain>
      <PageHeader eyebrow="Help" title="How to order" intro="From choosing a roast to your first cup, in five steps." />
      <ol className="mt-10 max-w-3xl space-y-4">
        {STEPS.map((s, i) => (
          <li key={s.t} className="flex gap-4 rounded-2xl bg-cream-light p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-espresso font-semibold text-cream">
              {i + 1}
            </span>
            <div className="prose-gp">
              <p className="font-display text-xl font-semibold text-espresso">{s.t}</p>
              <p className="mt-1">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-[15px] text-roast">
        Grind &amp; Pour is a demo store for a course project: you can try every step, but no payment is taken and nothing
        ships.
      </p>
    </PageMain>
  );
}
