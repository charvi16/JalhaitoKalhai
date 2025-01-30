import React from 'react'
import './contact.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Contact() {
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
    <div className="contact-container">
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

      </div>

      <div className="contact1">
        <h1 className="contact-text">
        Contact Us
        </h1>
      </div>
      <div className="contact-content">
        <div className="contact-1">
        Kindly Mail us for any suggestions or questions at:
        </div>
        <div className="email">
          <br/>
        <a href="mailto:jalhaitohkalhaihelpdesk@gmail.com">jalhaitohkalhaihelpdesk@gmail.com</a>

        </div>
      </div>
      

    </div>
  )
}

export default Contact;