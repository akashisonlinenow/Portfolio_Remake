import React from "react";
import { useMenuContext } from "@context/applicationLayer";
import { Button, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ItemData from "@data/pannelData";
import mStyles from "./styles/miniPannel.module.scss";
import { useDialogContext } from "@context/fuctionalLayer";
import Link from "next/link";
import { useRouter } from 'next/router';

const MobilePannel = () => {
  const [Menu, setMenu] = useMenuContext();
  const [Modal, setModal] = useDialogContext();
  const router = useRouter();

  return (
    <>
      <Fade in={Menu}>
        <div className={mStyles.container}>
            {/* <div></div> */}
          {/* <div className={mStyles.heading}>
            <div>Menu</div>
            <Button
              onClick={() => {
                setMenu(!Menu);
              }}
            >
              <CloseIcon sx={{ fontSize: "2rem" }} />
            </Button>
          </div> */}
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
};

export default MobilePannel;
