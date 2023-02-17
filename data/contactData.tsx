import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import styles from "@styles/Contact.module.scss";

interface ContactTypes {
  id: number;
  name: string;
  link: string;
  color?: string;
  component: JSX.Element;
}

const _defContact: ContactTypes[] = [
  {
    id: 1,
    name: styles.mail,
    link: "mailto:jayesh0071@outlook.com",
    color: "hsl(5, 88%, 51%)",
    component: <AiOutlineMail className={styles.icon} />,
  },
  {
    id: 2,
    name: styles.insta,
    link: "https://www.instagram.com/jayesh.singh09/",
    color: "hsl(323, 100%, 50%)",
    component: <AiOutlineInstagram className={styles.icon} />,
  },
  {
    id: 3,
    name: styles.linkedin,
    link: "https://www.linkedin.com/in/jayesh-singh-5376ab20b",
    color: " hsl(200, 90%, 50%)",
    component: <AiOutlineLinkedin className={styles.icon} />,
  },
  {
    id: 4,
    name: styles.github,
    link: "https://github.com/KingBael09",
    color: "hsl(220, 2%, 74%)",
    component: <AiFillGithub className={styles.icon} />,
  },
  {
    id: 5,
    name: styles.twitter,
    link: "https://twitter.com/_singh_jayesh",
    color: "hsl(203, 89%, 53%)",
    component: <AiOutlineTwitter className={styles.icon} />,
  },
];

export default _defContact;
