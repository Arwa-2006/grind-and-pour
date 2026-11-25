import type { Metadata } from "next";
import Link from "next/link";
import { PageMain } from "@/components/PageHeader";
import { OPT_IN_FORM } from "@/data/product-info";

export const metadata: Metadata = {
  title: "طريقة عمل القهوة التركي المظبوطة",
  description:
    "خطوات عمل القهوة التركي في الكنكة بوش كثيف: الكميات لكل فنجان، درجة النار، مقادير السكر (سادة، مظبوط، زيادة) وأشهر الأخطاء.",
  openGraph: { title: "طريقة عمل القهوة التركي المظبوطة · Grind & Pour" },
};

const link = "font-semibold text-espresso underline underline-offset-4 hover:text-roast";
const h2 = "mt-12 text-2xl font-bold text-espresso sm:text-3xl";

const SUGAR = [
  { name: "سادة", sugar: "بدون سكر" },
  { name: "ع الريحة", sugar: "رشة صغيرة (ربع ملعقة صغيرة)" },
  { name: "مظبوط", sugar: "ملعقة صغيرة" },
  { name: "زيادة", sugar: "ملعقتان صغيرتان" },
];

const STEPS = [
  { t: "القياس", d: "لكل فنجان: 70 مل ماء بارد (فنجان قهوة واحد) + 7 غ قهوة (ملعقة صغيرة كبيرة) + السكر حسب رغبتك." },
  { t: "الخلط", d: "ضع الماء والقهوة والسكر في الكنكة وقلّب مرة واحدة فقط حتى تذوب القهوة، ثم توقّف عن التقليب." },
  { t: "النار الهادئة", d: "ضع الكنكة على نار هادئة. الحرارة البطيئة هي سر الوش الكثيف، فلا تستعجل (2–3 دقائق تقريبًا)." },
  { t: "راقب الوش", d: "عندما يبدأ الوش بالارتفاع نحو حافة الكنكة، ارفعها عن النار فورًا قبل أن تغلي." },
  { t: "وزّع الوش", d: "بملعقة صغيرة ضع شيئًا من الوش في كل فنجان، ثم أرجع الكنكة على النار لثوانٍ حتى يرتفع الوش مرة ثانية." },
  { t: "الصبّ والراحة", d: "صبّ القهوة ببطء فوق الوش، واترك الفنجان دقيقة حتى يترسّب البن في القاع قبل الشرب." },
];

const MISTAKES = [
  "تركها تغلي: الغليان يكسر الوش ويعطي طعمًا مرًّا.",
  "النار العالية: تسخّن القهوة بسرعة قبل أن يتكوّن الوش.",
  "الماء الساخن من البداية: ابدأ دائمًا بماء بارد.",
  "التقليب أثناء التسخين: يذيب الوش، قلّب مرة واحدة في البداية فقط.",
  "طحنة خشنة: القهوة التركي تحتاج طحنة ناعمة جدًا كالبودرة.",
];

export default function TurkishCoffeeGuide() {
  return (
    <PageMain>
      <article lang="ar" dir="rtl" className="mx-auto max-w-3xl text-right text-[18px] leading-loose text-espresso">
        <p className="eyebrow text-roast">دليل التحضير · Brew guide</p>
        <h1 className="mt-3 text-4xl leading-tight font-bold sm:text-5xl">طريقة عمل القهوة التركي المظبوطة</h1>
        <p className="mt-4 text-roast">قراءة 3 دقائق · من فريق Grind &amp; Pour</p>

        <p className="mt-8">
          فنجان القهوة التركي الحلو يُعرف من وشّه: طبقة كثيفة ناعمة تغطي الفنجان كله. وهي سهلة إذا عرفت ثلاثة أشياء:
          طحنة ناعمة جدًا، ماء بارد، ونار هادئة. في هذا الدليل الكميات لكل فنجان وخطوات التحضير وأشهر الأخطاء.
        </p>

        <h2 className={h2}>ماذا تحتاج؟</h2>
        <ul className="mt-4 list-disc space-y-1 pr-6">
          <li>كنكة (إبريق تركي)، ويفضّل أن تكون صغيرة على قدّ عدد الفناجين.</li>
          <li>قهوة تركي مطحونة ناعمة جدًا، مثل <Link href="/product/turkish-gold" className={link}>Turkish Gold</Link>.</li>
          <li>ماء بارد، وسكر إذا كنت تحبها حلوة.</li>
          <li>فنجان قهوة وملعقة صغيرة.</li>
        </ul>

        <h2 className={h2}>مقادير السكر لكل فنجان</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-right">
            <thead>
              <tr className="border-b border-espresso/25 text-roast">
                <th className="py-2 pl-4 font-semibold">الطلب</th>
                <th className="py-2 font-semibold">السكر</th>
              </tr>
            </thead>
            <tbody>
              {SUGAR.map((r) => (
                <tr key={r.name} className="border-b border-espresso/10">
                  <td className="py-2 pl-4 font-semibold">{r.name}</td>
                  <td className="py-2">{r.sugar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2}>الخطوات</h2>
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

        <h2 className={h2}>أخطاء تفسد الفنجان</h2>
        <ul className="mt-4 list-disc space-y-1 pr-6">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 className={h2}>كيف تحافظ على القهوة طازجة؟</h2>
        <p className="mt-4">
          البن المطحون يفقد رائحته بسرعة. احفظه في كيس مغلق جيدًا أو علبة محكمة، في مكان بارد وجاف بعيدًا عن الشمس، ولا
          تضعه في الثلاجة. والأفضل استهلاكه خلال 4 أسابيع من فتح الكيس.
        </p>

        <h2 className={h2}>تنبيه صحي</h2>
        <p className="mt-4">
          القهوة تحتوي على الكافيين. لا يُنصح بها للأطفال، وعلى الحوامل ومن لديهم مشاكل في القلب أو الضغط استشارة الطبيب.
        </p>

        <div className="mt-14 rounded-3xl bg-espresso p-7 text-cream">
          <p className="text-2xl font-bold">جاهز للفنجان الأول؟</p>
          <p className="mt-2 text-cream/85">
            Turkish Gold: خلطة برازيلي وإثيوبي بتحميص وسط مائل للغامق، مطحونة خصيصًا للكنكة. من 250 جنيه للربع كيلو.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/product/turkish-gold"
              className="inline-flex min-h-11 items-center rounded-full bg-cream px-6 font-semibold text-espresso hover:bg-cream-light"
            >
              اطلبها الآن
            </Link>
            <a
              href={OPT_IN_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-cream/50 px-6 font-semibold text-cream hover:bg-cream/10"
            >
              اشترك في نصائح التحضير
            </a>
          </div>
        </div>
      </article>
    </PageMain>
  );
}
