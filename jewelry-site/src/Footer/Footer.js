import './Footer.css';
import React, { useState, useEffect } from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import { fetchWeather } from '../weather';


function Footer() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather()
      .then(data => setWeather(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <footer className="footer">
      <div className="social">
        <h2>Get connected with Us</h2>
        <div className='social-icons'>
          <a href="/"><Instagram></Instagram></a>
          <a href="/"><Facebook></Facebook></a>
          <a href="/"><Twitter></Twitter></a>
        </div>
      </div>
      <div className="weather">
        {weather ? (
          <>
            <div className='temperature'>
              <img src={`http:${weather.current.condition.icon} `} alt="Weather Icon" /> 
              <span>{weather.current.temp_c} °C</span>
            </div>
            <p>{weather.current.condition.text}</p>
          </>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>
    </footer>
  );
}

export default Footer;
