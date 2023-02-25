export interface ModalProps {
    activation: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
    handleClickAway: () => void;
  }