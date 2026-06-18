import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Skills.css';

const skillCategories = [
  {
    category: "Engineering",
    skills: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "Express", "WebGL"]
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX", "Motion Design", "Interaction Design", "Wireframing"]
  },
  {
    category: "Tools & Systems",
    skills: ["Git", "Docker", "Vite", "Framer Motion", "GSAP", "EmailJS"]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (item) {
        gsap.fromTo(item,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <h2> Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <div
              className="skill-category-block"
              key={index}
              ref={el => itemsRef.current[index] = el}
            >
              <div className="skill-meta">
                <span>0{index + 1}</span>
              </div>
              <div className="skill-content">
                <h3>{group.category}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
