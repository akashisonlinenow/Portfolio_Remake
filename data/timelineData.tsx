import { FaGraduationCap, FaBirthdayCake, FaBuilding } from "react-icons/fa";
import type { TimelineTypes } from "types/DataTypes";

const _defTimeLine: TimelineTypes[] = [
  {
    id: 1,
    date: "9th Nov 2002",
    icon: <FaBirthdayCake />,
    title: "@Day Zero",
    location: null,
    info: null,
  },
  {
    id: 2,
    date: "~ to 2018",
    icon: <FaGraduationCap />,
    title: "Nashik Cambridge School",
    location: "Nashik, IN",
    info: "Schooling till 10th",
  },
  {
    id: 3,
    date: "2018 to 2020",
    icon: <FaGraduationCap />,
    title: "Matoshri Jr College",
    location: "Nashik, IN",
    info: "12th : Science Stream",
  },
  {
    id: 4,
    date: "2020 to 2024",
    icon: <FaGraduationCap />,
    title: "Government College of Engineering",
    location: "Aurangabad, IN",
    info: "B.Tech : Computer Science Engineering",
  },
  {
    id: 5,
    date: "Present",
    icon: <FaBuilding />,
    title: "Next Big Thing",
    location: null,
    info: null,
  },
];

export default _defTimeLine;

// TODO: Ask for Birthday idk
// TODO: Create a Rust Program which asks for data req in /data folder