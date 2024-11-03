import React, { useState, useEffect } from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

function About() {
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
    <div className="about-container">
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

        {/*  */}
      </div>

      <div className="about1">
        <h1 className="about-text">हमारे बारे में</h1>
      </div>

      <div className="about-content">
        <p className='content-tagline'>Jal hai</p>
        <p className='content-tagline'>To kal hai</p>
        <p className='text-1'>
        इस वेबसाइट का उद्देश्य पानी की बर्बादी को कम करने की आवश्यकता के बारे में लोगों के बीच जागरूकता बढ़ाना है, जो वर्तमान जल संकट से संबंधित स्थिरता चुनौतियों में से एक है।
        </p>
        <p className='text-2'>
        संयुक्त राष्ट्र के वैश्विक स्थिरता लक्ष्यों का समर्थन करने के प्रयास में, झारखंड के गिरिडीह में केजीबीवी स्कूल की आठवीं कक्षा की दो छात्राओं, भारती कुमारी और सिम्पल कुमारी ने, एक राष्ट्रव्यापी स्कूल चुनौती/प्रतियोगिता, नेशनल स्टूडेंट्स इनोवेटिव चैलेंज के लिए इस परियोजना को तैयार करने की पहल की। ई-विद्यालोक  (website: 
          <a href="https://www.evidyaloka.org/national-student-innovation-challenge" target="_blank" rel="noopener noreferrer"> e-vidyaloka</a>).
        </p>
        <p className='text-3'>
        यह परियोजना हमें जल संसाधनों का प्रभावी ढंग से और कुशलतापूर्वक उपयोग करने के विभिन्न तरीकों के बारे में ज्ञान साझा करके बड़े पैमाने पर समुदाय की सेवा करने में मदद करेगी, इनमें से एक है वर्षा जल संचयन या छोटे जल भंडारण बनाना जहां हम बाद में उपयोग करने के लिए बहुमूल्य वर्षा जल को संग्रहीत कर सकते हैं।
        </p>
      </div>
    </div>
  );
}

export default About;
