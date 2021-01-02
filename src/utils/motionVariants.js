export const slideUp = {
  initial: { y: 100, opacity: 0 },
  visible: (i = 0.3) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      duration: 2,
      delay: i,
    },
  }),
};

export const slideDown = {
  initial: { y: -100, opacity: 0 },
  visible: (i = 0.3) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      duration: 2,
      delay: i,
    },
  }),
};

export const slideToLeft = {
  initial: { x: 100, opacity: 0 },
  visible: (i = 0.3) => ({
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      duration: 2,
      delay: i,
    },
  }),
};

export const slideToRight = {
  initial: { x: -100, opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      duration: 2,
      delay: i,
    },
  }),
};

export const zoomIn = {
  initial: { scale: 0, opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      duration: 2,
      delay: i,
    },
  }),
};
