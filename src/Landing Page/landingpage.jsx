// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './landingpage.css';
// import logo from './logo.jpg';
// import image from './images3.jpeg';
// import partner1 from './partner1.png';
// import partner2 from './partner2.png';
// import partner3 from './partner3.jpg';
// import partner4 from './partner4.png';

// function Landingpage() {
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(true); 
//   const [selected, setSelected] = useState(''); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // Simulating loading time (you can adjust the time)
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSelect = (section) => {
//     setSelected(section);
//     switch (section) {
//       case 'landingpage':
//         navigate('/');  
//         break;
//       case 'about':
//         navigate('/about');
//         break;
//       case 'what':
//         navigate('/what');
//         break;
//       case 'resources':
//         navigate('/resources');
//         break;
//       case 'volunteer':
//         navigate('/volunteer');
//         break;
//       case 'contact':
//         navigate('/contact');
//         break;
//       default:
//         break;
//     }
//     setDropdownOpen(false);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="logo">
//           <img src={logo} alt="logo" onClick={() => navigate('/')} />
//         </div>

//         <div className="header-items">
//           {loading ? (
//             <div className="white-text">Loading, please wait...</div>
//           ) : (
//             <>
//               <p className={`about ${selected === 'about' ? 'active' : ''}`} onClick={() => handleSelect('about')}>About</p>
//               <p className={`what ${selected === 'what' ? 'active' : ''}`} onClick={() => handleSelect('what')}>What we do</p>
//               <p className={`resources ${selected === 'resources' ? 'active' : ''}`} onClick={() => handleSelect('resources')}>Resources</p>
//               <p className={`volunteer ${selected === 'volunteer' ? 'active' : ''}`} onClick={() => handleSelect('volunteer')}>Volunteer</p>
//               <p className={`contact ${selected === 'contact' ? 'active' : ''}`} onClick={() => handleSelect('contact')}>Contact</p>
//             </>
//           )}
//         </div>

//         <div className="dropdown">
//           <button className="dropdown-toggle" onClick={toggleDropdown}>
//             Menu
//           </button>
//           <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
//             {loading ? (
//               <div className="white-text">Loading, please wait...</div>
//             ) : (
//               <>
//                 <p onClick={() => handleSelect('about')}>About</p>
//                 <p onClick={() => handleSelect('what')}>What we do</p>
//                 <p onClick={() => handleSelect('resources')}>Resources</p>
//                 <p onClick={() => handleSelect('volunteer')}>Volunteer</p>
//                 <p onClick={() => handleSelect('contact')}>Contact</p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="content">
//         <div className="content-img" style={{ backgroundImage: `url(${image})` }}>
//           <h1 className="centered-text">Jal hai to Kal hai</h1>
//           <h3 className="centered-text-2">जल है तो कल है</h3>
//         </div>

//         <div className="partnership">
//           <div className="partnership-content">In Partnership</div>
//           <div className="partnership-content">with</div>
//           <div className="partnership-div">
//             <img src={partner2} alt="partner2" />
//             <img src={partner1} alt="partner1" />
//             <img src={partner3} alt="partner3" />
//             <img src={partner4} alt="partner4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landingpage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';
import logo from './logo.jpg';
import image from './images3.jpeg';
import partner1 from './partner1.png';
import partner2 from './partner2.png';
import partner3 from './partner3.jpg';
import partner4 from './partner4.png';

function Landingpage() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (section) => {
    setSelected(section);
    navigate(`/${section === 'landingpage' ? '' : section}`);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>

        <div className="header-items">
          {loading ? (
            <div className="white-text">Loading, please wait...</div>
          ) : (
            <>
              {['about', 'what', 'resources', 'volunteer', 'contact'].map((item) => (
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
        </div>

        <div className="dropdown">
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
        </div>
      </div>

      <div className="content">
        <div className="content-img" style={{ backgroundImage: `url(${image})` }}>
          <h1 className="centered-text">Jal hai to Kal hai</h1>
          <h3 className="centered-text-2">जल है तो कल है</h3>
        </div>

        <div className="partnership">
          <div className="partnership-content">In Partnership</div>
          <div className="partnership-content">with</div>
          <div className="partnership-div">
            <img src={partner2} alt="partner2" />
            <img src={partner1} alt="partner1" />
            <img src={partner3} alt="partner3" />
            <img src={partner4} alt="partner4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
