import React from 'react';
import './action.css';
import { useNavigate } from 'react-router-dom';

function What() {

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
    <div className="action-container">
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
      {/* <div 
          className="action1"
        >
           <h1 className="action-text">About Us</h1>
        </div>

      <div className="action-content">
        <p className='action-text-1'>Our goal is to collaborate with other non-governmental organizations both
          domestically and internationally in order to utilize their content or exchange
          connections on our website.</p>
        <p className='action-text-2'>This will make it easier for everyone to read through
          the wealth of material available on our website, especially for students who are
          still learning.
        </p>
        <p className='action-text-3'>
          Several regional and state-level non-governmental organizations have expressed
          interest in collaborating with us on publication sharing, water storage and
          rainwater harvesting system development, online appointment scheduling, and
          school visitation planning. Among these organizations are UthaanNGO in
          Gurgaon, Natural Solutions in Maharashtra, and RainCentre in Tamil.
        </p>
      </div> */}

    </div>
  );
}

export default What;
