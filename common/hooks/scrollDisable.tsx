import { useEffect } from "react";

const ScrollDisable = (activation: boolean) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
    
    if (activation) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    }
  }, [activation]);
};

export default ScrollDisable;
