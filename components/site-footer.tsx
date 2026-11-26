import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#B8733A]/20 bg-[#150F0D] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-wide">
              PROOF DISTILLING CO.
            </Link>
            <p className="mt-2 text-[13px] text-[#9A948B]">
              Small-batch spirits. Big character.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {["Spirits", "Distillery", "Visit", "Cocktails"].map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}`}
                className="text-sm text-[#C7C0B3] transition-colors hover:text-[#E8E2D6]"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-[#B8733A]/10 pt-6 text-center text-[11px] text-[#9A948B]">
          <p>© 2026 PROOF DISTILLING CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
