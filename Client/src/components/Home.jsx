import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import HomeComponent from './HomeComponent';
import axios from 'axios';
import defaultimg from '../assets/img/defaultprofile.webp';

export const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1998/api/v2/getdetails");
      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar name={"Home"} />
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <HomeComponent
            key={index}
            img={item.img || defaultimg}
            name={item.name}
            blood={item.blood}
            city={item.city}
            state={item.state}
            number={item.number}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
