"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Series } from "@/data/works";

type Props = {
  series: Series | null;
  onClose: () => void;
};

export default function SeriesLightbox({ series, onClose }: Props) {
  useEffect(() => {
    if (!series) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [series, onClose]);

  if (!series) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-[1200px] w-full text-[#f4ede0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md py-4 z-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffd60a] mb-1">
              Series · {series.year}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl italic">
              {series.title}
            </h2>
            <p className="text-sm text-white/60 mt-1">{series.category}</p>
          </div>
          <button
            onClick={onClose}
            className="text-sm uppercase tracking-[0.25em] px-4 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Close ×
          </button>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {series.items.map((item, idx) => (
            <figure key={item.src + idx} className="relative group">
              <div className="relative aspect-[3/4] bg-white/5 overflow-hidden rounded-sm">
                <Image
                  src={item.src}
                  alt={item.title || series.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              {item.title && (
                <figcaption className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
                  {item.title}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
