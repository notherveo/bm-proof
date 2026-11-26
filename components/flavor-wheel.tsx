"use client";

import { motion } from "motion/react";

const notes = [
  "Vanilla",
  "Caramel",
  "Oak",
  "Honey",
  "Spice",
  "Butterscotch",
  "Chocolate",
  "Cinnamon",
  "Cloves",
  "Cedar",
  "Maple",
  "Toast",
];

const colors = [
  "#E8D8C4",
  "#D4B88A",
  "#C99B6A",
  "#B88A5A",
  "#A67A4A",
  "#9B6A3A",
  "#8A5A2A",
  "#7A4A1A",
  "#6A3A0A",
  "#5A2A00",
  "#4A1A00",
  "#3A0A00",
];

const sliceAngle = 360 / notes.length;

export function FlavorWheel() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#B8733A]/30 bg-[#1F1815]/30 backdrop-blur-sm">
      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-24 items-center justify-center rounded-full border-4 border-[#B8733A]/40 bg-[#1A1411] shadow-[0_0_40px_-10px_rgba(184,115,58,0.3)]">
          <div className="text-center">
            <div className="text-[9px] uppercase tracking-[0.2em] text-[#B8733A]">
              Flavor
            </div>
            <div className="text-[14px] font-semibold text-[#E8E2D6]">
              Notes
            </div>
          </div>
        </div>
      </div>

      {/* Slices */}
      {notes.map((note, i) => {
        const angle = (i * sliceAngle) * (Math.PI / 180);
        const radius = 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={note}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ scale: 0.9 }}
            animate={{ scale: hovered === i ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute flex size-12 items-center justify-center rounded-full border border-[#E8E2D6]/10 bg-[#1F1815]/80 shadow-lg"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div
              className="text-[9px] text-center text-[#C7C0B3]"
              style={{
                color: colors[i],
              }}
            >
              {note}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
