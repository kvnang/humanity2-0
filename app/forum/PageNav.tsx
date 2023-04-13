"use client";

import { ScrollFade } from "@/components/ScrollFade";
import clsx from "clsx";
import * as React from "react";

const ANCHORS = [
  {
    id: "videos",
    label: "Videos",
  },
  {
    id: "photos",
    label: "Photos",
  },
  {
    id: "opening-address",
    label: "Opening Address",
  },
  {
    id: "topics",
    label: "Topics",
  },
  {
    id: "sponsors",
    label: "Sponsors",
  },
  {
    id: "participating-organizations",
    label: "Participating Organizations",
  },
  {
    id: "complete-program",
    label: "Complete Program",
  },
  {
    id: "join-the-forum",
    label: "Join the Forum",
  },
];

export function PageNav() {
  const [isSticky, setIsSticky] = React.useState(false);
  const [activeAnchor, setActiveAnchor] = React.useState(ANCHORS[0].id);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const isSticky = top < 16;
        setIsSticky(isSticky);
      }

      const activeAnchor = ANCHORS.reduce((prev, curr) => {
        const el = document.getElementById(curr.id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top < 16) {
            return curr;
          }
        }
        return prev;
      }, ANCHORS[0]);

      if (activeAnchor) {
        setActiveAnchor(activeAnchor.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={ref}>
        <div
          className={clsx(
            isSticky
              ? `fixed top-4 z-50 left-1/2 -translate-x-1/2 container`
              : ``
          )}
        >
          <nav
            className={clsx(
              `inline-flex max-w-full rounded-full shadow-md bg-bg-8/10 backdrop-blur-md overflow-hidden`
            )}
          >
            <div className="flex items-center shrink-0 py-1 pl-4 pr-2 rounded-l-full shadow-lg">
              <span className="text-body-tint text-xs uppercase font-heading font-semibold">
                Jump to
              </span>
            </div>
            <ul className="flex items-center py-1 px-1 overflow-x-auto hide-scrollbar">
              {ANCHORS.map((anchor) => (
                <li key={anchor.id} className="">
                  <a
                    href={`#${anchor.id}`}
                    className="group relative inline-flex items-center py-1 px-2 lg:px-3 rounded-full text-body hover:bg-gray-100 transition-colors font-medium whitespace-nowrap"
                    data-anchor-state={
                      activeAnchor === anchor.id ? "active" : ""
                    }
                  >
                    <div className="absolute -bottom-1 left-0 w-full border-b-4 border-primary origin-left scale-x-0 group-data-[anchor-state=active]:scale-x-100 transition-transform"></div>
                    {anchor.label}
                  </a>
                </li>
              ))}
              <ScrollFade direction="horizontal" />
            </ul>
          </nav>
        </div>
        {/* Placeholder - so that when isSticky is true, there's no jank */}
        <div
          aria-hidden="true"
          className={clsx(
            `max-w-full rounded-full shadow-md bg-bg-8/10 backdrop-blur-md overflow-hidden invisible`,
            isSticky ? "inline-flex" : "hidden"
          )}
        >
          <div className="flex items-center shrink-0 py-1 pl-4 pr-2 rounded-l-full">
            <span className="text-body-tint text-xs uppercase font-heading font-semibold">
              Jump to
            </span>
          </div>
          <ul className="flex items-center py-1 px-1">
            {ANCHORS.map((anchor) => (
              <li key={anchor.id} className="">
                <a
                  href={`#${anchor.id}`}
                  className="inline-flex items-center py-1 px-2 lg:px-3 rounded-full text-body hover:bg-gray-100 transition-colors font-medium whitespace-nowrap"
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
