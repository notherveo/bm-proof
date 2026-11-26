"use client";

import { useState } from "react";
import { motion } from "motion/react";

const categories = [
  "All",
  "Classic",
  "Modern",
  "Gin",
  "Whiskey",
  "Citrus",
];

const cocktails = [
  {
    id: 1,
    name: "Old Fashioned",
    category: "Classic",
    image: "https://picsum.photos/seed/cocktail1/400/300",
  },
  {
    id: 2,
    name: "Negroni",
    category: "Classic",
    image: "https://picsum.photos/seed/cocktail2/400/300",
  },
  {
    id: 3,
    name: "Gin Fizz",
    category: "Gin",
    image: "https://picsum.photos/seed/cocktail3/400/300",
  },
  {
    id: 4,
    name: "Whiskey Sour",
    category: "Whiskey",
    image: "https://picsum.photos/seed/cocktail4/400/300",
  },
  {
    id: 5,
    name: "Martini",
    category: "Classic",
    image: "https://picsum.photos/seed/cocktail5/400/300",
  },
  {
    id: 6,
    name: "Lemon Drop",
    category: "Citrus",
    image: "https://picsum.photos/seed/cocktail6/400/300",
  },
];

export function CocktailFilter() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All" ? cocktails : cocktails.filter((c) => c.category === category);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              category === c
                ? "bg-[#B8733A] text-white"
                : "border border-[#B8733A]/30 text-[#C7C0B3] hover:bg-[#B8733A]/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((cocktail) => (
          <motion.div
            key={cocktail.id}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-2xl border border-[#B8733A]/20 bg-[#1F1815]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <div className="text-xs uppercase tracking-widest text-[#B8733A]">
                {cocktail.category}
              </div>
              <div className="mt-1 text-lg font-semibold text-[#E8E2D6]">
                {cocktail.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
