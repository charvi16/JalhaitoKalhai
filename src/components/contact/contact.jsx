import React from 'react'
import './contact.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Contact() {
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
    <div className="contact-container">
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