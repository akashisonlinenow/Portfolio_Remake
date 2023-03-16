import styles from "@styles/Particles.module.scss";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { FC, useCallback } from "react";
import { useDataContext } from "@context/dataLayer";
import type { ParticleProps } from "types/particleProps";
import type { Container, Engine } from "tsparticles-engine";

const ParticleComponent: FC<ParticleProps> = ({ particles }) => {
  const isMobile = useDataContext().device !== "lg";

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  return (
    <>
      {!isMobile && (
        <div className={styles.container}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className={styles.content}
            options={{
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              delay: 0.3,
              fullScreen: {
                enable: false,
              },
              background: {
                color: {
                  value: "#rgba(0,0,0,0)",
                },
              },
              fpsLimit: 240,
              interactivity: {
                events: {
                  onDiv: {
                    selectors: "#repulse-div",
                    enable: true,
                    mode: "repulse",
                    type: "rectangle",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffffcc",
                },
                links: {
                  color: "#ffffff4d",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                shadow: {
                  enable: true,
                  color: "hsla(0, 0%, 0%, 0.5)",
                  offset: {
                    x: 5,
                    y: 5,
                  },
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: true,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 3000,
                  },
                  value: particles?.count ? particles.count : 80,
                  limit: particles?.limit ? particles.limit : 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}
    </>
  );
};

export default ParticleComponent;
