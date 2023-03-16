import {
  Poppins,
  JetBrains_Mono,
  Readex_Pro,
  Lobster_Two,
} from "@next/font/google";
import type { PropsWithChildren } from "react";

const defaultFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

const codeFont = JetBrains_Mono({ subsets: ["latin"], preload: true });
const altFont = Readex_Pro({ subsets: ["latin"], preload: true });

const logoFont = Lobster_Two({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "700"],
});

export const FontProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            --defaultFont: ${defaultFont.style.fontFamily};
            --altFont: ${altFont.style.fontFamily};
            --codeFont: ${codeFont.style.fontFamily};
            --logoFont: ${logoFont.style.fontFamily};
            font-family: ${defaultFont.style.fontFamily};
          }
        `}
      </style>
      {children}
    </>
  );
};
