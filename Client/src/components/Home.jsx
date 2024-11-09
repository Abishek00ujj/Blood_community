import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import HomeComponent from './HomeComponent';
import axios from 'axios';
import defaultimg from '../assets/img/defaultprofile.webp';
import { LoaderIcon } from 'lucide-react';

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://blood-community-tcn0.onrender.com/api/v2/getdetails");
      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedBloodGroup === '' || item.blood === selectedBloodGroup)
  );

  return (
    <div>
      <Navbar name={"Home"} />
      {loading ? (
        <div className='w-screen h-screen flex justify-center items-center'>
          <LoaderIcon className='animate-spin'  size={50}/>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          <div className='w-screen flex justify-center m-5'>
            <input
              type="text"
              className='border border-black p-2 w-[350px] h-[50px] rounded-lg mr-5'
              placeholder='Search by name or city...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="rounded-lg border border-gray-300 p-2 w-[100px] h-[50px] text-center font-bold text-2xl"
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
            >
              <option value="">🩸</option>
              <option value="O+">O+</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          {filteredData.map((item, index) => (
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
      )}
    </div>
  );
};

export default Home;
