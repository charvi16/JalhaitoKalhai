import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Landing Page/landingpage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Resources from './components/resources/resources';
import Volunteer from './components/Volunteer/volunteer';
import Study from './components/study/study';
import What from './components/what/what';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/what' element={<What/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/Study' element={<Study/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
