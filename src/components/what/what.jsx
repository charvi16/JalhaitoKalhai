import React from 'react';
import './what.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function What() {

  const navigate = useNavigate();

  const handleSelect = (section) => {
    switch (section) {
      case 'landingpage':
        navigate('/');
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
  };

  return (
    <div className="action-container">
      <div className="header">
        <div className="logo">
        <img src={logo} alt="logo" onClick={() => navigate('/')} />

        </div>
        <div className="header-items">
          <p 
            className='about' 
            onClick={() => handleSelect('about')}
          >
            About 
          </p>
          <p 
            className='what'
            onClick={() => handleSelect('what')}
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
            className='volunteer'
            onClick={() => handleSelect('volunteer')}
          >
            Volunteer
          </p>
          <p 
            className='contact'
            onClick={() => handleSelect('contact')}
          >
            Contact 
          </p>
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
