import { createContext, useContext, useEffect, useState } from "react";
import type { DataContextProps } from "types/contextTypes";
import type { PropsWithChildren, FC } from "react";

export const DataContext = createContext({} as DataContextProps);

const getDeviceConfig = (width: number) => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  }
};

export const DataLayer: FC<PropsWithChildren> = ({ children }) => {
  const [GlobalWidth, setGlobalWidth] = useState<DataContextProps>({
    device: undefined,
    value: 0,
  });

  const handleResize = () => {
    setGlobalWidth({
      device: getDeviceConfig(window.innerWidth),
      value: window.innerWidth,
    });
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
