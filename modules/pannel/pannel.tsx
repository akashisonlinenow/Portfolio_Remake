import React from "react";
import styles from "./styles/Pannel.module.scss";
import mStyles from "./styles/miniPannel.module.scss";
import ItemData from "@data/pannelData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDataContext } from "@context/dataLayer";
import { useMenuContext } from "@context/applicationLayer";
import { useDialogContext } from "@context/fuctionalLayer";
import { Button, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { LayoutGroup, motion, Transition, Variants } from "framer-motion";
import Component from "@layout/componentTransition";
import Image from "next/image";
import Heading from "@components/heading/heading";

const Pannel = () => {
  const router = useRouter();
  const currentWidth = useDataContext();
  const [Menu, setMenu] = useMenuContext();
  const [Modal, setModal] = useDialogContext();

  const isDesktop = currentWidth > 1024;

  const handleClick = () => {
    setMenu(!Menu);
  };
  const pushHome = () => {
    router.push("/");
  };

  const getHeading = () => {
    let currentHeading;
    switch (router.asPath) {
      case "/":
        currentHeading = "";
        break;
      case "/projects":
        currentHeading = "#Projects";
        break;
      case "/skills":
        currentHeading = "#Skills";
        break;
      case "/about":
        currentHeading = "#About";
        break;
      case "/resume":
        currentHeading = "#Resume";
        break;
      default:
        currentHeading = "#404";
        break;
    }
    return currentHeading;
  };

  // ! Experemental Stuff
  const MotionLink = motion(Link);

  if (isDesktop) {
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
          <Component className={styles.pannel}>
            {/* <LayoutGroup> */}
            {ItemData.map((e) => {
              return (
                <Button
                  component={Link}
                  // component={MotionLink}
                  // ? MotionLink for framer-motion enabled Button
                  scroll={false}
                  href={e.link}
                  key={e.id}
                  className={`${styles.item} ${
                    router.pathname === e.link ? styles.active : null
                  }`}
                  onClick={() => {
                    if (e.title === "Contact") {
                      setModal(true);
                    }
                  }}
                >
                  <div className={styles.itemIcon}>{e.icon}</div>
                  <div className={styles.itemTitle}>{e.title}</div>
                </Button>
              );
            })}
            {/* </LayoutGroup> */}
          </Component>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.parent}>
        <Heading title={getHeading()} type="custom" className={styles.logo} />
        <Button sx={{ backgroundColor: "transparent" }} onClick={handleClick}>
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </Button>
      </div>
    );
  }
};

export default Pannel;
