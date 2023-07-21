import axios from "axios";

const api = axios.create({
  baseURL: 'https://covid-193.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'cca8a610e8msh3412e54e4496bf1p1c57f2jsna0d7515e9c32',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
});

// Comments are used for separation... bc I am blind

// Counteries

export const fetchCounteries = async () => {
  try {
    const response = await api.get('/countries');
    console.log(response.data.response)
    return response.data; 
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Statistics

export const fetchStatistics = async () => {
  try {
    const response = await api.get('/statistics');
    return response.data
  } catch (error) {
    console.error(error);
  }
};

// History - Home Page

export const fetchHistory = async (country, day) => {
  try {
    const response = await api.get('/history', {
      params: {
        country,
        day
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};