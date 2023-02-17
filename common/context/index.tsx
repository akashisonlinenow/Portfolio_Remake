import React, { PropsWithChildren } from "react";
import { FontProvider } from "@constants/font";
import { DataLayer } from "@context/dataLayer";
// import { ApplicationLayer } from "@context/applicationLayer";
// import { FunctionalLayer } from "@context/fuctionalLayer";

const ContextProviders = ({children}: PropsWithChildren) => {
  return (
    <>
      <DataLayer>
        <FontProvider>{children}</FontProvider>
      </DataLayer>
    </>
  );
};

export default ContextProviders;
