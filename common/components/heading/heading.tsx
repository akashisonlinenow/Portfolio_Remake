import React, { CSSProperties } from "react";
import styles from "@styles/Heading.module.scss";
import Component from "@layout/componentTransition";
import { useDataContext } from "@context/dataLayer";

type DefaultProps = {
  title: string;
  type?: "default" | "small";
  disableMobileView?: boolean;
  style?: CSSProperties;
  className?: string;
};
type CustomProps = {
  title: string;
  type?: "custom";
  disableMobileView?: boolean;
  style?: CSSProperties;
  className: string;
};

const Heading: React.FC<DefaultProps | CustomProps> = ({
  title,
  type,
  className,
  disableMobileView,
  ...rest
}) => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

  return (
    <Component
      className={type === "custom" ? className : styles.container}
      style={
        // type === "small"
        //   ? { fontSize: "clamp(2.5rem, 4vw, 5.5rem)" }
        //   : undefined
        {
          fontSize: type === "small" ? "clamp(2.5rem, 4vw, 5.5rem)" : "null",
          // passing null which isn't a valid css so it will be ignored
          display: disableMobileView && isMobile ? "none" : "block",
        }
      }
      {...rest}
    >
      {type === "custom" ? `${title}` : `#${title}`}
    </Component>
  );
};

export default Heading;
