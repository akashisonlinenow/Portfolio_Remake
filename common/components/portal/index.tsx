import { createPortal } from "react-dom";
import { useDataContext } from "common/context/dataLayer";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { PropsWithChildren, FC } from "react";

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useDataContext().device === "sm";

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted && (
        <>
          {isMobile ? (
            <>{children}</>
          ) : (
            <>
              {createPortal(
                <AnimatePresence mode="wait">{children}</AnimatePresence>,
                document.querySelector("#portal_holder") as Element
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Portal;
