import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiGithub,
  SiPostman,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiNodedotjs },
      { name: "JWT Auth", icon: SiNodedotjs },
    ],
  },
  {
    title: "Databases",
    items: [{ name: "MongoDB", icon: SiMongodb }],
  },
  {
    title: "DevOps / Tools",
    items: [
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "AWS", icon: FaAws },
    ],
  },
];
