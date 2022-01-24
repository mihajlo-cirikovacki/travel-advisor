import axios from 'axios';
import {
  TRAVEL_ADVISOR_API_ENDPOINT,
  WEATHER_API_ENDPONINT,
} from '../config/config';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `${TRAVEL_ADVISOR_API_ENDPOINT}${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error, '💥💥');
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat & lng) {
      const { data } = await axios.get(`${WEATHER_API_ENDPONINT}`, {
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        },
      });

      return data;
    }
  } catch (error) {
    console.error(error, '💥💥');
  }
};
