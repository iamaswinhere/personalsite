import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './ProjectsLink.css';

const ProjectsLink = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className="projects-link-section" ref={sectionRef}>
      <div className="projects-link-content" ref={contentRef}>
        <h2>Selected Works</h2>
        <button 
          className="luxury-button"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/projects');
          }}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectsLink;
