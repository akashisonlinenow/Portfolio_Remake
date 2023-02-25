import styles from "@styles/InitialPage.module.scss";
import type { FC } from "react";
import type { InitialPageProps } from "types/layoutProps";

const InitialPage: FC<InitialPageProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`${styles.container} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default InitialPage;
