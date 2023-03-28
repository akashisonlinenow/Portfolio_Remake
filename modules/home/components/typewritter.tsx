import Typewriter from "typewriter-effect";
import type { FC } from "react";

const Typewritter: FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Competitive Programmer!",
          "Front-End Dev",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Typewritter;
