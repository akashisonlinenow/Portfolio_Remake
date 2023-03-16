import Typewriter from "typewriter-effect";
import type { FC } from "react";

const Typewritter: FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Pro Coder!",
          "Full-Stack Dev",
          "Linux Enthusiast",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Typewritter;
