import { getSpirit } from "@/lib/spirits";
import { FlavorWheel } from "@/components/flavor-wheel";
import { BottleTurntable } from "@/components/bottle-turntable";
import { BarrelLookup } from "@/components/barrel-lookup";
import { Reveal } from "@/components/reveal";

export default function Home() {
  const featured = getSpirit("bourbon");

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8733A]/20 via-[#1A1411] to-[#1A1411]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Reveal>
          <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8733A]/40 bg-[#1F1815]/60 px-6 py-3 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8733A]">
                Since 1924
              </span>
              <span className="text-[11px] text-[#C7C0B3]">
                Small-batch · Handcrafted
              </span>
            </div>
            <h1 className="text-[clamp(3.5rem,5vw,6.5rem)] font-semibold tracking-tight text-[#E8E2D6]">
              PROOF DISTILLING CO.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#C7C0B3]">
              A small distillery with big character. We craft premium spirits
              from locally sourced grains, aged in hand-selected barrels, and
              bottled with care.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="/spirits"
                className="rounded-full bg-[#B8733A] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#A66730]"
              >
                Explore Spirits
              </a>
              <a
                href="/visit"
                className="rounded-full border border-[#B8733A]/40 bg-transparent px-7 py-3.5 text-sm font-medium text-[#E8E2D6] transition-colors hover:bg-[#B8733A]/10"
              >
                Book a Visit
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal delay={200}>
          <section className="flex-1 px-6 py-20">
            <div className="mx-auto max-w-7xl space-y-16">
              <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-[2rem] font-semibold tracking-tight text-[#E8E2D6]">
                    A taste of tradition
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#C7C0B3]">
                    Our Kentucky Bourbon is aged for 8 years in charred white oak
                    barrels, developing rich notes of vanilla, caramel, and toasted
                    oak. Each bottle is hand-selected for its unique character.
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="text-3xl font-semibold text-[#B8733A]">
                      {featured.price}
                    </span>
                    <span className="text-sm text-[#9A948B]">per 750ml</span>
                  </div>
                </div>
                <div>
                  <BottleTurntable bottle={featured} />
                </div>
              </div>

              <div className="grid gap-16 lg:grid-cols-2">
                <div className="lg:order-2">
                  <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                    <h3 className="text-lg font-semibold text-[#E8E2D6]">
                      Batch Lookup
                    </h3>
                    <p className="mt-2 text-sm text-[#9A948B]">
                      Every bottle has a unique number. Enter it to discover its
                      barrel, age, and proof.
                    </p>
                    <div className="mt-6">
                      <BarrelLookup />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                    <h3 className="text-lg font-semibold text-[#E8E2D6]">
                      Flavor Profile
                    </h3>
                    <p className="mt-2 text-sm text-[#9A948B]">
                      Explore the 12 tasting notes that define our spirits.
                    </p>
                    <div className="mt-6">
                      <FlavorWheel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
