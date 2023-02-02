import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineBulb,
  AiOutlineIdcard,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

export type typeData = {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
};

const _defMenu: typeData[] = [
  { id: 0, title: "Home", link: "/", icon: <AiOutlineHome /> },
  // {
  //   id: 1,
  //   title: "Timeline",
  //   link: "/#timeline",
  //   icon: <AiOutlineClockCircle />,
  // },
  { id: 2, title: "Projects", link: "/projects", icon: <AiOutlineBulb /> },
  { id: 3, title: "Skills", link: "/skills", icon: <BsCodeSlash /> },
  { id: 4, title: "About", link: "/about", icon: <AiOutlineInfoCircle /> },
  {
    id: 5,
    title: "Resume",
    link: "/resume",
    icon: <AiOutlineIdcard />,
  },
  { id: 6, title: "Contact", link: "", icon: <AiOutlineMail /> },
];

export default _defMenu;
