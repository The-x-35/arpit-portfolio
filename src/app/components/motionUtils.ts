// motionUtils.ts

// Type for the motion variants
interface Transition {
    type: "spring" | "tween";
    duration: number;
    delay?: number;
    ease?: string;
  }
  
  interface FadeInOptions {
    direction: "left" | "right" | "up" | "down";
    type: "spring" | "tween";
    delay: number;
    duration: number;
  }
  
  interface SlideInOptions {
    direction: "left" | "right" | "up" | "down";
    type: "spring" | "tween";
    delay: number;
    duration: number;
  }
  
  interface StaggerContainerOptions {
    staggerChildren: number;
    delayChildren?: number;
  }
  
  // Function for text animation variant
  export const textVariant = (delay: number) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  // Function for fade-in animation variant
  export const fadeIn = ({ direction, type, delay, duration }: FadeInOptions) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Function for zoom-in animation variant
  export const zoomIn = (delay: number, duration: number) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Function for slide-in animation variant
  export const slideIn = ({ direction, type, delay, duration }: SlideInOptions) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Function for stagger container animation variant
  export const staggerContainer = ({ staggerChildren, delayChildren }: StaggerContainerOptions) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
  