import clsx from "clsx";
import { Button } from "@/components/Button";

export function FormSubmitButton({
  loading,
  children,
  theme,
}: {
  loading: boolean;
  children: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={clsx(
        `relative inline-flex items-center transition-all`,
        loading && "pr-8"
      )}
    >
      <Button type="submit" disabled={loading} theme={theme}>
        {children}
      </Button>
      {loading ? (
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-spinner)] border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        </div>
      ) : null}
    </div>
  );
}
