export function TitleLine({
  reverse,
  children,
}: {
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-flex">
      <div
        className={`hidden md:block w-[var(--line-width)] border-t-4 border-primary absolute top-[0.5em] shrink-0 ${
          reverse
            ? `right-0 translate-x-20 lg:translate-x-28`
            : `left-0 -translate-x-20 lg:-translate-x-28 2xl:-translate-x-32 3xl:-translate-x-40`
        }`}
      ></div>
      <div className="max-w-prose">
        <span>{children}</span>
      </div>
    </div>
  );
}
