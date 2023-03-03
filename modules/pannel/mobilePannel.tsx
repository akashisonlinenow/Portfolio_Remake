import Fade from "@mui/material/Fade";
import Link from "next/link";
import Button from "@mui/material/Button";
import mStyles from "./styles/miniPannel.module.scss";
import ItemData from "@data/pannelData";
import useStore from "store/store";
import { useRouter } from "next/router";
import type { PanelTypes } from "types/DataTypes";

const MobilePannel = () => {
  const MenuStatus = useStore((state) => state.menuStatus);
  const SwitchMenu = useStore((state) => state.menuSwitch);
  const SwitchDialog = useStore((state) => state.dialogSwitch);
  const router = useRouter();

  const handleClick = (e: PanelTypes) => {
    if (e.title === "Contact") {
      SwitchDialog();
    }
    SwitchMenu();
  };

  return (
    <Fade in={MenuStatus}>
      <div className={mStyles.container}>
        <div className={mStyles.pannel}>
          {ItemData.map((e) => (
            <Button
              LinkComponent={Link}
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
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default MobilePannel;
