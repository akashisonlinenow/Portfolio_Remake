import { DataLayer } from "@context/dataLayer";
import { FontProvider } from "@constants/font";
import type { PropsWithChildren, FC } from "react";

const ContextProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <DataLayer>
        <FontProvider>{children}</FontProvider>
      </DataLayer>
    </>
  );
};

export default ContextProviders;
