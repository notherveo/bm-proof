"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function AgeGate() {
  const [age, setAge] = useState<number | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("age-gate");
    if (stored === "21+") setShow(false);
  }, []);

  const confirm = (confirmed: boolean) => {
    setAge(confirmed ? 21 : null);
    localStorage.setItem("age-gate", confirmed ? "21+" : "");
    setShow(false);
  };

  const skip = () => {
    setAge(null);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
        >
          <motion.div
            initial={{ scale: 0.96, rotate: -1 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="w-full max-w-md rounded-2xl border border-[#B8733A]/40 bg-[#1F1815] p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#B8733A]/60 bg-[#B8733A]/10 text-[#B8733A] text-lg font-semibold">
                21+
              </span>
              <h1 className="text-2xl font-semibold tracking-wide">
                PROOF DISTILLING CO.
              </h1>
            </div>
            <p className="mb-8 text-[15px] leading-relaxed text-[#C7C0B3]">
              We sell premium spirits to adults only. To continue, please confirm
              your age.
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => confirm(true)}
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#B8733A] text-white transition-colors hover:bg-[#A66730]"
              >
                I am 21 or older
              </button>
              <button
                type="button"
                onClick={() => confirm(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#E8E2D6]/30 bg-transparent text-[#C7C0B3] transition-colors hover:bg-[#E8E2D6]/10"
              >
                I am under 21
              </button>
              <button
                type="button"
                onClick={skip}
                className="mt-2 text-center text-xs text-[#9A948B] hover:text-[#C7C0B3]"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
