import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const FunctionalContext = createContext(
  {} as [boolean, React.Dispatch<SetStateAction<boolean>>]
);

export const FunctionalLayer: React.FC<PropsWithChildren> = ({ children }) => {
  const [Dialog, setDialog] = useState(false);

  return (
    <FunctionalContext.Provider value={[Dialog, setDialog]}>
      {children}
    </FunctionalContext.Provider>
  );
};

export const useDialogContext = () => {
  return useContext(FunctionalContext);
};
