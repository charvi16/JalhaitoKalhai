import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './what.css';
import logo from '../logo.jpg';

function What() {

  const navigate = useNavigate();
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');


  const handleSelect = (section) => {
    setSelected(section);
    navigate(`/${section === 'landing page' ? '' : section}`);
    // setDropdownOpen(false);
  };

  // const toggleDropdown = () => {
  //   setDropdownOpen((prev) => !prev);
  //   console.log("Dropdown open:", !dropdownOpen);
  // };

  
  return (
    <div className="action-container">
      <div className="header">
        <div className="logo">
        <img src={logo} alt="logo" onClick={() => navigate('/')} />

        </div>

      <div className="header-options">
        <div
          className={`header-item ${selected === 'about' ? 'active' : ''}`}
          onClick={() => handleSelect('about')}
        >
          बारे में
        </div>

        <div
          className={`header-item ${selected === 'what' ? 'active' : ''}`}
          onClick={() => handleSelect('what')}
        >
          हम क्या करते हैं
        </div>

        <div
          className={`header-item ${selected === 'resources' ? 'active' : ''}`}
          onClick={() => handleSelect('resources')}
        >
          संसाधन
        </div>

        <div
          className={`header-item ${selected === 'volunteer' ? 'active' : ''}`}
          onClick={() => handleSelect('volunteer')}
        >
          स्वयंसेवक
        </div>

        <div
          className={`header-item ${selected === 'contact' ? 'active' : ''}`}
          onClick={() => handleSelect('contact')}
        >
          संपर्क
        </div>
      </div>


      </div>
      <div 
          className="what1"
        >
           <h1 className="what-text">हम क्या करते हैं</h1>
        </div>

      <div className="what-content">
        <p className='what-text-1'>हमारा लक्ष्य हमारी वेबसाइट पर उनकी सामग्री का उपयोग करने या कनेक्शन का आदान-प्रदान करने के लिए घरेलू और अंतरराष्ट्रीय स्तर पर अन्य गैर-सरकारी संगठनों के साथ सहयोग करना है।</p>
        <p className='what-text-2'>इससे सभी के लिए पढ़ना आसान हो जाएगा
          हमारी वेबसाइट पर प्रचुर मात्रा में सामग्री उपलब्ध है, विशेषकर छात्रों के लिए
          अभी भी सीख रहा।
        </p>
        <p className='what-text-3'>
        कई क्षेत्रीय और राज्य स्तरीय गैर-सरकारी संगठनों ने व्यक्त किया है
          प्रकाशन साझाकरण, जल भंडारण आदि पर हमारे साथ सहयोग करने में रुचि
          वर्षा जल संचयन प्रणाली विकास, ऑनलाइन अपॉइंटमेंट शेड्यूलिंग, और
          विद्यालय भ्रमण योजना. इन संगठनों में उत्थानएनजीओ भी शामिल है
          गुड़गांव, महाराष्ट्र में प्राकृतिक समाधान और तमिल में रेनसेंटर।
        </p>
      </div>

    </div>
  );
}

export default What;
