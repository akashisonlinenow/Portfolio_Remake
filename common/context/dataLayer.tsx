import { createContext, useContext, useEffect, useState } from "react";
import type { PropsWithChildren, FC } from "react";

export const DataContext = createContext({} as number);

export const DataLayer: FC<PropsWithChildren> = ({ children }) => {
  const [GlobalWidth, setGlobalWidth] = useState({} as number);

  const handleResize = () => {
    setGlobalWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DataContext.Provider value={GlobalWidth}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
