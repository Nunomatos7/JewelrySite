import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router> 
  );
}



export default App;