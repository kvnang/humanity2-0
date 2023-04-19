export function ImageHighlight({
  className,
  children,
  align = "left",
}: {
  className?: string;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className={`relative ${className || ""}`}>
      {children}
      <div
        className="absolute w-full h-full left-0 top-0 mix-blend-overlay"
        style={{
          background:
            align === "right"
              ? "linear-gradient(115deg, rgba(235, 186, 185, 0) 33%, var(--pink) 67%, rgba(235, 186, 185, 0) 100%)"
              : "linear-gradient(115deg, rgba(235, 186, 185, 0) 0%, var(--pink) 35%, rgba(235, 186, 185, 0) 67%)",
        }}
      />
    </div>
  );
}
