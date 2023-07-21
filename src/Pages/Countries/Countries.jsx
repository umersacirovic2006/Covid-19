import React from 'react'
import { useState, useEffect } from 'react';
import "./index.scss";
import { fetchCounteries, fetchHistory, fetchStatistics } from '../../api/api';
import { countryListAllIsoData } from '../../country-acronyms';

const Country = () => {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState('Serbia');
  const [date, setDate] = useState(getFormattedDate());
  const [countries, setCountries] = useState([]);

  const findCountryCodeByName = (countryName) => {
    const country = countryListAllIsoData.find(
      (country) => country.name.toLowerCase() === countryName.toLowerCase()
    );
  
    return country && country.code ? country.code.toLowerCase() : null;
  };

  const countryCode = findCountryCodeByName(country);

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
    
    <div className='country-stat'>
      <div className="inputs">
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
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
      </div>

      <div className="country-data">
        <span className='country-name'>
        
          <p >{data.country}</p>
        </span>
        <span>
          <div className="info-display">
          <p style={{color:(data.cases.new >200) ? "red" : "green"  }} >{data.cases.new}</p>
          <p>New cases:</p>
          </div>
          <div className="info-display">
          <p style={{color:(data.cases.recovered >200) ? "green" : "red"  }}>{data.cases.recovered}</p>
          <p>Recovered cases:</p>
          </div>
          <div className="info-display">
          <p style={{color:(data.deaths.new >200) ? "red" : "green"  }}>{(data.deaths.new === null ) ? "/" : data.deaths.new}</p>
          <p>New deaths:</p>
          </div>
        </span>
        <span>
          <div className="info-display">
            <p style={{color:(data.cases.active >200) ? "red" : "green"  }}> {data.cases.active}</p>
            <p>Active cases:</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Country