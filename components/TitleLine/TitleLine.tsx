export function TitleLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex">
      <div className="hidden md:block relative lg:absolute lg:left-0 lg:-translate-x-32 lg:mr-0 w-12 mr-6 lg:w-20 2xl:-translate-x-40 h-1 bg-primary top-[0.5em] shrink-0"></div>
      <div className="max-w-prose">
        <span>{children}</span>
      </div>
    </div>
  );
}
