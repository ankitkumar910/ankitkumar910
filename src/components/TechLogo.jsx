import {
  siApachekafka,
  siApachemaven,
  siCss,
  siDocker,
  siGeeksforgeeks,
  siGit,
  siGithub,
  siHibernate,
  siHtml5,
  siIntellijidea,
  siJavascript,
  siLeetcode,
  siMysql,
  siReact,
  siRedis,
  siSpringboot,
  siSpringsecurity,
  siTailwindcss,
  siVite,
} from "simple-icons";
import {
  AccountTree,
  Api,
  Code,
  Functions,
  Hub,
  Storage,
  VpnKey,
} from "@mui/icons-material";
import javaLogo from "../assets/brands/java.svg";
import vscodeLogo from "../assets/brands/vscode.svg";
import takeUforwardLightLogo from "../assets/brands/takeuforward-light.png";
import takeUforwardDarkLogo from "../assets/brands/takeuforward-dark.png";

const logos = {
  "Apache Kafka": siApachekafka,
  "Spring Boot": siSpringboot,
  "Spring Security": siSpringsecurity,
  "Tailwind CSS": siTailwindcss,
  "Visual Studio Code": vscodeLogo,
  "VS Code": vscodeLogo,
  "IntelliJ IDEA": siIntellijidea,
  Algorithms: Functions,
  "Data Structures": AccountTree,
  "HTML/CSS": [siHtml5, siCss],
  Git: siGit,
  GitHub: siGithub,
  GeeksforGeeks: siGeeksforgeeks,
  Hibernate: siHibernate,
  Java: javaLogo,
  JavaScript: siJavascript,
  JWT: VpnKey,
  LeetCode: siLeetcode,
  Maven: siApachemaven,
  MySQL: siMysql,
  OOP: Code,
  "REST APIs": Api,
  React: siReact,
  Redis: siRedis,
  "SQL": Storage,
  "System Design Basics": Hub,
  takeUforward: "takeUforward",
  Vite: siVite,
  Docker: siDocker,
};

const conceptColors = {
  Algorithms: "#8b5cf6",
  "Data Structures": "#0ea5e9",
  JWT: "#d97706",
  OOP: "#0891b2",
  "REST APIs": "#16a34a",
  SQL: "#2563eb",
  "System Design Basics": "#db2777",
};

function SimpleIcon({ icon, size = 22 }) {
  const viewBox = icon.svg.match(/viewBox="([^"]+)"/)?.[1];
  const paths = [...icon.svg.matchAll(/<path[^>]* d="([^"]+)"/g)];

  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      fill={`#${icon.hex}`}
      height={size}
      viewBox={viewBox}
      width={size}
    >
      {paths.map(([, path], index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
}

function TechLogo({ name, size = 22, className = "" }) {
  const logo = logos[name];
  const imageClassName = `shrink-0 object-contain ${className}`;

  if (name === "takeUforward") {
    return (
      <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center ${className}`}>
        <img src={takeUforwardLightLogo} alt="" className="tuf-logo-light h-full w-full object-contain" />
        <img src={takeUforwardDarkLogo} alt="" className="tuf-logo-dark h-full w-full object-contain" />
      </span>
    );
  }

  if (typeof logo === "string") {
    return <img src={logo} alt="" className={imageClassName} height={size} width={size} />;
  }

  if (Array.isArray(logo)) {
    return (
      <span className={`inline-flex shrink-0 items-center gap-0.5 ${className}`}>
        {logo.map((icon) => (
          <SimpleIcon key={icon.slug} icon={icon} size={size * 0.8} />
        ))}
      </span>
    );
  }

  if (logo?.svg) return <SimpleIcon icon={logo} size={size} />;
  if (logo) {
    const Icon = logo;
    return (
      <Icon
        aria-hidden="true"
        className={`shrink-0 ${className}`}
        style={{ color: conceptColors[name] ?? "var(--accent-strong)", fontSize: size }}
      />
    );
  }

  return (
    <Code
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      style={{ color: conceptColors[name] ?? "var(--accent-strong)", fontSize: size }}
    />
  );
}

export default TechLogo;
