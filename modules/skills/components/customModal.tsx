import Image from "next/image";
import styles from "./../styles/Modal.module.scss";
import useStore from "@store/store";
import ModalBase from "@components/modal";
import SkillCard from "../components/skillCard";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useWillChange } from "framer-motion";
import { AlternateSkillVarinat, StaggeredTransition } from "@animate/framer";

const SkillModal = () => {
  const currentSelection = useStore((state) => state.currentSelection);
  const focusSelection = useStore((state) => state.focusSelection);

  const handleClickAway = () => {
    focusSelection(null);
  };

  const willChange = useWillChange();

  const OtherSkillSet = () => {
    return (
      <>
        {currentSelection?.intNode ? (
          <>
            {currentSelection?.intNode.map((e) => (
              <SkillCard
                variants={AlternateSkillVarinat}
                transition={StaggeredTransition}
                key={e.name}
                style={{ willChange } as any}
                data={e}
                className={styles.card}
                node={"true"}
              />
            ))}
          </>
        ) : null}
      </>
    );
  };

  return (
    <ModalBase
      activation={currentSelection ? true : false}
      handleClickAway={handleClickAway}
    >
      <div className={styles.modalMain}>
        <div className={styles.modalHeading}>
          <span>
            {currentSelection ? (
              <Image
                height={64}
                width={64}
                unoptimized
                src={`https://cdn.simpleicons.org/${currentSelection.iconName}`}
                alt={currentSelection.iconName}
              />
            ) : null}
          </span>
          <span>{currentSelection?.name}</span>
          <IconButton onClick={handleClickAway}>
            <CloseIcon />
          </IconButton>
        </div>
        <hr style={{ width: "100%" }} />
        <div className={styles.modalInfo}>
          <span>
            <span className={styles.modalInfoBold}>Type:</span>
            {currentSelection?.type}
          </span>
          <span>
            <span className={styles.modalInfoBold}>Proficiency:</span>
            {currentSelection?.level}
          </span>
        </div>
      </div>
      <OtherSkillSet />
    </ModalBase>
  );
};

export default SkillModal;
