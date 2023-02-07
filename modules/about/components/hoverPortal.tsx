import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Calendar.module.scss";

interface PortalProps {
  Select: CalendarDataType | null;
}

export interface CalendarDataType {
  date: string;
  count: number;
  level: number;
}

type positionType = { x: number; y: number };

const HoverPortal: React.FC<PortalProps> = ({ Select }) => {
  const [MousePos, setMousePos] = useState({} as positionType);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDate = (data: string) => {
    const newDate = new Date(data);
    return newDate.toDateString();
  };

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? (
    <>
      {createPortal(
        <AnimatePresence mode="wait">
          {Select && (
            <motion.div
              animate={{ scale: 1, x: 20, y: -20 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={styles.tooltip}
              style={{ top: MousePos.y, left: MousePos.x }}
            >
              <span>
                <strong>{`${Select.count} contributions `}</strong>on
              </span>
              {/* <br /> */}
              <motion.span> {`${handleDate(Select.date)}`}</motion.span>
            </motion.div>
          )}
        </AnimatePresence>,
        document.querySelector("#portal_holder") as Element
      )}
    </>
  ) : null;
};

export default HoverPortal;
