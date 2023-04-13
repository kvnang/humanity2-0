import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export function ButtonsWrapper({
  position = "right",
  children,
}: {
  position?: "right" | "left";
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute top-0 flex items-center gap-2 p-3 text-white ${
        position === "right" ? "right-0" : "left-0"
      }`}
    >
      {children}
    </div>
  );
}

export function CloseButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="rounded-full bg-bg-8/10 p-2 text-black backdrop-blur-lg transition hover:bg-black hover:text-white"
      {...props}
    >
      <XMarkIcon className="h-5 w-5" />
    </button>
  );
}

export function DownloadButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="rounded-full bg-bg-8/10 p-2 text-black backdrop-blur-lg transition hover:bg-black hover:text-white"
      {...props}
    >
      <ArrowDownTrayIcon className="h-5 w-5" />
    </button>
  );
}

export function LinkButton(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { showTitleOnHover?: boolean }
) {
  return (
    <a
      className={`rounded-full bg-bg-8/10 p-2 text-black backdrop-blur-lg transition hover:bg-black hover:text-white inline-flex items-center group ${
        props.showTitleOnHover ? "" : ""
      }`}
      {...props}
    >
      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
      {props.showTitleOnHover && (
        <span className="text-sm max-w-0 opacity-0 group-hover:max-w-2xl group-hover:pl-1 group-hover:opacity-100 transition-all whitespace-nowrap overflow-hidden">
          {props.title}
        </span>
      )}
    </a>
  );
}
