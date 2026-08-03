import reactUrl from "../assets/react.svg";
import tailUrl from "../assets/tailwind.svg";
import springBootUrl from "../assets/springboot.svg";
import mySqlUrl from "../assets/mysql.png";
import mavenUrl from "../assets/maven2.svg";

export const personalInfo = {
  name: "Ankit Kumar",
  title: "Software Developer",
  tagline: "Building full-stack web apps with Java & React",
  bio: "I'm a Software Developer with a strong interest in Java and full-stack development. I enjoy building web applications, solving Data Structures and Algorithms problems, and learning new technologies.",
  longBio:
    "I'm currently improving my skills in Java, Spring Boot, React, and DSA while building projects and preparing for Software Engineer roles. I love turning ideas into clean, working software and I'm always eager to learn something new.",
  email: "ankitkr5447@gmail.com",
  phone: "6461120273",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1kRUFsbf8sbMgCyKgS2DP86KbRF8ZeFAv/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/kumarankit1218",
    github: "https://github.com/ankitkumar910",
    twitter: "https://x.com/ankitkumr26",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  // { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  { name: "React", icon: reactUrl, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailUrl, category: "Frontend" },
  { name: "Spring Boot", icon: springBootUrl, category: "Backend" },
  { name: "MySQL", icon: mySqlUrl, category: "Database" },
  { name: "Maven", icon: mavenUrl, category: "Tools" },
];

export const skillCategories = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "React", "Tailwind CSS", "Hibernate"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Maven", "MySQL", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "Concepts",
    items: ["REST APIs", "OOP", "Data Structures", "Algorithms", "System Design Basics"],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce REST API",
    description:
      "A scalable backend API for an online store with user authentication, product catalog, cart management, and order processing built with Spring Boot.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/kumarankit1218",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Task Manager Dashboard",
    description:
      "A responsive task management app with drag-and-drop boards, priority filters, and local storage persistence. Built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/kumarankit1218",
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "DSA Problem Tracker",
    description:
      "A personal tracker for coding interview prep — log problems by topic, difficulty, and platform with progress stats and revision reminders.",
    tags: ["Java", "Data Structures", "Algorithms"],
    github: "https://github.com/kumarankit1218",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This portfolio site — a single-page React application with smooth scrolling, responsive layout, and a warm, minimal design.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/ankitkumar910",
    live: null,
    featured: false,
  },
];

export const experience = [
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    organization: "Dr. Ambedkar Institute of Technology for Divyangjan,Kanpur (UP) ",
    period: "2024 — Present",
    description:
      "Focused on software engineering, data structures, algorithms, and database management systems.",
  },
  // {
  //   type: "work",
  //   title: "Self-Directed Projects",
  //   organization: "Personal",
  //   period: "2023 — Present",
  //   description:
  //     "Building full-stack applications with Java Spring Boot and React. Practicing DSA daily on LeetCode and GeeksforGeeks.",
  // },
  // {
  //   type: "work",
  //   title: "Open Source Contributor",
  //   organization: "GitHub",
  //   period: "2024 — Present",
  //   description:
  //     "Contributing to open-source projects, improving documentation, and fixing bugs in Java and JavaScript repositories.",
  // },
];

export const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "DSA Problems", value: "200+" },
  { label: "Technologies", value: "8+" },
  { label: "Git Commits", value: "500+" },
];
