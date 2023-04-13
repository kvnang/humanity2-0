"use client";

import * as React from "react";

const easeIn = (t: number, alpha: number) => Math.pow(t, alpha);

const getMask = (
  opacity: number,
  direction: "vertical" | "horizontal" = "vertical",
  size: number = 56
) => {
  if (direction === "vertical") {
    return `linear-gradient(180deg, black, rgba(255, 255, 255, ${opacity})) center bottom/100%
        ${size}px no-repeat, linear-gradient(180deg, black, black) center top/100% calc(100% - ${size}px)
        no-repeat`;
  }

  return `linear-gradient(90deg, black, rgba(255, 255, 255, ${opacity})) right center/${size}px
        100% no-repeat, linear-gradient(90deg, black, black) left center/ calc(100% - ${size}px) 100%
        no-repeat`;
};

export function ScrollFade({
  direction = "vertical",
  size = 56,
}: {
  direction?: "vertical" | "horizontal";
  size?: number;
}) {
  const rootRef = React.useRef<HTMLDivElement>(null);

  const onScroll = React.useCallback(() => {
    const scrollElement = rootRef.current?.parentElement;

    if (scrollElement) {
      const {
        offsetHeight,
        scrollHeight,
        offsetWidth,
        scrollWidth,
        scrollTop,
        scrollLeft,
      } = scrollElement;

      const opacity =
        direction === "vertical"
          ? easeIn(scrollTop / (offsetHeight - scrollHeight), 10)
          : easeIn(scrollLeft / (offsetWidth - scrollWidth), 10);

      const mask = getMask(opacity, direction, size);

      scrollElement.style.mask = mask;
      scrollElement.style.webkitMask = mask;
    }
  }, [direction, size]);

  React.useEffect(() => {
    const scrollElement = rootRef.current?.parentElement;

    if (scrollElement) {
      const { offsetHeight, offsetWidth, scrollHeight, scrollWidth } =
        scrollElement;

      if (direction === "vertical") {
        if (offsetHeight !== scrollHeight) {
          const mask = getMask(0, direction, size);
          scrollElement.style.mask = mask;
          scrollElement.style.webkitMask = mask;
        }
      } else if (direction === "horizontal") {
        if (offsetWidth !== scrollWidth) {
          const mask = getMask(0, direction, size);
          scrollElement.style.mask = mask;
          scrollElement.style.webkitMask = mask;
        }
      }

      scrollElement.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onScroll);

      return () => {
        scrollElement.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }
  }, [onScroll, direction, size]);

  return <div ref={rootRef} />;
}
