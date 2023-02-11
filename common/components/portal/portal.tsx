import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface portalProps {
  children: React.ReactNode;
  activate: any;
}

const Portal: React.FC<portalProps> = ({ children, activate }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? (
    <>
      {createPortal(
        <AnimatePresence mode="wait">
          {activate && <>{children}</>}
        </AnimatePresence>,
        document.querySelector("#portal_holder") as Element
      )}
    </>
  ) : null;
};

export default Portal;
