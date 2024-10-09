import React, { useState } from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function About() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(''); 

  const handleSelect = (section) => {
    setSelected(section);
    switch (section) {
      case 'landingpage':
        navigate('/');  // Navigate to root path for Landingpage
        break;
      case 'about':
        navigate('/about');
        break;
      case 'what':
        navigate('/what');
        break;
      case 'resources':
        navigate('/resources');
        break;
      case 'volunteer':
        navigate('/volunteer');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        break;
    }
    setDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="about-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>
        <div className="header-items">

        <div className="header-items">
          {loading ? (
            <div className="white-text">Loading, please wait...</div>
          ) : (
            <>
              <p className={`about ${selected === 'about' ? 'active' : ''}`} onClick={() => handleSelect('about')}>About</p>
              <p className={`what ${selected === 'what' ? 'active' : ''}`} onClick={() => handleSelect('what')}>What we do</p>
              <p className={`resources ${selected === 'resources' ? 'active' : ''}`} onClick={() => handleSelect('resources')}>Resources</p>
              <p className={`volunteer ${selected === 'volunteer' ? 'active' : ''}`} onClick={() => handleSelect('volunteer')}>Volunteer</p>
              <p className={`contact ${selected === 'contact' ? 'active' : ''}`} onClick={() => handleSelect('contact')}>Contact</p>
            </>
          )}
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
                  <p onClick={() => handleSelect('about')}>About</p>
                  <p onClick={() => handleSelect('what')}>What we do</p>
                  <p onClick={() => handleSelect('resources')}>Resources</p>
                  <p onClick={() => handleSelect('volunteer')}>Volunteer</p>
                  <p onClick={() => handleSelect('contact')}>Contact</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="about1">
        <h1 className="about-text">About Us</h1>
      </div>

      <div className="about-content">
        <p className='content-tagline'>Jal hai.</p>
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
          https://www.evidyaloka.org/national-student-innovation-challenge).
        </p>
        <p className='text-3'>
          This project will help us serve the community at large by sharing knowledge about different ways to effectively and efficiently utilize water resources, one such is rainwater harvesting or by creating small water storages where we can store precious rainwater to be utilized later.
        </p>
      </div>
    </div>
  );
}

export default About;
