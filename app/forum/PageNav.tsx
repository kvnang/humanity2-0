"use client";

import * as React from "react";
import { ScrollFade } from "@/components/ScrollFade";
import clsx from "clsx";
import { motion } from "framer-motion";

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
    id: "program",
    label: "Program",
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
        const isSticky = top < 12;
        setIsSticky(isSticky);
      }

      const activeAnchor = ANCHORS.reduce((prev, curr) => {
        const el = document.getElementById(curr.id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top < 12) {
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
              ? `fixed top-3 z-10 left-1/2 -translate-x-1/2 container`
              : ``
          )}
        >
          <nav
            className={clsx(
              `inline-flex -mx-4 max-w-[calc(100%+2rem)] sm:mx-0 sm:max-w-full rounded-full shadow-md bg-bg-8/10 backdrop-blur-md overflow-hidden`
            )}
          >
            <div className="flex items-center shrink-0 py-1 pl-4 pr-2 rounded-l-full bg-gray-50 shadow-md">
              <span className="text-body-tint text-xs uppercase font-heading font-semibold">
                Jump to
              </span>
            </div>
            <div className="flex items-center py-1 px-1 overflow-x-auto hide-scrollbar">
              {ANCHORS.map((anchor) => (
                <div key={anchor.id}>
                  <a
                    href={`#${anchor.id}`}
                    className="group relative inline-flex items-center py-1 px-2 lg:px-3 text-sm sm:text-base rounded-full text-body hover:bg-gray-50 transition-colors font-medium whitespace-nowrap"
                    data-anchor-state={
                      activeAnchor === anchor.id ? "active" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(anchor.id);
                      if (el) {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {activeAnchor === anchor.id && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full border-b-4 border-primary"
                        layoutId="underline"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.3,
                        }}
                      />
                    )}
                    {anchor.label}
                  </a>
                </div>
              ))}
              <ScrollFade direction="horizontal" />
            </div>
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
                  className="inline-flex items-center py-1 px-2 lg:px-3 text-sm sm:text-base rounded-full text-body hover:bg-gray-100 transition-colors font-medium whitespace-nowrap"
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
