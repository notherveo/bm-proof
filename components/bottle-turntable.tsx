"use client";
import * as React from "react";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Bottle = {
  id: string;
  name: string;
  type: string;
  abv: string;
  color: string;
  label: string;
  price: string;
};

const bottles: Bottle[] = [
  {
    id: "bourbon",
    name: "Kentucky Bourbon",
    type: "Bourbon",
    abv: "46%",
    color: "#C97A3A",
    label: "Single Barrel",
    price: "$88",
  },
  {
    id: "rye",
    name: "Rye Whiskey",
    type: "Rye",
    abv: "48%",
    color: "#D48B4A",
    label: "Small Batch",
    price: "$92",
  },
  {
    id: "gin",
    name: "London Dry Gin",
    type: "Gin",
    abv: "42%",
    color: "#5A8A6A",
    label: "Classic Dry",
    price: "$68",
  },
  {
    id: "rum",
    name: "Aged Rum",
    type: "Rum",
    abv: "40%",
    color: "#9B6B4A",
    label: "Barrel Finish",
    price: "$74",
  },
];

export function BottleTurntable({ bottle }: { bottle: Bottle }) {
  const container = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [labelZoom, setLabelZoom] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setRotation((r) => (r + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || reducedMotion) return;
    const delta = e.movementX * -0.5;
    setRotation((r) => (r + delta) % 360);
  };
  const handleMouseEnter = () => {
    if (reducedMotion) return;
    setIsHovered(true);
    setLabelZoom(1.15);
    setShowDetails(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setLabelZoom(1);
    setShowDetails(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const start = e.touches[0].clientX;
    const startTime = Date.now();
    const handleTouchMove = (ev: TouchEvent) => {
      if (!isDragging) return;
      const delta = (ev.touches[0].clientX - start) * -0.5;
      setRotation((r) => (r + delta) % 360);
    };
    const handleTouchEnd = () => {
      setIsDragging(false);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#2A221E]/40 to-[#1A1411]/80">
      {/* Bottle */}
      <div
        ref={container}
        className="absolute inset-0 flex items-center justify-center"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleDragEnd}
        style={{
          perspective: "1200px",
          touchAction: "none",
        }}
      >
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative h-[420px] w-[140px] cursor-grab active:cursor-grabbing"
        >
          {/* Bottle body */}
          <div className="relative h-[340px] w-full overflow-hidden rounded-[3px] border border-[#D9C8A9]/20 bg-gradient-to-b from-[#E8E2D6]/10 to-[#D9C8A9]/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
            {/* Liquid */}
            <div
              className="absolute inset-0 transition-transform duration-500"
              style={{
                backgroundColor: bottle.id === "gin" ? "#5A8A6A" : bottle.color,
                transform: `scale(${showDetails ? 1.02 : 1})`,
              }}
            />
            {/* Label */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#1F1815]/90 transition-transform duration-200"
              style={{
                transform: `scale(${labelZoom})`,
              }}
            >
              <div className="text-center">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#B8733A]">
                  {bottle.label}
                </div>
                <div className="text-[22px] font-semibold text-[#E8E2D6]">
                  {bottle.name}
                </div>
                <div className="mt-1 text-[11px] text-[#C7C0B3]">
                  {bottle.type} · {bottle.abv}
                </div>
              </div>
            </div>
          </div>
          {/* Cap */}
          <div className="absolute -top-4 left-1/2 size-10 -translate-x-1/2 rounded-full border border-[#D9C8A9]/20 bg-[#2A221E] shadow-lg" />
          {/* Neck */}
          <div className="absolute -top-12 left-1/2 h-12 w-[50px] -translate-x-1/2 rounded-[2px] border border-[#D9C8A9]/20 bg-[#1F1815]" />
        </motion.div>
      </div>

      {/* Interactive details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-[#B8733A]/30 bg-[#1F1815]/90 px-6 py-4 backdrop-blur-md"
          >
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#B8733A]">
                Price
              </div>
              <div className="text-2xl font-semibold text-[#E8E2D6]">
                {bottle.price}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#B8733A]">
                  ABV
                </div>
                <div className="text-lg font-medium text-[#E8E2D6]">
                  {bottle.abv}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#B8733A]">
                  Type
                </div>
                <div className="text-lg font-medium text-[#E8E2D6]">
                  {bottle.type}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
