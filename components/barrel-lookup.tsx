"use client";
import * as React from "react";

import { useState } from "react";
import { motion } from "motion/react";

export function BarrelLookup() {
  const [bottle, setBottle] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const lookup = (e: React.FormEvent) => {
    e.preventDefault();
    const num = bottle.trim();
    if (!/^\d+$/.test(num)) {
      setResult("Please enter a valid bottle number.");
      return;
    }
    const barrel = (100 + parseInt(num) * 7) % 1000;
    const age = 4 + (parseInt(num) % 4);
    const proof = 90 + (parseInt(num) % 10);
    setResult(
      `Barrel #${barrel} · ${age} years · ${proof} proof`,
    );
  };

  return (
    <form onSubmit={lookup} className="flex flex-col gap-3">
      <input
        type="text"
        inputMode="numeric"
        placeholder="e.g. 1234"
        value={bottle}
        onChange={(e) => setBottle(e.target.value)}
        className="h-12 rounded-full border border-[#B8733A]/40 bg-[#1F1815] px-6 text-center text-lg text-[#E8E2D6] outline-none placeholder:text-[#9A948B]"
      />
      <button
        type="submit"
        className="h-12 rounded-full bg-[#B8733A] text-white transition-colors hover:bg-[#A66730]"
      >
        Lookup
      </button>
      {result && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[#C7C0B3]"
        >
          {result}
        </motion.p>
      )}
    </form>
  );
}
