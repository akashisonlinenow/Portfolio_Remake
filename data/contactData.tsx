import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import styles from "@styles/Contact.module.scss";
import type { ContactTypes } from "types/DataTypes";

const _defContact: ContactTypes[] = [
  {
    id: 1,
    name: styles.mail,
    link: "mailto:akashshridharan2802@gmail.com",
    color: "hsl(5, 88%, 51%)",
    component: <AiOutlineMail className={styles.icon} />,
  },
  {
    id: 2,
    name: styles.instagram,
    link: "https://www.codechef.com/users/akash_2802",
    color: "hsl(323, 100%, 50%)",
    component: <SiCodechef className={styles.icon} />,
  },
  {
    id: 3,
    name: styles.linkedin,
    link: "https://www.linkedin.com/in/akashonlinehere",
    color: " hsl(200, 90%, 50%)",
    component: <AiOutlineLinkedin className={styles.icon} />,
  },
  {
    id: 4,
    name: styles.github,
    link: "https://github.com/akashisonlinenow",
    color: "hsl(220, 2%, 74%)",
    component: <AiFillGithub className={styles.icon} />,
  },
  {
    id: 5,
    name: styles.twitter,
    link: "https://twitter.com/Akashonlinehere",
    color: "hsl(203, 89%, 53%)",
    component: <AiOutlineTwitter className={styles.icon} />,
  },
  {
    id: 6,
    name: styles.twitter,
    link: "https://codeforces.com/profile/akashshridharan2802",
    color: "hsl(203, 89%, 53%)",
    component: <SiCodeforces className={styles.icon} />,
  },
  {
    id: 6,
    name: styles.twitter,
    link: "https://leetcode.com/akashonlinehere/",
    color: "hsl(205, 90%, 54%)",
    component: <SiLeetcode className={styles.icon} />,
  },
  
];

export default _defContact;
