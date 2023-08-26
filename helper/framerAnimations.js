export const textContainer = {
  hidden: { opacity: '0' },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
      staggerChildren: 0.4,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: '0' },
};

export const titles = {
  hidden: { translateX: '10px' },
  show: { translateX: '0px' },
  exit: { translateX: '10px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const paragraph = {
  hidden: { translateX: '-20px' },
  show: { translateX: 0 },
  exit: { translateX: '-20px' },
};

export const formControl = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

export const label = {
  hidden: { opacity: 0, y: '-15px' },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  exit: { opacity: 0, y: '-15px' },
};

export const textFields = {
  hidden: { opacity: 0, y: '20px' },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: '20px' },
};

export const navUl = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

export const navLi = {
  hidden: { x: '-15px', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
  exit: { x: '-15px', opacity: 0 },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      transition: { delay: 0.2 },
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const items = {
  hidden: { opacity: 0, translateY: '15px' },
  show: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: '15px' },
};

export const staggerVariants = {
  hidden: { opacity: 0, y: 20, scale: 1.2 },
  show: { opacity: 1, y: 0, scale: 1, transition: { staggerChildren: 0.1 } },
};

export const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
