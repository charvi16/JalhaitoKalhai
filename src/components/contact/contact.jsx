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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="header-items">
          {loading ? (
            <div className="white-text">Loading, please wait...</div>
          ) : (
            <>
              {['about', 'what we do', 'resources', 'volunteer', 'contact'].map((item) => (
                <p
                  key={item}
                  className={`${item} ${selected === item ? 'active' : ''}`}
                  onClick={() => handleSelect(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              ))}
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