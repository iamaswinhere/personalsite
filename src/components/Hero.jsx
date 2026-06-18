import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import portraitImg from '../assets/portrait.png';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const imgContainerRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Text animations
    const lines = textRef.current.querySelectorAll('.hero-line span');
    const paragraph = textRef.current.querySelector('.hero-paragraph');
    
    gsap.fromTo(lines, 
      { y: 150, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.8, 
        stagger: 0.15, 
        ease: "power4.out",
        delay: 0.2
      }
    );

    gsap.fromTo(paragraph,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.8
      }
    );

    // Scroll parallax & scale
    gsap.to(imgRef.current, {
      yPercent: 10,
      scale: 1.04,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Check if image is already cached/loaded
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (imageLoaded && imgContainerRef.current) {
      gsap.fromTo(imgContainerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
  }, [imageLoaded]);

  return (
    <section className="hero-section" ref={containerRef}>
      <div className="hero-layout">
        
        <div className="hero-content-left" ref={textRef}>
          <h1>
            <div className="hero-line"><span>ASWIN RAJ</span></div>
          </h1>
          <h2 className="hero-role">
            <div className="hero-line"><span>Creative Developer &</span></div>
            <div className="hero-line"><span>MERN Stack Engineer</span></div>
          </h2>
          <p className="hero-paragraph">
            I build fast, beautiful, and easy-to-use websites. I love creating great user experiences with clean code.
          </p>
        </div>

        <div className="hero-content-right" ref={imgContainerRef} style={{ opacity: 0 }}>
          <div className="hero-image-wrapper">
            <img 
              src={portraitImg} 
              alt="Aswin Raj - Web Developer and MERN Stack Engineer" 
              ref={imgRef} 
              onLoad={() => setImageLoaded(true)} 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
