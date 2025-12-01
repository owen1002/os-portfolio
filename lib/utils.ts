import { profile } from "./profile";

// Extract unique skills from all experiences and categorize them
export function getSkillsByCategory() {
  const allSkills = new Set<string>();
  profile.experiences.forEach((exp) => {
    exp.techStack.forEach((skill) => allSkills.add(skill));
  });

  const categories: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    Database: [],
    "DevOps & Tools": [],
  };

  const skillCategories: Record<string, string> = {
    // Frontend
    TypeScript: "Frontend",
    Typescript: "Frontend",
    JavaScript: "Frontend",
    React: "Frontend",
    Redux: "Frontend",
    "Next.js": "Frontend",
    AngularJS: "Frontend",
    "Ant Design": "Frontend",
    MaterialUI: "Frontend",
    "Tailwind CSS": "Frontend",
    // Backend
    "Node.js": "Backend",
    NestJS: "Backend",
    ".NET Core": "Backend",
    GraphQL: "Backend",
    Microservices: "Backend",
    "kdb+ q": "Backend",
    // Database
    MongoDB: "Database",
    PostgreSQL: "Database",
    SQL: "Database",
    // DevOps
    Docker: "DevOps & Tools",
    AWS: "DevOps & Tools",
  };

  allSkills.forEach((skill) => {
    const category = skillCategories[skill] || "DevOps & Tools";
    if (!categories[category].includes(skill)) {
      categories[category].push(skill);
    }
  });

  return categories;
}

