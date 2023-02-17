import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiNextdotjs,
  SiLinux,
  SiGit,
  SiPython,
  SiTypescript,
  SiMaterialui,
  SiBootstrap,
  SiExpress,
  SiSass,
} from "react-icons/si";

export interface SkillTypes {
  name: string;
  icon: JSX.Element;
  level: "Intermediate" | "Beginner" | "Expert";
  intNode?: SkillTypes[] | null;
  type: string;
  isLearning: boolean;
}

export const SkillData: SkillTypes[] = [
  {
    name: "C",
    icon: <SiC style={{ color: "#fff" }} />,
    level: "Intermediate",
    intNode: null,
    type: "Language",
    isLearning: false,
  },
  {
    name: "C++",
    icon: <SiCplusplus style={{ color: "#0086d4" }} />,
    level: "Intermediate",
    intNode: null,
    type: "Language",
    isLearning: false,
  },

  {
    name: "HTML",
    icon: <SiHtml5 style={{ color: "#ff6d00" }} />,
    level: "Expert",
    intNode: null,
    type: "Markup Language",
    isLearning: false,
  },
  {
    name: "CSS",
    icon: <SiCss3 style={{ color: "#2196f3" }} />,
    level: "Expert",
    intNode: [
      {
        name: "BootStrap",
        icon: <SiBootstrap style={{ color: "#a87cff" }} />,
        level: "Intermediate",
        type: "CSS Framework",
        isLearning: false,
      },
      {
        name: "Sass",
        icon: <SiSass style={{ color: "#bf4080" }} />,
        level: "Beginner",
        type: "CSS Preprocessor",
        isLearning: true,
      },
    ],
    type: "CSS is CSS",
    isLearning: false,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#f7df1e" }} />,
    level: "Intermediate",
    intNode: [
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#3178c6" }} />,
        level: "Beginner",
        type: "Strongly Typed Language",
        isLearning: false,
      },
    ],
    type: "Language",
    isLearning: false,
  },
  {
    name: "NodeJs",
    icon: <SiNodedotjs style={{ color: "#83cd29" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "ExpressJS",
        icon: <SiExpress style={{ color: "#353535" }} />,
        level: "Beginner",
        type: "Node Framework",
        isLearning: true,
      },
    ],
    type: "Runtime Environment",
    isLearning: true,
  },
  {
    name: "React",
    icon: <SiReact style={{ color: "#61dbfb" }} />,
    level: "Intermediate",
    intNode: [
      {
        name: "Material UI",
        icon: <SiMaterialui style={{ color: "#007fff" }} />,
        level: "Beginner",
        type: "React Component Library",
        isLearning: true,
      },
    ],
    type: "FrontEnd",
    isLearning: true,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#4faa41" }} />,
    level: "Beginner",
    intNode: null,
    type: "Database",
    isLearning: true,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs style={{ color: "#fff" }} />,
    level: "Beginner",
    intNode: null,
    type: "React Framework",
    isLearning: true,
  },

  {
    name: "Python",
    icon: <SiPython style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: null,
    type: "Language",
    isLearning: true,
  },
];

export const ToolData: SkillTypes[] = [
  {
    name: "Linux",
    icon: <SiLinux style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: null,
    type: "Operating System",
    isLearning: true,
  },
  {
    name: "Git",
    icon: <SiGit style={{ color: "#f05033" }} />,
    level: "Beginner",
    intNode: null,
    type: "Version Control",
    isLearning: true,
  },
];
