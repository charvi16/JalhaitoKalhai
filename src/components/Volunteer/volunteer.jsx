import React from 'react';
import './volunteer.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import logo from '../logo.jpg';

function Volunteer() {
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
    <div className="volunteer-container">
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

      <div 
          className="volunteer1"
        >
           <h1 className="volunteer-text">स्वयंसेवक</h1>
        </div>

      <div className="volunteer-content">
        <p className='volunteer-text-1'>इस तरह आप भाग ले सकते हैं।</p>
        <p className='volunteer-text-2'>हम हमारे लिए स्वयंसेवा में आपकी रुचि की सराहना करते हैं।
        </p>
        <p className='volunteer-text-3'>
        आप कई तरीकों से सहायता कर सकते हैं, जैसे ऑनलाइन प्रश्नों के समाधान में हमारी सहायता करना 
        पानी की समस्या पर जो हमें प्राप्त हुआ है। आप छोटे स्थान लगाकर भी हमारी सहायता कर सकते हैं 
        हमारे पड़ोस में जल भंडारण या वर्षा संचयन उपकरण या मामूली निर्माण करके 
        टूटे हुए नलों को समय पर बदलने में योगदान। हम आपको हमारे साथ भाग लेने के लिए आमंत्रित करते हैं 
        अपने ज्ञानवर्धक प्रकाशनों या निबंधों के साथ-साथ अपनी रचनात्मक और चतुराई को साझा करने में 
        चल रहे जल संकट का समाधान. हमारा लक्ष्य इस गति को इससे आगे भी बरकरार रखना है 
        एक सतत प्रयास कार्यक्रम के रूप में स्कूल-स्तरीय प्रतियोगिता।
        </p>
      </div>

    </div>
  );
}

export default Volunteer;
