import React, { useState, useEffect } from 'react';
import './volunteer.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Volunteer() {
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

      <div 
          className="volunteer1"
        >
           <h1 className="volunteer-text">Volunteer</h1>
        </div>

      <div className="volunteer-content">
        <p className='volunteer-text-1'>This Is How You Can Participate.</p>
        <p className='volunteer-text-2'>We appreciate your interest in volunteering for us.
        </p>
        <p className='volunteer-text-3'>
        You can assist in a number of ways, such as by assisting us in addressing online questions 
        on the water problem that we have received. You can also assist us by putting in place tiny 
        water storage or rainfall harvesting devices in our neighborhood or by making minor 
        contributions to the timely replacement of broken taps. We invite you to participate with us 
        in sharing your insightful publications or essays, as well as your creative and clever 
        solutions to the ongoing water crisis. Our goal is to keep up this momentum beyond this 
        school-level competition, as a continuing effort event. 
        </p>
      </div>
    </div>
  );
}

export default Volunteer;
