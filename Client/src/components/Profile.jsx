import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import defaultimg from '../assets/img/defaultprofile.webp';
import { Link, Navigate } from 'react-router-dom';
import { LoaderIcon } from 'lucide-react';

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const id = sessionStorage.getItem('id');
      console.log("Fetched ID:", id);
      const response = await axios.get(`https://blood-community-tcn0.onrender.com/api/v2/getdetails/${id}`);
      console.log("API Response:", response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch profile details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading && !data) {
    return <Navigate to="/adddetails" />;
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        {loading ? (
          <p className="animate-spin"><LoaderIcon /></p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          data && (
            <>
              <div className="flex justify-center items-center w-full mt-4">
                <img
                  src={data.img || defaultimg}
                  alt="Profile"
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[180px] md:h-[180px] lg:w-[150px] lg:h-[150px] object-cover rounded-full"
                />
              </div>
              <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[40%] flex flex-col bg-black text-white p-6 rounded-lg shadow-lg mt-5">
                <p className="text-2xl font-semibold">{data.name}</p>
                <p className="text-lg">Blood Group: {data.blood}</p>
                <p className="text-lg">City: {data.city}</p>
                <p className="text-lg">State: {data.state}</p>
                <p className="text-lg">Date of Birth: {data.dob}</p>
                <p className="text-lg">Acadamic Year: {data.year}</p>
                <p className="text-lg">Contact Number: {data.number}</p>
              </div>
              <div className='flex max-sm:flex-col w-screen justify-center items-center'>
                <Link to="/home">
                  <button className='p-5 bg-red-500 text-white rounded-2xl m-5'>Find Blood🩸</button>
                </Link>
                <Link to="/news">
                  <button className='p-5 bg-green-500 text-white rounded-2xl m-5'>Health News🗞️</button>
                </Link>
                <Link to="/reqblood">
                  <button className='p-5 bg-green-500 text-white rounded-2xl m-5'>Request an Emergency post📤</button>
                </Link>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};

export default Profile;
