import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function Distillery() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8733A]/15 via-[#1A1411] to-[#1A1411]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Reveal>
          <section className="flex-1 px-6 py-24">
            <div className="mx-auto max-w-7xl space-y-16">
              <div className="text-center">
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-[#E8E2D6]">
                  The Distillery
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-[15px] text-[#C7C0B3]">
                  From grain to glass, every step is crafted with care.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { step: "01", title: "Grain Selection", desc: "Locally sourced, premium grains." },
                  { step: "02", title: "Mashing & Fermentation", desc: "Traditional methods, modern precision." },
                  { step: "03", title: "Distillation", desc: "Double-distilled for purity and character." },
                  { step: "04", title: "Barrel Aging", desc: "Aged in charred white oak for complexity." },
                  { step: "05", title: "Bottling", desc: "Hand-selected and bottled to perfection." },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-6 backdrop-blur-md"
                  >
                    <div className="text-xs uppercase tracking-widest text-[#B8733A]">
                      {s.step}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#E8E2D6]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#9A948B]">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                <h2 className="text-lg font-semibold text-[#E8E2D6]">
                  Our Philosophy
                </h2>
                <p className="mt-2 text-sm text-[#9A948B]">
                  We believe in slow, deliberate craftsmanship. Every spirit is
                  a testament to patience, tradition, and an unwavering commitment
                  to quality.
                </p>
                <Link
                  href="/spirits"
                  className="mt-6 rounded-full bg-[#B8733A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A66730]"
                >
                  Explore Our Spirits
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
