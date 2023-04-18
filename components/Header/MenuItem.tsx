"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
}

function MenuItemDropdown({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: () => void;
}) {
  const pathname = usePathname();

  const isCurrent = pathname === item.href;
  const isAncestor =
    pathname && pathname !== "/" && item.href && pathname.startsWith(item.href);

  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const isOpen = open;

  let focusTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleFocus = () => {
    focusTimeout = setTimeout(() => {
      setOpen(true);
    }, 150);
  };

  const handleMouseDown = () => {
    if (focusTimeout) {
      clearTimeout(focusTimeout);
    }
  };

  const handleMouseUp = () => {
    if (focusTimeout) {
      clearTimeout(focusTimeout);
    }
    setOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      if (focusTimeout) {
        clearTimeout(focusTimeout);
      }
      setOpen((prev) => !prev);
    }
  };

  React.useEffect(() => {
    () => {
      if (focusTimeout) {
        clearTimeout(focusTimeout);
      }
    };
  }, [focusTimeout]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <button
        className="group inline-flex items-center hover:text-primary transition-colors"
        type="button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={(e) => {
          if (!ref.current?.contains(e.relatedTarget)) {
            setOpen(false);
          }
        }}
        data-open={isOpen}
      >
        <span
          className={clsx(`h6`, isCurrent || isAncestor ? "font-bold" : "")}
        >
          {item.name}
        </span>
        <ChevronDownIcon className="w-5 h-5 shrink-0 ml-2 transition-transform group-data-[open=true]:rotate-180" />
      </button>
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="overflow-hidden"
      >
        <ul className="inline-flex flex-col pl-6 py-2 pr-2 mt-4">
          {item.children?.map((child) => {
            const isCurrent = pathname === child.href;

            return (
              <li key={child.name} className="group mb-6 last:mb-0">
                <Link
                  className="hover:text-primary transition-colors aria-[current=page]:font-bold"
                  href={child.href || "/"}
                  onClick={onClick}
                  onFocus={() => setOpen(true)}
                  onBlur={(e) => {
                    if (!ref.current?.contains(e.relatedTarget)) {
                      setOpen(false);
                    }
                  }}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {child.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

export function MenuItem({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: () => void;
}) {
  const pathname = usePathname();

  const isCurrent = pathname === item.href;
  const isAncestor =
    pathname && pathname !== "/" && item.href && pathname.startsWith(item.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="hover:text-primary transition-colors aria-[current=page]:font-bold"
        onClick={onClick}
        aria-current={isCurrent || isAncestor ? "page" : undefined}
      >
        <span className="h6">{item.name}</span>
      </Link>
    );
  }

  return <MenuItemDropdown item={item} onClick={onClick} />;
}
