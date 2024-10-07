import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Landing Page/landingpage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Resources from './components/resources/resources';
import Support from './components/support/support';
import What from './components/action/action';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/action' element={<What/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
