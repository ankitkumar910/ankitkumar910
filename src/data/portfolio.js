import portfolioData from "./data.json";

export const codingProfiles = portfolioData.codingProfiles;
export const githubContributions = portfolioData.githubContributions;

export const personalInfo = {
  name: "Ankit Kumar",
  first_name: "Ankit",
  title: "Java Backend / Full-Stack Developer",
  tagline: "Open to internships — Java, Spring Boot & React",
  bio:
    "I'm a 3rd-year CS student (5th semester) who builds backend systems in Java and Spring Boot, and full-stack apps with React. I'm currently looking for an internship, and spend most of my free time solving DSA problems in Java and working on projects I can actually explain in an interview.",
  longBio:
    "Right now I'm working through Spring Security, Redis, and Kafka basics, and trying to build something real with each one instead of just following along with tutorials — Shortly (a URL shortener) came out of learning Redis, and Order Event Tracker came out of learning Kafka. Most of my backend work so far has gone into Identity Stack, a user-management API with JWT auth and role-based access, which I'm now adding test coverage to. I'm not restricting myself to backend-only roles — I'm open to full-stack or frontend internships too, as long as I can genuinely contribute from day one.",
  email: "ankitkr5447@gmail.com",
  phone: "6461120273",
  location: "Kanpur, India",
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
  { id: "coding", label: "Coding" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const navSectionIds = navLinks.map((link) => link.id);

export const skills = [
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Spring Security", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Docker", category: "Tools" },
  { name: "Maven", category: "Tools" },
];

export const skillCategories = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring Security", "Hibernate / JPA", "React", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Docker", "Redis", "Maven", "MySQL", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "Concepts",
    items: [
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "OOP",
      "Data Structures",
      "Algorithms",
      "System Design Basics",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Identity Stack",
    description:
      "A user-management REST API with JWT authentication, Spring Security, and role-based access control (USER/ADMIN). Includes CRUD, validation, pagination, search, and Swagger/OpenAPI docs. Dockerized and deployed, and currently getting JUnit/Mockito test coverage across the service, controller, and repository layers.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Docker"],
    github: "https://github.com/ankitkumar910/identity-stack",
    live: "https://identitystack.onrender.com/docs",
    featured: true,
  },
  {
    id: 2,
    title: "Shortly",
    description:
      "A URL shortener with Redis-backed rate limiting on the shorten endpoint. Built mainly to actually learn Redis instead of just reading about it — shortening, redirects, and TTL expiry.",
    tags: ["Java", "Spring Boot", "Redis", "React", "MySQL"],
    github: "https://github.com/ankitkumar910/Shortly",
    live: "https://shortly100.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Order Event Tracker",
    description:
      "An event-driven order processing service built to learn Kafka. Tracks the order lifecycle (placed through delivered) using order ID as the message key, with two independent consumer groups and a dead-letter topic for failed messages.",
    tags: ["Java", "Spring Boot", "Apache Kafka", "MySQL"],
    github: "https://github.com/ankitkumar910/order-event-tracker",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "Pennat",
    description:
      "A full-stack blogging platform with Google OAuth login, full-text search, and a follow system. It's a fairly basic blogging app at its core, but it's fully deployed and something I built end-to-end on both the frontend and backend.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    github: null,
    live: "https://pennat.vercel.app/home",
    featured: false,
  },
  {
    id: 5,
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
    organization: "Dr. Ambedkar Institute of Technology for Divyangjan, Kanpur (UP)",
    period: "2024 — Present",
    description:
      "Currently in 5th semester. Focused on Java backend development (Spring Boot, Spring Security, JPA/Hibernate), data structures and algorithms, and database management systems, alongside hands-on projects outside the regular coursework.",
  },
];

export const stats = [
  { label: "Projects Built", value: "5" },
  { label: "DSA Problems Solved", value: "726+" },
  { label: "Technologies", value: "15+" },
  { label: "Git Commits", value: "76+" },
  { label: "GitHub Repos", value: "39+" },
];