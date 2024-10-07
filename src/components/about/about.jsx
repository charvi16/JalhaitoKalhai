import React from 'react'
import './about.css';
import { useNavigate } from 'react-router-dom';

function About() {

  const navigate = useNavigate();

  const handleSelect = (section) => {
    switch (section) {
      case 'about':
        navigate('/about');
        break;
      case 'volunteer':
        navigate('/volunteer');
        break;
      case 'resources':
        navigate('/resources');
        break;
      case 'support':
        navigate('/support');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <div className="about-container">
      <div className="header">
        <div className="logo">
        </div>
        <div className="header-items">
          <p 
            className='about' 
            onClick={() => handleSelect('about')}
          >
            About 
          </p>
          <p 
            className='volunteer'
            onClick={() => handleSelect('volunteer')}
          >
            What we do
          </p>
          <p 
            className='resources'
            onClick={() => handleSelect('resources')}
          >
            Resources
          </p>
          <p 
            className='support'
            onClick={() => handleSelect('support')}
          >
            Support
          </p>
          <p 
            className='contact'
            onClick={() => handleSelect('contact')}
          >
            Contact 
          </p>
        </div>
      </div>

      <div 
          className="about1"
        >
           <h1 className="about-text">About Us</h1>
        </div>

      <div className="about-content">
        <p className='content-tagline'>Jal hai.</p>
        <p className='content-tagline'>  to kal hai</p>
        <p className='text-1'>The purpose of this website is to increase awareness amongst people about the need to
          reduce water wastage, which is one of the sustainability challenges related to the
          current water crisis.</p>
        <p className='text-2'> In an effort to support the UN's global sustainability goals, two
          Grade 8 students, Dimple Kumari and Simple Kumari, from KGBV School in Giridih,
          Jharkhand, took the initiative to prepare this project for the National Students Innovative
          Challenge, a nationwide school challenge/contest run by e-vidyaloka (website:
          https://www.evidyaloka.org/national-student-innovation-challenge).
        </p>
        <p className='text-3'>
        This project will help us serve the community at large by sharing knowledge about different ways to effectively and efficiently utilize water resources, one such is rainwater harvesting or by creating small water storages where we can store precious rainwater to be utilized later.
        </p>
      </div>

    </div>
  )
}

export default About