import Link from "next/link";
import { cocktails, getCocktail } from "@/lib/cocktails";
import { CocktailFilter } from "@/components/cocktail-filter";
import { Reveal } from "@/components/reveal";

export default function Cocktails() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8733A]/15 via-[#1A1411] to-[#1A1411]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Reveal>
          <section className="flex-1 px-6 py-24">
            <div className="mx-auto max-w-7xl space-y-16">
              <div className="text-center">
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-[#E8E2D6]">
                  Cocktail Library
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-[15px] text-[#C7C0B3]">
                  Classic recipes, modern twists, and everything in between.
                </p>
              </div>

              <CocktailFilter />

              <div className="rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/50 p-8 backdrop-blur-md">
                <h2 className="text-lg font-semibold text-[#E8E2D6]">
                  Featured Recipe
                </h2>
                <div className="mt-6 flex flex-col gap-6 md:flex-row">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={getCocktail(1).image}
                      alt={getCocktail(1).name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-[#B8733A]">
                      {getCocktail(1).category}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-[#E8E2D6]">
                      {getCocktail(1).name}
                    </h3>
                    <p className="mt-2 text-sm text-[#9A948B]">
                      {getCocktail(1).ingredients}
                    </p>
                    <Link
                      href="/spirits"
                      className="mt-6 rounded-full bg-[#B8733A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A66730]"
                    >
                      Get the Recipe
                    </Link>
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
