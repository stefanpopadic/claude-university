"use client";

import { useState, type ReactNode } from "react";

export default function HoverTableRow({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <tr
      style={{
        transition: "background-color 0.15s ease",
        backgroundColor: hovered ? "var(--bg-surface)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </tr>
  );
}
