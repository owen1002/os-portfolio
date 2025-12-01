import { getSkillsByCategory } from "@/lib/utils";

export function Skills() {
  const skills = getSkillsByCategory();

  return (
    <section id="skills" className="section py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="card">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

