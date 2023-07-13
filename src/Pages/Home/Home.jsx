import React, { useEffect, useState } from "react";
import "./index.scss";
import { fetchHistory } from "../../api/api";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHistory("serbia", "2023-07-12");
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
        <div>
          <h2>COVID-19 Data for Serbia - {data.response[0].day}</h2>
          <p>New Cases: {data.response[0].cases.new || "N/A"}</p>
          <p>Total Cases: {data.response[0].cases.total}</p>
          <p>Active Cases: {data.response[0].cases.active}</p>
          <p>Recovered: {data.response[0].cases.recovered}</p>
          <p>Total Deaths: {data.response[0].deaths.total}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Home;
