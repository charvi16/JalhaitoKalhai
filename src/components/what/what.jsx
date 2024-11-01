import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './what.css';
import logo from '../logo.jpg';

function What() {

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');


  const handleSelect = (section) => {
    setSelected(section);
    navigate(`/${section === 'landing page' ? '' : section}`);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    console.log("Dropdown open:", !dropdownOpen);
  };

  
  return (
    <div className="action-container">
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
</div>

      </div>
      <div 
          className="what1"
        >
           <h1 className="what-text">What We Do</h1>
        </div>

      <div className="what-content">
        <p className='what-text-1'>Our goal is to collaborate with other non-governmental organizations both
          domestically and internationally in order to utilize their content or exchange
          connections on our website.</p>
        <p className='what-text-2'>This will make it easier for everyone to read through
          the wealth of material available on our website, especially for students who are
          still learning.
        </p>
        <p className='what-text-3'>
          Several regional and state-level non-governmental organizations have expressed
          interest in collaborating with us on publication sharing, water storage and
          rainwater harvesting system development, online appointment scheduling, and
          school visitation planning. Among these organizations are UthaanNGO in
          Gurgaon, Natural Solutions in Maharashtra, and RainCentre in Tamil.
        </p>
      </div>

    </div>
  );
}

export default What;
