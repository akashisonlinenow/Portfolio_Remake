interface DefaultProps {
  title: string;
  type?: "default" | "small";
  disableMobileView?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
interface CustomProps {
  title: string;
  type: "custom";
  disableMobileView?: boolean;
  style?: React.CSSProperties;
  className: string;
}

export type HeadingProps = DefaultProps | CustomProps;
