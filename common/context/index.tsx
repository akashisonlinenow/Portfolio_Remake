import React from "react";
import type { PropsWithChildren } from "react";
import { FontProvider } from "@constants/font";
import { DataLayer } from "@context/dataLayer";

const ContextProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <DataLayer>
        <FontProvider>{children}</FontProvider>
      </DataLayer>
    </>
  );
};

export default ContextProviders;
