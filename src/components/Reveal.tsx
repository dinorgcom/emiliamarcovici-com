"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "header" | "h2" | "h3" | "p";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
