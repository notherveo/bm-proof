import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function Visit() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8733A]/15 via-[#1A1411] to-[#1A1411]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Reveal>
          <section className="flex-1 px-6 py-24">
            <div className="mx-auto max-w-7xl space-y-16">
              <div className="text-center">
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-[#E8E2D6]">
                  Visit Us
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-[15px] text-[#C7C0B3]">
                  Experience the distillery firsthand. Guided tours, tastings,
                  and a chance to meet the master distillers.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                  <h2 className="text-lg font-semibold text-[#E8E2D6]">
                    Guided Tours
                  </h2>
                  <p className="mt-2 text-sm text-[#9A948B]">
                    45-minute tours through our production facility, tasting room,
                    and barrel storage. Learn the craft from start to finish.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm font-medium text-[#B8733A]">
                      Saturdays & Sundays
                    </span>
                    <span className="text-sm text-[#9A948B]">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>
                </div>
                <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                  <h2 className="text-lg font-semibold text-[#E8E2D6]">
                    Private Events
                  </h2>
                  <p className="mt-2 text-sm text-[#9A948B]">
                    Host corporate gatherings, birthday celebrations, or intimate
                    dinners in our private event space.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm font-medium text-[#B8733A]">
                      Up to 50 guests
                    </span>
                    <span className="text-sm text-[#9A948B]">
                      Custom menus available
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                <h2 className="text-lg font-semibold text-[#E8E2D6]">
                  Book Your Visit
                </h2>
                <p className="mt-2 text-sm text-[#9A948B]">
                  Secure your spot for a tour or private event.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-3xl font-semibold text-[#B8733A]">
                    123 Distillery Lane, Spirits Valley, SV 90210
                  </div>
                  <Link
                    href="/spirits"
                    className="rounded-full bg-[#B8733A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A66730]"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
