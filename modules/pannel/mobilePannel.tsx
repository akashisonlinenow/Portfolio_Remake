import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import mStyles from "./styles/miniPannel.module.scss";
import ItemData from "@data/pannelData";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import type { PanelTypes } from "@data/pannelData";
import useStore from "store/store";

const MobilePannel = () => {
  const MenuStatus = useStore((state) => state.menuStatus);
  const DialogStatus = useStore((state) => state.dialogStatus);
  const SwitchMenu = useStore((state) => state.menuSwitch);
  const SwitchDialog = useStore((state) => state.dialogSwitch);
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

  const handleClick = (e: PanelTypes) => {
    if (e.title === "Contact") {
      SwitchDialog();
    }
    SwitchMenu();
  };

  return (
    <AnimatePresence mode="wait">
      {MenuStatus && (
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
                  onClick={() => handleClick(e)}
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
    </AnimatePresence>
  );
};

export default MobilePannel;
