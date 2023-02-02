import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const ApplicationContext = createContext(
  {} as [boolean, React.Dispatch<SetStateAction<boolean>>]
);

export const ApplicationLayer: React.FC<PropsWithChildren> = ({ children }) => {
  const [Menu, setMenu] = useState(false);

  return (
    <ApplicationContext.Provider value={[Menu, setMenu]}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(ApplicationContext);
};
