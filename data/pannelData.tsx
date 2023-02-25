import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineBulb,
  AiOutlineIdcard,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import type { PanelTypes } from "types/DataTypes";

const _defMenu: PanelTypes[] = [
  { id: 1, title: "Home", link: "/", icon: <AiOutlineHome /> },
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
