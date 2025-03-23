import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  firebase,
  reactjs,
  express,
  pitchup,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  highschool,
  tesla,
  nextjs,
  redis,
  uni,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer science student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },

  {
    name: "nextJs",
    icon: nextjs,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },


];

const experiences = [
  {
    title: "HighSchool Student",
    company_name: "farhat hached Highschool",
    icon: highschool,
    iconBg: "#181c2e",
    date: "Sep 2020 - juin 2024",
    points: [
      "Studied Data Structures and Algorithms as a main course, developing strong problem-solving skills.",
      "Passionate about web development, built static websites and server-side rendered applications using PHP and MySQL.",
      "Had a main course in databases and achieved a 16.31/20 overall grade in the Baccalaureate exam.",
    ],
  },
  {
    title: "Computer Science Student",
    company_name: "Horizon Digital School of Technologies",
    icon: uni,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Juin 2027",
    points: [
      "Awarded a 100% scholarship for academic excellence, recognizing outstanding performance in my Computer Science degree.",
      "Participated in Nuit de l’Info, a national hackathon, collaborating on innovative solutions under time constraints.",
      "Gained expertise in full-stack development, mastering technologies like React, Next.js, Node.js, Express, Redis, and more.",
      "Consistently maintained high grades while actively developing projects in my free time, balancing academics and hands-on learning.",
    ],
  },
  {
    title: "Full stack Developer intern",
    company_name: "Your Company",
    icon: tesla,
    iconBg: "#181c2e",
    date: "- Present",
    points: [
      "waiting for you to fulfill this place ^^"
    ],
  },
];



const projects = [
  {
    name: "Pitchup startups",
    description:
      "Web-based platform that allows users to pitch, explore, and connect with startups, providing a collaborative space for discovering innovative business ideas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        icon: reactjs // Make sure this is imported at the top
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        icon: mongodb // Make sure this is imported at the top
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        icon: tailwind // Make sure this is imported at the top
      },
    ],
    image: pitchup,
    source_code_link: "https://github.com/AdamNgazzou/startups-mern-backend",
    source_link: "https://pitchup-five.vercel.app"
  }
];

export { services, technologies, experiences, projects };
