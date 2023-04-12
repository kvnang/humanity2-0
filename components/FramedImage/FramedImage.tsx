import clsx from "clsx";

export function FramedImage({
  reverse,
  children,
}: {
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        `pt-4 lg:pt-8 `,
        reverse ? "pr-4 lg:pr-8 3xl:-mr-8" : "pl-4 lg:pl-8 3xl:-ml-8"
      )}
    >
      <div className="w-full relative z-0">
        <div
          className={clsx(
            `absolute -z-10 -translate-y-4 lg:-translate-y-8  bg-primary inset-0`,
            reverse
              ? "translate-x-4 lg:translate-x-8"
              : "-translate-x-4 lg:-translate-x-8"
          )}
        />
        {children}
      </div>
    </div>
  );
}
