import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';
import logo from './logo.jpg';
import image from './images3.jpeg';
import partner1 from './partner1.png';
import partner2 from './partner2.png';
import partner3 from './partner3.jpg';
import partner4 from './partner4.png';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Resources from '../components/resources/resources';
import Volunteer from '../components/Volunteer/volunteer';
import Study from '../components/study/study';
import What from '../components/what/what';

function Landingpage() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');

  const handleSelect = (section) => {
    setSelected(section);
    setDropdownOpen(false);
    
    // Use a timeout to allow state updates before navigating
    setTimeout(() => {
      navigate(`/${section === 'landingpage' ? '' : section}`);
    }, 0);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Example loading logic
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className='header-container'>
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
<<<<<<< HEAD
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
          {['about', 'what', 'resources', 'volunteer', 'study', 'contact'].map((item) => (
    <p
      key={item}
      className={selected === item ? 'active' : ''}
      onClick={() => handleSelect(item)}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </p>
  ))}
=======
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Menu
            </button>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              {['about', 'what', 'resources', 'volunteer', 'contact'].map((item) => (
                <p
                  key={item}
                  className={selected === item ? 'active' : ''}
                  onClick={() => handleSelect(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              ))}
            </div>
>>>>>>> 7cf0653db9d60f1445c73bfa93b5ea7b38298ae6
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content-img" style={{ backgroundImage: `url(${image})` }}>
          <h1 className="centered-text">Jal hi Jeevan hai</h1>
          <h3 className="centered-text-2">जल ही जीवन है</h3>
        </div>

        <div className="partnership">
          <div className="partnership-content">In Partnership</div>
          <div className="partnership-content">With</div>
          <div className="partnership-div">
            <a href="https://spsjharkhand.org/" target="_blank" rel="noopener noreferrer">
              <img src={partner2} alt="partner2" />
            </a>
            <a href="https://raincentre.net/" target="_blank" rel="noopener noreferrer">
              <img src={partner1} alt="partner1" />
            </a>
            <a href="https://www.naturalsolutions.org.in/" target="_blank" rel="noopener noreferrer">
              <img src={partner3} alt="partner3" />
            </a>
            <a href="https://uthaanngo.org/" target="_blank" rel="noopener noreferrer">
              <img src={partner4} alt="partner4" />
            </a>
          </div>
        </div>
<<<<<<< HEAD
        {/* <Home/> */}
        <div className="content-display"> 
        {loading ? (
              <div className='white-text'>Loading please wait...</div>
            ) : selected === 'about' ? (
              <About />
            ) : selected === 'what' ? (
              <What/>
            ) : selected === 'resource' ? (
              <Resources />
            ) : selected === 'volunteer' ? (
              <Volunteer />
            ) : selected === 'study' ? (
              <Study/>
            ) : selected === 'contact' ? (
              <Contact/>) : null}
=======
        
        <div className="content-display">
          {loading ? (
            <div className='white-text'>Loading please wait...</div>
          ) : selected === 'about' ? (
            <About />
          ) : selected === 'what' ? (
            <What />
          ) : selected === 'resources' ? (
            <Resources />
          ) : selected === 'volunteer' ? (
            <Volunteer />
          ) : selected === 'contact' ? (
            <Contact />
          ) : null}
        </div>
>>>>>>> 7cf0653db9d60f1445c73bfa93b5ea7b38298ae6
      </div>
    </div>
  );
}

export default Landingpage;
