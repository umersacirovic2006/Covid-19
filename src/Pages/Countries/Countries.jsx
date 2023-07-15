import React from 'react'
import { useState, useEffect } from 'react';
import "./index.scss";
import { fetchCounteries, fetchHistory, fetchStatistics } from '../../api/api';

const Countries = () => {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState('Serbia');
  const [date, setDate] = useState(getFormattedDate());
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await fetchCounteries(); // Call the fetchCounteries function
        const countryNames = countriesData.response; // Extract the country names from the response
        setCountries(countryNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHistory(country, date);
        setData(response.response[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [country, date]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <label>
        Country:
        <select value={country} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((countryName) => (
            <option key={countryName} value={countryName}>
              {countryName}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>

      <h2>COVID-19 Data for {data.country}</h2>
      <p>Continent: {data.continent}</p>
      <p>Total cases: {data.cases.total}</p>
      <p>New cases: {data.cases.new}</p>
      <p>Active cases: {data.cases.active}</p>
      <p>Critical cases: {data.cases.critical}</p>
      <p>Recovered cases: {data.cases.recovered}</p>
      <p>Cases per million population: {data.cases['1M_pop']}</p>
      <p>Total deaths: {data.deaths.total}</p>
      <p>New deaths: {data.deaths.new}</p>
      <p>Deaths per million population: {data.deaths['1M_pop']}</p>
      <p>Population: {data.population}</p>
      <p>Total tests: {data.tests.total}</p>
      <p>Tests per million population: {data.tests['1M_pop']}</p>
      <p>Last updated: {data.time}</p>
    </div>
  );
};

export default Countries