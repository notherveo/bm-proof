import Link from "next/link";
import { Reveal } from "@/components/reveal";

const retailers = [
  { name: "Spirits & More", city: "San Francisco", region: "West" },
  { name: "The Whiskey Bar", city: "New York", region: "East" },
  { name: "Bottle & Barrel", city: "Austin", region: "South" },
  { name: "Craft Spirits Co.", city: "Seattle", region: "West" },
  { name: "The Distillery Shop", city: "Boston", region: "East" },
  { name: "Proof Liquor", city: "Chicago", region: "Midwest" },
];

export default function WhereToBuy() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8733A]/15 via-[#1A1411] to-[#1A1411]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Reveal>
          <section className="flex-1 px-6 py-24">
            <div className="mx-auto max-w-7xl space-y-16">
              <div className="text-center">
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-[#E8E2D6]">
                  Where to Buy
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-[15px] text-[#C7C0B3]">
                  Find our spirits at select retailers across the country.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {retailers.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-6 backdrop-blur-md transition-transform hover:-translate-y-1"
                  >
                    <div className="text-xs uppercase tracking-widest text-[#B8733A]">
                      {r.region}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#E8E2D6]">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#C7C0B3]">{r.city}</p>
                    <Link
                      href="/spirits"
                      className="mt-4 inline-block text-sm text-[#B8733A] transition-colors hover:text-[#E8E2D6]"
                    >
                      View products →
                    </Link>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                <h2 className="text-lg font-semibold text-[#E8E2D6]">
                  Wholesale & Distribution
                </h2>
                <p className="mt-2 text-sm text-[#9A948B]">
                  Interested in stocking our spirits or partnering with us?
                </p>
                <Link
                  href="/spirits"
                  className="mt-6 rounded-full border border-[#B8733A]/40 bg-transparent px-6 py-3 text-sm font-medium text-[#E8E2D6] transition-colors hover:bg-[#B8733A]/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
