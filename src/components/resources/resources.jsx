import React from 'react'
import './resources.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Resources() {
  const navigate = useNavigate();

  const handleSelect = (section) => {
    switch (section) {
      case 'landingpage':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'volunteer':
        navigate('/volunteer');
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
    <div className="resources-container">
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

      <div className="resources1">
        <div className="resources-text">
          Resources
        </div>
      </div>
      <div className="resources-content">
        <p>For resources refer to these articles:</p>
        <div className="resources-links">
          <a href='https://www.youtube.com/watch?v=nZEP_j3-0Mo'>https://www.youtube.com/watch?v=nZEP_j3-0Mo
          </a>
          <br/>
          <a href='http://www.youtube.com/watch?v=cdiMgcY7gHA'>http://www.youtube.com/watch?v=cdiMgcY7gHA
          </a>
          <br/>
          <a href='http://www.blonnet.com/life/2010/11/12/stories/2010111250110400.htm'>http://www.blonnet.com/life/2010/11/12/stories/2010111250110400.htm
          </a>
          <br/>
          <a href='http://www.thehindu.com/features/homes-and-gardens/meet-sekhar-raghavan-chennais-rain-
            man/article6249500.ece'>http://www.thehindu.com/features/homes-and-gardens/meet-sekhar-raghavan-chennais-rain-
            man/article6249500.ece
          </a>
          <br/>
          <a href='http://www.thehindu.com/features/kids/meet-sekar-raghavan-the-rainman/article7402909.ece'>http://www.thehindu.com/features/kids/meet-sekar-raghavan-the-rainman/article7402909.ece
          </a>
          <br/>
          <a href='http://timesofindia.indiatimes.com/city/chennai/Corporates-help-city-harvest-
            rain/articleshow/48460554.cms'>http://timesofindia.indiatimes.com/city/chennai/Corporates-help-city-harvest-
            rain/articleshow/48460554.cms
          </a>
          <br/>
          <a href='http://siragu.com/?p=18695'>http://siragu.com/?p=18695</a>
          <br/>
          <a href='http://siragu.com/?p=18736'>http://siragu.com/?p=18736</a>
        </div>
      </div>
      

    </div>
  )
}

export default Resources;