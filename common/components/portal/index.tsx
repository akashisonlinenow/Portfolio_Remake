import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";

interface portalProps {
  children: React.ReactNode;
}

const Portal: React.FC<portalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? (
    <>
      {createPortal(
        <AnimatePresence mode="wait">{children}</AnimatePresence>,
        document.querySelector("#portal_holder") as Element
      )}
    </>
  ) : null;
};

export default Portal;
