import React, { CSSProperties, PropsWithChildren } from "react";
import styles from "@styles/InitialPage.module.scss";

interface propType {
  children: React.ReactNode;
}

const InitialPage: React.FC<propType> = ({ children, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
};

export default InitialPage;
