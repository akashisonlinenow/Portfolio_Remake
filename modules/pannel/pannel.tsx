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
import CloseIcon from "@mui/icons-material/Close";

const Pannel = () => {
  const router = useRouter();
  const currentWidth = useDataContext();
  const [Menu, setMenu] = useMenuContext();
  const [Modal, setModal] = useDialogContext();

  const isDesktop = currentWidth > 1024;

  if (isDesktop) {
    return (
      <div className={styles.container}>
        <div className={styles.pannel}>
          {ItemData.map((e) => {
            return (
              <Button
                // LinkComponent={Link}
                component={Link}
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
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Button
          onClick={() => {
            setMenu(!Menu);
          }}
        >
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </Button>
        <Fade in={Menu}>
          <div className={mStyles.container}>
            <div className={mStyles.heading}>
              <div>Menu</div>
              <Button
                onClick={() => {
                  setMenu(!Menu);
                }}
              >
                <CloseIcon sx={{ fontSize: "2rem" }} />
              </Button>
            </div>
            <div className={mStyles.pannel}>
              {ItemData.map((e) => {
                return (
                  <Button
                    LinkComponent={Link}
                    onClick={() => {
                      if (e.title === "Contact") {
                        setModal(true);
                      }
                      setMenu(false);
                    }}
                    href={e.link}
                    key={e.id}
                    className={`${mStyles.item} ${
                      router.pathname === e.link ? mStyles.active : null
                    }`}
                  >
                    <div className={mStyles.itemIcon}>{e.icon}</div>
                    <div className={mStyles.itemTitle}>{e.title}</div>
                  </Button>
                );
              })}
            </div>
          </div>
        </Fade>
      </>
    );
  }
};

export default Pannel;
