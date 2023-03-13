import { useEffect, useState } from "react";

const ScrollPosition = () => {
  const [ScrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const value = window.scrollY;
    setScrollY(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return ScrollY;
};

export default ScrollPosition;
