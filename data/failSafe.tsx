interface userTypes {
  avatar_url: string;
  html_url: string;
}

interface licenseType {
  key: string;
  name: string;
}

export interface SafeTypes {
  id: number;
  name: string;
  full_name: string;
  owner: userTypes;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  clone_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number | string;
  watchers_count: number | string;
  language: string | null;
  forks_count: number | string;
  forks: number | string;
  topics: string[];
  watchers: number;
  // Extra
  languages_url: string;
  created_at: string;
  updated_at: string;
  archived: boolean;
  open_issues: number;
  license: licenseType | null;
}

const _defSafe: SafeTypes[] = [
  {
    id: 5503169678,
    name: "API Failed",
    full_name: "API Failed/Something Went Wrong",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09",
    description:
      "If you are seeing this, then someting went wrong (API Limit Reached). Try again Later",
    fork: false,
    url: "https://exmaple.com,",
    languages_url: "lol",
    created_at: "2022-10-12T14:55:46Z",
    updated_at: "2023-02-01T19:51:34Z",
    clone_url: "Apologies",
    homepage: "",
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: "404",
    forks_count: 0,
    archived: false,
    license: null,
    topics: [],
    forks: 0,
    open_issues: 0,
    watchers: 0,
  },
  {
    id: 507264809,
    name: "Algorithms",
    full_name: "KingBael09/Algorithms",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/Algorithms",
    description: "Various Algorithms in C/CPP",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/Algorithms",
    languages_url:
      "https://api.github.com/repos/KingBael09/Algorithms/languages",
    created_at: "2022-06-25T09:11:48Z",
    updated_at: "2023-02-01T19:51:25Z",
    clone_url: "https://github.com/KingBael09/Algorithms.git",
    homepage: "",
    size: 30,
    stargazers_count: 3,
    watchers_count: 3,
    language: "C++",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["algorithms", "c", "cpp"],
    forks: 0,
    open_issues: 0,
    watchers: 3,
  },
  {
    id: 507201510,
    name: "DataStructures",
    full_name: "KingBael09/DataStructures",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/DataStructures",
    description: "Various Data Structures in C/CPP",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/DataStructures",
    languages_url:
      "https://api.github.com/repos/KingBael09/DataStructures/languages",
    created_at: "2022-06-25T03:13:50Z",
    updated_at: "2023-02-01T19:51:26Z",
    clone_url: "https://github.com/KingBael09/DataStructures.git",
    homepage: "",
    size: 23,
    stargazers_count: 2,
    watchers_count: 2,
    language: "C",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["c", "cpp", "dsa"],
    forks: 0,
    open_issues: 0,
    watchers: 2,
  },
  {
    id: 588532515,
    name: "Grade-Calculator",
    full_name: "KingBael09/Grade-Calculator",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/Grade-Calculator",
    description: "CGPA Calculator Utility",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/Grade-Calculator",
    languages_url:
      "https://api.github.com/repos/KingBael09/Grade-Calculator/languages",
    created_at: "2023-01-13T10:54:53Z",
    updated_at: "2023-02-01T19:51:27Z",
    clone_url: "https://github.com/KingBael09/Grade-Calculator.git",
    homepage: "https://cgpa-utility.vercel.app/",
    size: 83,
    stargazers_count: 4,
    watchers_count: 4,
    language: "TypeScript",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["mui", "nextjs", "scss"],
    forks: 0,
    open_issues: 0,
    watchers: 4,
  },
  {
    id: 573811457,
    name: "JSON_Server",
    full_name: "KingBael09/JSON_Server",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/JSON_Server",
    description: "A demo repository for My JSON Server ",
    fork: true,
    url: "https://api.github.com/repos/KingBael09/JSON_Server",
    languages_url:
      "https://api.github.com/repos/KingBael09/JSON_Server/languages",
    created_at: "2022-12-03T14:06:32Z",
    updated_at: "2023-02-17T05:51:02Z",
    clone_url: "https://github.com/KingBael09/JSON_Server.git",
    homepage: "https://my-json-server.typicode.com/typicode/demo",
    size: 10,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    forks_count: 0,
    archived: false,
    license: {
      key: "mit",
      name: "MIT License",
    },
    topics: [],
    forks: 0,
    open_issues: 0,
    watchers: 2,
  },
  {
    id: 550392497,
    name: "KingBael09",
    full_name: "KingBael09/KingBael09",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/KingBael09",
    description: "Be Logical, For Syntax There is Google....!!",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/KingBael09",
    languages_url:
      "https://api.github.com/repos/KingBael09/KingBael09/languages",
    created_at: "2022-10-12T17:29:23Z",
    updated_at: "2023-02-01T19:51:29Z",
    clone_url: "https://github.com/KingBael09/KingBael09.git",
    homepage: null,
    size: 22,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    forks_count: 0,
    archived: false,
    license: null,
    topics: [],
    forks: 0,
    open_issues: 0,
    watchers: 2,
  },
  {
    id: 507203902,
    name: "Notes",
    full_name: "KingBael09/Notes",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/Notes",
    description: "My B.Tech Notes",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/Notes",
    languages_url: "https://api.github.com/repos/KingBael09/Notes/languages",
    created_at: "2022-06-25T03:29:40Z",
    updated_at: "2023-02-01T19:51:30Z",
    clone_url: "https://github.com/KingBael09/Notes.git",
    homepage: "",
    size: 138840,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    forks_count: 0,
    archived: false,
    license: null,
    topics: [],
    forks: 0,
    open_issues: 0,
    watchers: 2,
  },
  {
    id: 576891900,
    name: "Portfolio",
    full_name: "KingBael09/Portfolio",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/Portfolio",
    description: "My Portfolio website in react",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/Portfolio",
    languages_url:
      "https://api.github.com/repos/KingBael09/Portfolio/languages",
    created_at: "2022-12-11T10:30:54Z",
    updated_at: "2023-02-01T19:51:31Z",
    clone_url: "https://github.com/KingBael09/Portfolio.git",
    homepage: "https://jayeshsingh.netlify.app/",
    size: 1135,
    stargazers_count: 3,
    watchers_count: 3,
    language: "TypeScript",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["react", "ts-react"],
    forks: 0,
    open_issues: 0,
    watchers: 3,
  },
  {
    id: 596444703,
    name: "Portfolio_Remake",
    full_name: "KingBael09/Portfolio_Remake",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/Portfolio_Remake",
    description: "Remake of my original Portfolio using Next.js & SCSS",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/Portfolio_Remake",
    languages_url:
      "https://api.github.com/repos/KingBael09/Portfolio_Remake/languages",
    created_at: "2023-02-02T07:40:22Z",
    updated_at: "2023-02-07T14:00:21Z",
    clone_url: "https://github.com/KingBael09/Portfolio_Remake.git",
    homepage: "",
    size: 376,
    stargazers_count: 3,
    watchers_count: 3,
    language: "TypeScript",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["mui", "nextjs", "scss"],
    forks: 0,
    open_issues: 1,
    watchers: 3,
  },
  {
    id: 573872936,
    name: "prototype-card",
    full_name: "KingBael09/prototype-card",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/prototype-card",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/KingBael09/prototype-card",
    languages_url:
      "https://api.github.com/repos/KingBael09/prototype-card/languages",
    created_at: "2022-12-03T17:46:27Z",
    updated_at: "2023-02-17T05:51:04Z",
    clone_url: "https://github.com/KingBael09/prototype-card.git",
    homepage: "",
    size: 308,
    stargazers_count: 2,
    watchers_count: 2,
    language: "JavaScript",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["demo", "react"],
    forks: 0,
    open_issues: 0,
    watchers: 2,
  },
  {
    id: 507236469,
    name: "PythonProjects",
    full_name: "KingBael09/PythonProjects",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/PythonProjects",
    description: "Basic Snake Game in Python",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/PythonProjects",
    languages_url:
      "https://api.github.com/repos/KingBael09/PythonProjects/languages",
    created_at: "2022-06-25T06:47:18Z",
    updated_at: "2023-02-01T19:51:33Z",
    clone_url: "https://github.com/KingBael09/PythonProjects.git",
    homepage: "",
    size: 3,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Python",
    forks_count: 0,
    archived: false,
    license: null,
    topics: ["game", "python"],
    forks: 0,
    open_issues: 0,
    watchers: 2,
  },
  {
    id: 550316967,
    name: "Student-Dex",
    full_name: "KingBael09/Student-Dex",
    owner: {
      avatar_url: "https://avatars.githubusercontent.com/u/84223691?v=4",
      html_url: "https://github.com/KingBael09",
    },
    private: false,
    html_url: "https://github.com/KingBael09/Student-Dex",
    description: "Student Management Information Software ",
    fork: false,
    url: "https://api.github.com/repos/KingBael09/Student-Dex",
    languages_url:
      "https://api.github.com/repos/KingBael09/Student-Dex/languages",
    created_at: "2022-10-12T14:55:46Z",
    updated_at: "2023-02-01T19:51:34Z",
    clone_url: "https://github.com/KingBael09/Student-Dex.git",
    homepage: "",
    size: 183,
    stargazers_count: 3,
    watchers_count: 3,
    language: "JavaScript",
    forks_count: 1,
    archived: false,
    license: null,
    topics: ["expressjs", "mongodb", "nextjs", "nodejs"],
    forks: 1,
    open_issues: 0,
    watchers: 3,
  },
];

export default _defSafe;
