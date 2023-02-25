import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import type { PropsWithChildren, FC } from "react";

const Portal: FC<PropsWithChildren> = ({ children }) => {
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
