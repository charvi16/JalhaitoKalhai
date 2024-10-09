import React from 'react';
import './volunteer.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Volunteer() {

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
    <div className="volunteer-container">
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
          className="volunteer1"
        >
           <h1 className="volunteer-text">Volunteer</h1>
        </div>

      <div className="volunteer-content">
        <p className='volunteer-text-1'>THIS IS How You Can Participate.</p>
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
