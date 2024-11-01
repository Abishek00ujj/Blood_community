import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import blood2 from '../assets/img/blood2.png';
export const RootPage=()=> 
  {
  return (
    <>
      <div>
        <Navbar name={"Life Saver"}/>
        <div className='w-screen h-screen flex flex-col justify-center items-center' id='mainPage'>
          <div className='text-center mb-8'>
            <p className='text-4xl'>Donate blood, be a lifesaver</p>
          </div>
          <div className='flex justify-center items-center space-x-8'>
            <img src={blood2} className='w-[40%]' alt="Blood Donation" />
            <div className='flex flex-col space-y-4 border-2 border-black p-5 rounded-lg backdrop-brightness-90'>
              <Link to="/login">
                <button className='bg-black text-white p-3 rounded-lg w-[20vw]'>
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className='bg-black text-white p-3 rounded-lg w-[20vw]'>
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div>EMERGENCY</div>
        </div>
        <div className='w-screen h-auto flex justify-center'>
        </div>
        <div className='w-screen h-auto flex justify-center mb-32'>
        <Link to="/news">
            <button className='bg-black p-5 text-white rounded-3xl'>Health News</button>
       </Link>
        </div>
      </div>
    </>
  );
};

export default RootPage;
