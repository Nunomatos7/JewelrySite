import { apiKey } from './api-setup.js';
import { apiUrl } from './api-setup.js';

const fetchWeather = async (city) => {
  const url = `${apiUrl}?key=${apiKey}&q=auto:ip`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    const data = await response.json();
    return {
      location: {
        name: data.location.name,
        country: data.location.country,
      },
      current: {
        temp_c: data.current.temp_c,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
        },
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchWeather };
