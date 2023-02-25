import styles from "@styles/Heading.module.scss";
import Component from "@layout/componentTransition";
import { useDataContext } from "@context/dataLayer";
import type { FC } from "react";
import type { HeadingProps } from "types/headingProps";

const Heading: FC<HeadingProps> = ({
  title,
  type,
  disableMobileView,
  ...rest
}) => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

  return (
    <Component
      className={type === "custom" ? rest.className : styles.container}
      style={{
        fontSize: type === "small" ? "clamp(2.5rem, 4vw, 5.5rem)" : "null",
        // passing null which isn't a valid css so it will be ignored
        display: disableMobileView && isMobile ? "none" : "block",
      }}
      {...rest}
    >
      {type === "custom" ? `${title}` : `#${title}`}
    </Component>
  );
};

export default Heading;
