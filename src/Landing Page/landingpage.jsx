import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';
import image from './images3.jpeg';
import partner1 from './partner1.png';
import partner2 from './partner2.png';
import partner3 from './partner3.jpg';
import partner4 from './partner4.png';


function Landingpage() {
  const navigate = useNavigate();

  const handleSelect = (section) => {
    switch (section) {
      case 'about':
        navigate('/about');
        break;
      case 'action':
        navigate('/action');
        break;
      case 'resources':
        navigate('/resources');
        break;
      case 'what':
        navigate('/what');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="logo">
          {/* <img src={logo} alt='logo' /> */}
        </div>
        <div className="header-items">
          <p 
            className='about' 
            onClick={() => handleSelect('about')}
          >
            About
          </p>
          <p 
            className='action'
            onClick={() => handleSelect('action')}
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
            className='what'
            onClick={() => handleSelect('what')}
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

      <div className="content">
        <div 
          className="content-img"
          style={{ backgroundImage: `url(${image})` }} 
        >
           <h1 className="centered-text">Jal hai to Kal hai</h1>
           <h3 className='centered-text-2'>जल है तो कल है</h3>
        </div>
        
        <div className="partnership">
          <div className="partnership-content">
            In Partnership with
          </div>
          <div className="parnership-div">
          <img src={partner1} alt="partner1" />
          <img src={partner2} alt="partner2" />
          <img src={partner3} alt="partner3" />
          <img src={partner4} alt="partner4" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Landingpage;
