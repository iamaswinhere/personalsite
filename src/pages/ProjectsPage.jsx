import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedWork from '../components/SelectedWork';
import Contact from '../components/Contact';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <button 
          className="back-button"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
        >
          ← Back to Home
        </button>
      </div>
      <SelectedWork />
      <Contact />
    </div>
  );
};

export default ProjectsPage;
