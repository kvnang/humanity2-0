import Link from "next/link";

export function Button({
  children,
  theme,
  ...props
}: { children: React.ReactNode; theme?: "dark" } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className="text-md font-semibold font-heading group relative pb-1"
    >
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <div
          className={`absolute bottom-0 left-0 w-full h-1 group-hover:translate-x-full transition-transform duration-300 ${
            theme === "dark" ? "bg-body" : "bg-primary"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-1/2 h-1 -translate-x-full group-hover:delay-100 group-hover:translate-x-0 transition-transform duration-300 ${
            theme === "dark" ? "bg-body" : "bg-primary"
          }`}
        />
      </div>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  theme,
  ...props
}: { children: React.ReactNode; theme?: "dark" } & React.ComponentProps<
  typeof Link
>) {
  return (
    <Link
      {...props}
      className="text-md font-bold font-heading group relative pb-1"
    >
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <div
          className={`absolute bottom-0 left-0 w-full h-1 group-hover:translate-x-full ${
            theme === "dark" ? "bg-body" : "bg-primary"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-1 -translate-x-full delay-100 group-hover:translate-x-0 ${
            theme === "dark" ? "bg-body" : "bg-primary"
          }`}
        />
      </div>
      {children}
    </Link>
  );
}
