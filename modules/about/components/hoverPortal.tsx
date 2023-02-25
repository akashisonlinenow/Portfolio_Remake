import React, { useEffect, useState } from "react";
import Portal from "@components/portal";
import styles from "../styles/Calendar.module.scss";
import { motion, useWillChange } from "framer-motion";

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

  const handleMouseMove = (event: MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDate = (data?: string) => {
    if (data) {
      const newDate = new Date(data);
      return newDate.toDateString();
    }
  };

  const willChange = useWillChange();

  return (
    <>
      <Portal>
        {Select && (
          <motion.div
            animate={{ scale: 1, x: 20, y: -20 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={styles.tooltip}
            style={{ top: MousePos.y, left: MousePos.x, willChange }}
          >
            <span>
              <strong>{`${Select?.count} contributions `}</strong>on
            </span>
            <motion.span> {`${handleDate(Select?.date)}`}</motion.span>
          </motion.div>
        )}
      </Portal>
    </>
  );
};

export default HoverPortal;
