export const modalVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const carouselVariants = (length: number) => ({
  enter: ({
    index,
    currentIndex,
  }: {
    index: number;
    currentIndex: number;
    direction: number;
  }) => {
    const centerX = index * -100;

    return {
      x:
        index === 0 && currentIndex === length - 1
          ? centerX + 100 + "%"
          : centerX - 100 + "%",
      opacity: 0,
    };
  },
  center: ({ index }: { index: number }) => {
    const centerX = index * -100;
    return {
      zIndex: 1,
      x: centerX + "%",
      opacity: 1,
    };
  },
  exit: ({
    index,
    currentIndex,
    direction,
  }: {
    index: number;
    currentIndex: number;
    direction: number;
  }) => {
    const centerX = index * -100;

    return {
      zIndex: 0,
      x:
        index === length - 1 && currentIndex === 0
          ? centerX - 100 + "%"
          : centerX + 100 + "%",
      opacity: 0,
    };
  },
});
