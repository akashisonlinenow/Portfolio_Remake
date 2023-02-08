import React from "react";
import { useMenuContext } from "@context/applicationLayer";
import { Button, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ItemData from "@data/pannelData";
import mStyles from "./styles/miniPannel.module.scss";
import { useDialogContext } from "@context/fuctionalLayer";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";

const MobilePannel = () => {
  const [Menu, setMenu] = useMenuContext();
  const [Modal, setModal] = useDialogContext();
  const router = useRouter();

  const mPannelVariants: Variants = {
    hidden: { y: "-100%" },
    visibile: { y: 0 },
    exit: { y: "-100%", transition: { duration: 0.5 } },
  };

  const mPannelTransition: Transition = {
    type: "spring",
    stiffness: 150,
    damping: 25,
    staggerChildren: 0.1,
  };

  const mPannelChildren: Variants = {
    hidden: { opacity: 0, y: -100 },
    visibile: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: -100 },
  };

  const mPannelChildTransition: Transition = {
    type: "spring",
    bounce: 0.2,
  };

  const MotionLink = motion(Link);

  return (
    <AnimatePresence mode="wait">
      {/* <Fade in={Menu}> */}
      {Menu && (
        <motion.div
          variants={mPannelVariants}
          initial="hidden"
          animate="visibile"
          exit="exit"
          transition={mPannelTransition}
          className={mStyles.container}
        >
          <div className={mStyles.pannel}>
            {ItemData.map((e) => {
              return (
                <Button
                  // LinkComponent={Link}
                  component={MotionLink}
                  variants={mPannelChildren}
                  transition={mPannelChildTransition}
                  key={e.id}
                  onClick={() => {
                    if (e.title === "Contact") {
                      setModal(true);
                    }
                    setMenu(false);
                  }}
                  href={e.link}
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
        </motion.div>
      )}
      {/* </Fade> */}
    </AnimatePresence>
  );
};

export default MobilePannel;
