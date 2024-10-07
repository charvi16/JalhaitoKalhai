import React from 'react';
import './support.css';
import { useNavigate } from 'react-router-dom';

function Volunteer() {

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
    <div className="support-container">
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
    </div>
  );
}

export default Volunteer;
