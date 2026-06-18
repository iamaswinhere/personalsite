import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './SelectedWork.css';

const projects = [
  {
    id: '01',
    title: 'ToDo App',
    category: 'Full Stack',
    role: 'React / Node.js',
    year: '2024',
    link: 'https://todo-gamma-virid.vercel.app',
    image: '/Todo.png'
  },
  {
    id: '02',
    title: 'Shop App',
    category: 'E-Commerce',
    role: 'React / Stripe',
    year: '2024',
    link: 'https://ecom-two-theta.vercel.app',
    image: 'https://img.freepik.com/free-vector/e-commerce-flat-concept_1284-22119.jpg'
  },
  {
    id: '03',
    title: 'Weather App',
    category: 'Utility',
    role: 'JS / API',
    year: '2024',
    link: 'https://weather-ra63.vercel.app/',
    image: '/a-minimalist-weather-app-logo-with-the-n_5kyVxDayRBmJUbmjaZ9cCQ_gEEHxPmOQ0KAF4rbOs98vg.jpeg'
  },
  {
    id: '04',
    title: 'Synapse Learn',
    category: 'Hiring / AI',
    role: 'Next.js / Tailwind',
    year: '2024',
    link: '#',
    image: '/synapseLearn.jpeg'
  },
  {
    id: '05',
    title: 'Retro Snake',
    category: 'Game',
    role: 'HTML5 / JS',
    year: '2023',
    link: 'https://iamaswinhere.github.io/Snake-Game/',
    image: '/retro_snake_game.png'
  }
];

const SelectedWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reveal section title
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );

    // Parallax & Reveal for cards
    cardsRef.current.forEach((card, i) => {
      // Reveal
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );

      // Parallax image
      const img = card.querySelector('.project-image-content');
      if(img) {
        gsap.fromTo(img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="work-section" ref={sectionRef}>
      <div className="work-header">
        <h2 ref={titleRef}>Selected Works</h2>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            ref={el => cardsRef.current[index] = el}
          >
            <div className="project-info">
              <div className="project-meta-top">
                <span>{project.id} — {project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="project-meta-bottom" style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', gap: '2rem' }}>
                <span>{project.category}</span>
                <span>{project.role}</span>
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <a href={project.link} className="gritty-button" target="_blank" rel="noreferrer" aria-label={`View ${project.title} Project`} title={`View ${project.title} Project`}>
                  View Project ↗
                </a>
              </div>
            </div>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image-content" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
