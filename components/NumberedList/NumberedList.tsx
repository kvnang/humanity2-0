import clsx from "clsx";

function NumberedListGroup({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol {...props} style={{ ...props.style, counterReset: "vision-counter" }}>
      {children}
    </ol>
  );
}

function NumberedListItem({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...props}
      style={{ ...props.style, counterIncrement: "vision-counter" }}
      className={clsx(
        `flex before:[content:"0"_counter(vision-counter)] before:text-2xl before:font-heading before:mr-4 before:leading-none before:text-primary before:w-[1.5em] before:shrink-0`,
        props.className
      )}
    >
      <div>{children}</div>
    </li>
  );
}

export const NumberedList = {
  Group: NumberedListGroup,
  Item: NumberedListItem,
};
