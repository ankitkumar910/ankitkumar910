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
  { id: "projects", label: "Projects" },
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
    title: "Identity Stack",
    description:
      "A user-management REST API with JWT authentication, Spring Security, and role-based access control (USER/ADMIN). Includes CRUD, validation, pagination, search, and Swagger/OpenAPI docs. Dockerized and deployed.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Docker"],
    github: "https://github.com/ankitkumar910/identity-stack",
    live: "https://identitystack.onrender.com/docs",
    featured: true,
  },
  {
    id: 2,
    title: "Shortly",
    description:
      "A URL shortener and link management platform with Redis-backed rate limiting on the shorten endpoint. Built to learn Redis in a real, working project.",
    tags: ["Java", "Spring Boot", "Redis", "React", "MySQL"],
    github: "https://github.com/ankitkumar910/Shortly",
    live: "https://shortly100.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Order Event Tracker",
    description:
      "An event-driven order processing service exploring asynchronous communication with Kafka. Tracks order lifecycle events (placed to delivered) through independent consumer groups, with a dead-letter topic for failed messages.",
    tags: ["Java", "Spring Boot", "Apache Kafka", "MySQL"],
    github: "https://github.com/ankitkumar910/order-event-tracker",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This portfolio site — a single-page React application with smooth scrolling, responsive layout, and a warm, minimal design.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/ankitkumar910/ankitkumar910",
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
];

export const stats = [
  { label: "Projects Built", value: "4" },
  { label: "Technologies", value: "13" },
  { label: "Git Commits", value: "76+" },
  { label: "GitHub Repos", value: "39+" },
];
