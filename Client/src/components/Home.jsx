import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import HomeComponent from './HomeComponent';
import axios from 'axios';
import defaultimg from '../assets/img/defaultprofile.webp';
import { LoaderIcon } from 'lucide-react';
export const Home = () => {
  const [data, setData] = useState([]);
  const [Loading,SetLoading]=useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://blood-community-tcn0.onrender.com/api/v2/getdetails");
      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally{
       SetLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar name={"Home"} />
      {
       Loading!=false ?(<div className="flex flex-wrap justify-center">
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
      </div>):(
        <div className='w-screen h-screen justify-center items-center flex'>
          <div>
          <LoaderIcon className='animate-spin'/>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default Home;
