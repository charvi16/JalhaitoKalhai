import React, { useState, useEffect } from 'react';
import './study.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Study() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');

  const handleSelect = (section) => {
    setSelected(section);
    navigate(`/${section === 'landingpage' ? '' : section}`);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="about-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>

<div className="header-options">
        <div
          className={`header-item ${selected === 'about' ? 'active' : ''}`}
          onClick={() => handleSelect('about')}
        >
          About
        </div>

        <div
          className={`header-item ${selected === 'what' ? 'active' : ''}`}
          onClick={() => handleSelect('what')}
        >
          What We Do
        </div>

        <div
          className={`header-item ${selected === 'resources' ? 'active' : ''}`}
          onClick={() => handleSelect('resources')}
        >
          Resources
        </div>

        <div
          className={`header-item ${selected === 'volunteer' ? 'active' : ''}`}
          onClick={() => handleSelect('volunteer')}
        >
          Volunteer
        </div>

        <div
          className={`header-item ${selected === 'study' ? 'active' : ''}`}
          onClick={() => handleSelect('study')}
        >
          Study Group
        </div>

        <div
          className={`header-item ${selected === 'contact' ? 'active' : ''}`}
          onClick={() => handleSelect('contact')}
        >
          Contact
        </div>
      </div>

        {/*  */}
      </div>

      <div className="about1">
        <h1 className="about-text">Study Group - Jal Rakshak</h1>
      </div>

      <div className="about-content">
        <p className='content-tagline'>Jal hi</p>
        <p className='content-tagline'>Jeevan hai</p>
        <p className='text-1'>
        Jal Rakshak or Water Protectors is a study group formed for those who would like to be a part of the water research study group. This initiative is based on recent research performed by our team members from Bangalore- Saanvi, and Anagha, who have dedicated their time to know the cause behind the inadequate water supply and sanitation facilities due to rapid urbanization in India.
        </p>
        <p className='text-2'>
          This research group is also joined by our members from Jharkhand- Bharti and Simple, trying to brainstorm together on solving the water crisis in both urban and rural areas through their rain water harvesting solution. And now, we have Saanvi Vijay Kumar and Anagha Kumble from BGS National Public School, Banglare , have also signed up for this challenge
        </p>
        <p className='text-3'>
          Come be a part of this study group and share or brainstorm your innovative solutions
        </p>
      </div>
    </div>
  );
}

export default Study;
