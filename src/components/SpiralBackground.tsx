/**
 * Recreation of Emilia's colourful feathered spiral painting — used as
 * a hero backdrop. Brush-stroke ribbons radiate from a centre point in
 * the artist's actual palette (yellow / blue / magenta / green / purple
 * / pink / red) over a cream canvas.
 */

const palette = [
  "#ffd60a",
  "#0058ff",
  "#ff3ea5",
  "#00c896",
  "#7b2cbf",
  "#ff2e4c",
  "#ff6b1a",
];

type Props = {
  className?: string;
  strokeCount?: number;
};

export default function SpiralBackground({
  className = "",
  strokeCount = 110,
}: Props) {
  const strokes = Array.from({ length: strokeCount }, (_, i) => {
    const angle = (i / strokeCount) * Math.PI * 2;
    const color = palette[i % palette.length];
    // Each stroke is a curved ribbon from inner radius outward
    const innerR = 30 + ((i * 7) % 60);
    const outerR = 380 + ((i * 11) % 220);
    const cx1 = Math.cos(angle) * innerR;
    const cy1 = Math.sin(angle) * innerR;
    const cx2 =
      Math.cos(angle + 0.15 + ((i * 0.013) % 0.4)) * (outerR + 60);
    const cy2 =
      Math.sin(angle + 0.15 + ((i * 0.013) % 0.4)) * (outerR + 60);
    const ex = Math.cos(angle + 0.35) * outerR;
    const ey = Math.sin(angle + 0.35) * outerR;
    const width = 6 + ((i * 3) % 16);
    return { d: `M ${cx1} ${cy1} Q ${cx2} ${cy2} ${ex} ${ey}`, color, width };
  });

  return (
    <svg
      viewBox="-600 -600 1200 1200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Cream canvas */}
      <rect x="-600" y="-600" width="1200" height="1200" fill="#f4ede0" />
      {/* Brush-stroke ribbons */}
      <g style={{ mixBlendMode: "multiply" }}>
        {strokes.map((s, i) => (
          <path
            key={i}
            d={s.d}
            stroke={s.color}
            strokeWidth={s.width}
            strokeLinecap="round"
            fill="none"
            opacity={0.85}
          />
        ))}
      </g>
      {/* Soft centre highlight */}
      <circle cx="0" cy="0" r="60" fill="#f4ede0" opacity="0.5" />
    </svg>
  );
}
