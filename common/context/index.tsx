import React, { PropsWithChildren } from "react";
import { FontProvider } from "@constants/font";
import { DataLayer } from "@context/dataLayer";
import { ApplicationLayer } from "@context/applicationLayer";
import { FunctionalLayer } from "@context/fuctionalLayer";

const ContextProviders = (props: PropsWithChildren) => {
  return (
    <>
      <DataLayer>
        <ApplicationLayer>
          <FunctionalLayer>
            <FontProvider>{props.children}</FontProvider>
          </FunctionalLayer>
        </ApplicationLayer>
      </DataLayer>
    </>
  );
};

export default ContextProviders;
