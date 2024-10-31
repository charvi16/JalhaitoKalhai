import React from 'react'
import './resources.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function Resources() {
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
    <div className="resources-container">
      <div className="header">
        <div className="logo">
        <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>
        {/* <div className="header-items">
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
        </div> */}
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
          className={`header-item ${selected === 'contact' ? 'active' : ''}`}
          onClick={() => handleSelect('contact')}
        >
          Contact
        </div>
      </div>

        {/* <div className="dropdown">
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
        </div> */}

      </div>

      <div className="resources1">
        <h1 className="resources-text">
          Resources
        </h1>
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