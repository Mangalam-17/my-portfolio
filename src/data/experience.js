import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { FaDatabase, FaTools, FaCode } from "react-icons/fa";

export const careerSummary = {
  title: "Full Stack Developer",
  location: "Gorakhpur, UP",
  description:
    "Full Stack Developer with experience designing, building, and debugging production-grade web systems using JavaScript, Node.js, Express.js, React.js, and MongoDB. Strong in production defect resolution, automated workflows, REST APIs, and scalable systems across CRM, HRMS, and AI-integrated platforms.",
  highlights: [
    "Production-grade MERN applications",
    "CRM and HRMS workflows",
    "REST API design and integration",
    "AI-integrated platform development",
  ],
};

export const careerStats = [
  {
    value: "3+",
    label: "Years Experience",
    icon: "📅",
  },
  {
    value: "50+",
    label: "Projects Delivered",
    icon: "🚀",
  },
  {
    value: "MERN",
    label: "Stack Expert",
    icon: "⚡",
  },
  {
    value: "3",
    label: "Companies",
    icon: "🏢",
  },
];

// Tech stack with icons and colors
const techStack = {
  "MERN Stack": { icon: SiReact, color: "#61DAFB" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "REST APIs": { icon: FaCode, color: "#FF6B6B" },
  "CRM": { icon: FaDatabase, color: "#4A90E2" },
  "HRMS": { icon: FaTools, color: "#9B59B6" },
  "Full Stack": { icon: FaCode, color: "#E74C3C" },
  "APIs": { icon: FaCode, color: "#F39C12" },
  "Database Optimization": { icon: FaDatabase, color: "#16A085" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
};

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "Genkaix",
    period: "May 2026 - June 2026",
    type: "Internship",
    current: false,
    companyType: ["🚀 Startup", "💼 Remote"],
    impact: {
      highlight: "Built production-grade MERN applications",
      focus: "Scalable systems & REST API design",
    },
    stack: [
      { name: "MERN Stack", icon: techStack["MERN Stack"].icon, color: techStack["MERN Stack"].color },
      { name: "React.js", icon: techStack["React.js"].icon, color: techStack["React.js"].color },
      { name: "Node.js", icon: techStack["Node.js"].icon, color: techStack["Node.js"].color },
      { name: "Express.js", icon: techStack["Express.js"].icon, color: techStack["Express.js"].color },
      { name: "REST APIs", icon: techStack["REST APIs"].icon, color: techStack["REST APIs"].color },
    ],
    bullets: [
      "Building and maintaining production-grade full-stack applications using the MERN stack, with a focus on scalable and reliable features across frontend and backend systems.",
      "Designing and integrating RESTful APIs consumed by React.js frontends, implementing input validation, authentication mechanisms, and business logic for seamless application workflows.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "ROVO Automation India Private Limited",
    period: "Feb 2026 - April 2026",
    type: "Internship",
    current: false,
    companyType: ["🚀 Startup", "📍 On-site · Noida, UP"],
    impact: {
      highlight: "Resolved critical production defects in HRMS",
      focus: "CRM & HRMS systems development",
    },
    stack: [
      { name: "React.js", icon: techStack["React.js"].icon, color: techStack["React.js"].color },
      { name: "Node.js", icon: techStack["Node.js"].icon, color: techStack["Node.js"].color },
      { name: "Express.js", icon: techStack["Express.js"].icon, color: techStack["Express.js"].color },
      { name: "CRM", icon: techStack["CRM"].icon, color: techStack["CRM"].color },
      { name: "HRMS", icon: techStack["HRMS"].icon, color: techStack["HRMS"].color },
    ],
    bullets: [
      "Identified and resolved complex production defects in attendance workflow systems, including check-in/check-out state failures and data integrity edge cases.",
      "Engineered and maintained scalable REST APIs using Node.js and Express.js, implementing business logic, input validation, and third-party service integrations.",
      "Contributed to production CRM and HRMS systems across the full software development lifecycle, from API design to frontend delivery.",
      "Developed and improved React.js UI components and API integration layers for enhanced system usability.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Vault of Codes",
    period: "August 2025",
    type: "Internship",
    current: false,
    companyType: ["🌐 Remote", "⏱️ Contract"],
    impact: {
      highlight: "Shipped MindSpace mental wellness platform",
      focus: "API integration & performance optimization",
    },
    stack: [
      { name: "React.js", icon: techStack["React.js"].icon, color: techStack["React.js"].color },
      { name: "Full Stack", icon: techStack["Full Stack"].icon, color: techStack["Full Stack"].color },
      { name: "APIs", icon: techStack["APIs"].icon, color: techStack["APIs"].color },
      { name: "Database Optimization", icon: techStack["Database Optimization"].icon, color: techStack["Database Optimization"].color },
    ],
    bullets: [
      "Designed and shipped software modules for MindSpace, a production full-stack mental wellness platform.",
      "Integrated third-party service APIs and optimized database query performance for improved system responsiveness.",
      "Built responsive React.js frontend components following modern software development practices.",
    ],
  },
];

export const resumeProjects = [
  {
    title: "Shortlisto",
    subtitle: "Recruitment Management Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://shortlisto.vercel.app/",
    source: "https://github.com/Mangalam-17/Shortlisto",
    bullets: [
      "Architected an end-to-end recruitment platform with separate candidate and recruiter workflows, deployed to production.",
      "Designed secure REST API systems for candidate lifecycle management, assessment processing, and analytics pipelines.",
      "Implemented automated email communication workflows and backend decision-support systems for hiring teams.",
    ],
  },
  {
    title: "HR Management System",
    subtitle: "Attendance and Employee Workflow Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://rovopeople.rovoautomation.com/login",
    source: null,
    bullets: [
      "Diagnosed and resolved critical production defects in attendance state management, including check-in/check-out transitions and leave calculations.",
      "Engineered cron-based scheduled automation for daily attendance resets, ensuring system data integrity and operational reliability.",
      "Worked on production HRMS software modules covering attendance tracking, leave management, and employee workflow systems.",
    ],
  },
  {
    title: "Interview Mate",
    subtitle: "AI-Powered Interview Prep",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    live: "https://interview-mate-frontend.vercel.app/",
    source: "https://github.com/Mangalam-17/InterviewMate",
    bullets: [
      "Architected a full-stack AI-integrated platform leveraging the Gemini API for dynamic, role-specific content generation.",
      "Designed prompt engineering systems and end-to-end user workflows spanning question generation, review, and session persistence.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "NIMS University, Jaipur",
  period: "Sept 2022 - June 2026 (Expected)",
  metric: "CGPA: 8.7",
};

export const certifications = [
  {
    title: "Full Stack Development (MERN)",
    issuer: "Apna College",
    href: "http://mycourse.app/qMQKbFn3gjDpgzQjJ",
  },
];
