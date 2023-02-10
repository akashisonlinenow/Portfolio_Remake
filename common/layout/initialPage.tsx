import React, { CSSProperties, PropsWithChildren } from "react";
import styles from "@styles/InitialPage.module.scss";

interface propType {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const InitialPage: React.FC<propType> = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.container} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default InitialPage;
