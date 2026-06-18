import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section className="about-minimal-section" ref={sectionRef}>
      <div className="about-minimal-content" ref={textRef}>
        <h2>I focus on quality and simple, clean design.</h2>
        <p>
          I build modern websites using the latest web technologies. I pay close attention to every detail to make sure the website looks great and is easy for people to use.
        </p>
      </div>
    </section>
  );
};

export default About;
