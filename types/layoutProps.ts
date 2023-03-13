import type { PropsWithChildren } from "react";

export interface ComponentTransitionProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  id?: string;
}

export interface InitialPageProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}
