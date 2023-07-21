import React, { useState, useEffect, useRef } from 'react';
import { fetchCounteries, fetchStatistics } from '../../api/api';
import './index.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { countryListAllIsoData } from '../../country-acronyms';

const CovidStats = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statisticsData = await fetchStatistics();
        setData(statisticsData.response); // Save the response data into the state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  // Calculate the range of items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data && data.slice(indexOfFirstItem, indexOfLastItem);

  const findCountryCodeByName = (countryName) => {
    const country = countryListAllIsoData.find(
      (country) => country.name.toLowerCase() === countryName.toLowerCase()
    );

    return country && country.code ? country.code.toLowerCase() : null;
  };

  // Handle pagination page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="countries-page" ref={pageRef}>
      {/* Render data here */}
      {currentItems &&
        currentItems.map((item, index) => {
          const countryCode = findCountryCodeByName(item.country);

          return (
            <div className='country-card' key={index}>
              <div className="country-data">
                <div className="country-name">
                  <p className='name'>
                    <span className='stat'>{item.country}</span>{' '}
                  </p>
                  
                </div>
                <div className='country-stats'>
                  <p>
                    Population: <span className='stat'>{item.population}</span>
                  </p>
                  <p>
                    New Cases:
                    <span className='stat'>
                      {(item.cases.new === null) ? '0' : item.cases.new}
                    </span>
                  </p>
                  <p>
                    Total Deaths:{' '}
                    <span className='stat'>
                      {(item.deaths.total === null) ? "/" : item.deaths.total}
                    </span>
                  </p>
                </div>
              </div>

              <img src={`https://flagcdn.com/w320/${countryCode}.png`} alt={item.country} />

            </div>
          );
        })}

      {/* Pagination */}
      <div className="pagination">
        {data && (
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                color="primary"
                page={currentPage}
                count={Math.ceil(data.length / itemsPerPage)}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default CovidStats;
