import type { SkillTypes } from "types/DataTypes";

// ? Icons from https://simpleicons.org/ => https://github.com/simple-icons/simple-icons/blob/master/slugs.md

const SkillData: SkillTypes[] = [
  {
    name: "C",
    iconName: "c",
    level: "Intermediate",
    intNode: null,
    type: "Language",
    isLearning: false,
  },
  {
    name: "C++",
    iconName: "cplusplus",
    level: "Expert",
    intNode: [
      {
        name: "DSA",
        iconName: "dsa",
        level: "Intermediate",
        type: "Data Structures and Algorithm",
        isLearning: false,
      },
    ],
    type: "Language",
    isLearning: false,
  },

  {
    name: "HTML",
    iconName: "html5",
    level: "Expert",
    intNode: null,
    type: "Markup Language",
    isLearning: false,
  },
  {
    name: "CSS",
    iconName: "css3",
    level: "Intermediate",
    intNode: [
      {
        name: "BootStrap",
        iconName: "bootstrap",
        level: "Intermediate",
        type: "CSS Framework",
        isLearning: false,
      },
      {
        name: "Tailwind CSS",
        iconName: "tailwindcss",
        level: "Intermediate",
        type: "It is a utility-first CSS Framework",
        isLearning: true,
      },
    ],
    type: "CSS is CSS",
    isLearning: false,
  },
  {
    name: "JavaScript",
    iconName: "javascript",
    level: "Intermediate",
    intNode: [
      {
        name: "TypeScript",
        iconName: "typescript",
        level: "Beginner",
        type: "Strongly Typed Language",
        isLearning: false,
      },
    ],
    type: "Language",
    isLearning: false,
  },
  // {
  //   name: "NodeJs",
  //   iconName: "nodedotjs",
  //   level: "Beginner",
  //   intNode: [
  //     {
  //       name: "ExpressJS",
  //       iconName: "express",
  //       level: "Beginner",
  //       type: "Node Framework",
  //       isLearning: true,
  //     },
  //   ],
  //   type: "Runtime Environment",
  //   isLearning: true,
  // },
  {
    name: "React",
    iconName: "react",
    level: "Intermediate",
    intNode: [
      {
        name: "Material UI",
        iconName: "mui",
        level: "Intermediate",
        type: "React Component Library",
        isLearning: true,
      },
      
    ],
    type: "FrontEnd",
    isLearning: true,
  },
  {
    name: "MongoDB",
    iconName: "mongodb",
    level: "Beginner",
    intNode: null,
    type: "Database",
    isLearning: true,
  },
  {
    name: "Prisma",
    iconName: "prisma",
    level: "Beginner",
    intNode: null,
    type: "Server-side library used to r/w data into DB",
    isLearning: true,
  },
  {
    name: "NextJS",
    iconName: "nextdotjs",
    level: "Beginner",
    intNode: null,
    type: "React Framework",
    isLearning: true,
  },

  {
    name: "Python",
    iconName: "python",
    level: "Beginner",
    intNode: null,
    type: "Language",
    isLearning: true,
  },

  // {
  //   name: "Java",
  //   iconName: "coffeescript",
  //   level: "Intermediate",
  //   intNode: null,
  //   type: "Language",
  //   isLearning: true,
  // },
];

const ToolData: SkillTypes[] = [
  // {
  //   name: "Linux",
  //   iconName: "linux",
  //   level: "Beginner",
  //   intNode: null,
  //   type: "Operating System",
  //   isLearning: true,
  // },
  {
    name: "Git",
    iconName: "git",
    level: "Beginner",
    intNode: null,
    type: "Version Control",
    isLearning: true,
  },
  {
    name: "Github",
    iconName: "github",
    level: "Beginner",
    intNode: null,
    type: "Code hosting platform",
    isLearning: true,
  },
  
];

const getSkillData = () => {
  return { SkillData, ToolData };
};

export default getSkillData;
