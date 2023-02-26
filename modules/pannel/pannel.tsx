import Link from "next/link";
import styles from "./styles/Pannel.module.scss";
import Button from "@mui/material/Button";
import Heading from "@components/heading";
import ItemData from "@data/pannelData";
import useStore from "store/store";
import MenuIcon from "@mui/icons-material/Menu";
import Component from "@layout/componentTransition";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useDataContext } from "@context/dataLayer";

const Pannel = () => {
  const router = useRouter();
  const currentWidth = useDataContext();
  // const MenuStatus = useStore((state) => state.menuStatus);
  // const DialogStatus = useStore((state) => state.dialogStatus);
  const SwitchMenu = useStore((state) => state.menuSwitch);
  const SwitchDialog = useStore((state) => state.dialogSwitch);

  const isDesktop = currentWidth > 1024;

  const handleClick = () => {
    SwitchMenu();
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
            {ItemData.map((e) => (
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
                onClick={e.title === "Contact" ? SwitchDialog : undefined}
              >
                <div className={styles.itemIcon}>{e.icon}</div>
                <div className={styles.itemTitle}>{e.title}</div>
              </Button>
            ))}
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
