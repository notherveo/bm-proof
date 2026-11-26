import { getSpirit, spirits } from "@/lib/spirits";
import { BottleTurntable } from "@/components/bottle-turntable";
import { BarrelLookup } from "@/components/barrel-lookup";
import { Reveal } from "@/components/reveal";

export default function Spirits() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8733A]/15 via-[#1A1411] to-[#1A1411]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Reveal>
          <section className="flex-1 px-6 py-24">
            <div className="mx-auto max-w-7xl space-y-16">
              <div className="text-center">
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-[#E8E2D6]">
                  Our Spirits
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-[15px] text-[#C7C0B3]">
                  Small-batch, handcrafted spirits with character.
                </p>
              </div>

              <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <BottleTurntable bottle={spirits[0]} />
                </div>
                <div className="space-y-8">
                  {spirits.map((s) => (
                    <div
                      key={s.id}
                      className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-6 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="size-12 rounded-full border border-[#B8733A]/40"
                          style={{ backgroundColor: s.color }}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-[#E8E2D6]">
                            {s.name}
                          </h3>
                          <p className="text-sm text-[#9A948B]">
                            {s.type} · {s.abv}
                          </p>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="text-xl font-semibold text-[#B8733A]">
                            {s.price}
                          </div>
                          <div className="text-xs text-[#9A948B]">per 750ml</div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-[#C7C0B3]">
                        {s.notes}
                      </p>
                      <div className="mt-4">
                        <BarrelLookup />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
