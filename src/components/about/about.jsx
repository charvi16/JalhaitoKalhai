import React, { useState, useEffect } from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function About() {
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
          className={`header-item ${selected === 'contact' ? 'active' : ''}`}
          onClick={() => handleSelect('contact')}
        >
          Contact
        </div>
      </div>

        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            {loading ? (
              <div className="white-text">Loading, please wait...</div>
            ) : (
              <>
                {['about', 'what', 'resources', 'volunteer', 'contact'].map((item) => (
                  <p
                    key={item}
                    className={selected === item ? 'active' : ''}
                    onClick={() => handleSelect(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="about1">
        <h1 className="about-text">About Us</h1>
      </div>

      <div className="about-content">
        <p className='content-tagline'>Jal hai</p>
        <p className='content-tagline'>To kal hai</p>
        <p className='text-1'>
          The purpose of this website is to increase awareness amongst people about the need to
          reduce water wastage, which is one of the sustainability challenges related to the
          current water crisis.
        </p>
        <p className='text-2'>
          In an effort to support the UN's global sustainability goals, two
          Grade 8 students, Dimple Kumari and Simple Kumari, from KGBV School in Giridih,
          Jharkhand, took the initiative to prepare this project for the National Students Innovative
          Challenge, a nationwide school challenge/contest run by e-vidyaloka (website: 
          <a href="https://www.evidyaloka.org/national-student-innovation-challenge" target="_blank" rel="noopener noreferrer"> e-vidyaloka</a>).
        </p>
        <p className='text-3'>
          This project will help us serve the community at large by sharing knowledge about different ways to effectively and efficiently utilize water resources, one such is rainwater harvesting or by creating small water storages where we can store precious rainwater to be utilized later.
        </p>
      </div>
    </div>
  );
}

export default About;
