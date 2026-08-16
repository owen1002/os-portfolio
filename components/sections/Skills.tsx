import { getSkillsByCategory } from "@/lib/utils";

export function Skills() {
  const skills = getSkillsByCategory();

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Working stack</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="skills-category">{category}</h3>
              <ul className="skills-list">
                {categorySkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
