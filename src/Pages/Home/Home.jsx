import React, { useEffect, useState } from "react";
import "./index.scss";
import { fetchHistory } from "../../api/api";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHistory("all", "2023-07-12");
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      {data ? (
        <div className="history">
          <img
            src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
            alt="world map"
          />
          <h1>World Stats</h1>
          <div className="data">
            <div className="cards">
              Recovered:
              <div style={{ color: "green", fontSize: '24px' }}>
                {data.response[0].cases.recovered}
              </div>
            </div>
            <div className="cards">
              Total Deaths:
              <div style={{ color: "red", fontSize: '24px' }}>
                {data.response[0].deaths.total}
              </div>
            </div>
            <div className="cards">
              Active Cases:
              <div style={{ color: "blue", fontSize: '24px' }}>
                {data.response[0].cases.active}
              </div>
            </div>
            <div className="cards">
              <NavLink to="/country"><p style={{fontSize: '24px', fontWeight: '600'}}>Country stats</p></NavLink>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="loading" />
          <h3>Loading data...</h3>
        </>
      )}
    </div>
  );
};

export default Home;
