import React from "react";
import { DataLayer } from "@context/dataLayer";
import { FontProvider } from "@constants/font";
import type { PropsWithChildren } from "react";

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
