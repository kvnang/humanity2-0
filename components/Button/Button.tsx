import Link from "next/link";

export function Button({
  children,
  theme = "light",
  ...props
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className={`text-md font-semibold font-heading group relative pb-1 outline-offset-4 disabled:opacity-50 ${props.className}`}
    >
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden group-disabled:hidden">
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
      className={`text-md font-semibold font-heading group relative pb-1 outline-offset-4 ${props.className}`}
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
    </Link>
  );
}

export function InlineLink({
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`group relative rounded-sm outline-offset-4 ${props.className}`}
    >
      {children}
      <div className="absolute left-0 -bottom-0.5 border-b-4 border-primary w-full scale-x-0 group-hover:scale-x-100 duration-200 origin-left"></div>
    </Link>
  );
}
