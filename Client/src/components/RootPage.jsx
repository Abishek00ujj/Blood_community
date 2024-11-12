import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import blood2 from '../assets/img/blood2.png';
import Timeimg from '../assets/img/picimage.gif';
import EmergencyCard from './EmergencyCard';
import BloodCampCard from './BloodCampcard';
import Footer from './Footer';
import axios from 'axios';

export const RootPage = () => {
  const [Edata, setEdata] = useState([]);
  const [Cdata, setCdata] = useState([]);

  const getData = async () => {
    try {
      const response1 = await axios.get("http://localhost:1998/api/v3/getepost");
      const response2 = await axios.get("http://localhost:1998/api/v3/getcpost");
      setEdata(response1.data.data);
      setCdata(response2.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Navbar name={"Life Saver"} />
        <div className='pt-5 h-auto'>
          <marquee behavior="" direction="left">
            <p className='font-semibold'>
              நேர்மறை ரத்த தான தாதைகளை ஒன்றுபடுத்தும் Blood Community என்பது எங்கள் கல்லூரியில் அவசர உதவிகளை எளிதாக்கும் ஒரு தளம் ஆகும். இந்த முயற்சி, தாதைகள் மற்றும் அவசர தேவையுள்ளவர்களை இணைத்து, தகவல்களை ஒருங்கிணைக்கச் செய்கிறது. பயனர் தங்களது ரத்த வகை மற்றும் இருப்பிடத்தை பதிவு செய்யும் வசதியுடன், அவசர காலத்தில் தேவையான தாதைகளைத் துல்லியமாகவும் நம்பகமாகவும் கண்டறிய உதவுகிறது. நேரடி தகவல் பகிர்வு மற்றும் தேடல் வசதிகளின் மூலம், மாணவர்களும் பணி நியமனர்களும் தேவையான ரத்த வகைகளை விரைவாகப் பெறலாம். இது கொயம்புத்தூரில் உள்ள ஸ்ரீ சக்தி இன்ஸ்டிடியூட் ஆஃப் எஞ்சினீயரிங் மற்றும் டெக்னாலஜியின் பி.டெக் தகவல் தொழில்நுட்ப மாணவர் அபிஷேக் உருவாக்கிய சிறப்பான முயற்சி ஆகும். ஒவ்வொரு கல்லூரியும் இத்தகைய தளங்களை பயன்படுத்தி அவசர நிலைகளில் விரைவாக உதவ உதவ வேண்டும் என்பதே குறிக்கோள். Blood Community தளம் எங்கள் வளாகத்தை பாதுகாப்பானதாகவும் உதவிகளுக்கு அடைவதற்கான மேம்பட்ட சூழலாகவும் மாற்றுகிறது. தொழில்நுட்பம் சமூகத்தின் நலனுக்காக ஒருங்கிணைந்த நடவடிக்கைகளை எளிதாக்க முடியும் என்பதை இந்த திட்டம் நிரூபிக்கிறது     Blood Community is a dedicated platform for active blood donors within our college, streamlining the blood donation process and ensuring quick access during emergencies. This initiative, designed to foster a community of support, allows users to register their blood type and location, making it easier for those in need to find suitable donors. The platform is user-friendly and collects essential information from each user to ensure accuracy and reliability. Through its live feed and search functionalities, students and staff can quickly access updates and search for specific blood types. Developed by Abishek, a BTech Information Technology student at Sri Shakthi Institute of Engineering and Technology in Coimbatore, this project showcases the power of technology in lifesaving applications. The hope is that every college adopts similar systems to enhance emergency preparedness. Blood Community bridges the gap between donors and those in need, making our campus a safer, more supportive environment. This tool stands as a testament to how technology can bring a community together for a greater cause.
            </p>
          </marquee>
        </div>
        <div className='w-screen flex justify-center bg-black'>
          <img src={Timeimg} className='w-[40%]' alt="Blood Donation" />
        </div>
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
          <div className='w-screen h-auto flex justify-center'>
            <Link to="/home">
              <button className='bg-red-500 p-5 text-white rounded-2xl m-5'>Search for Blood</button>
            </Link>
          </div>
          <div className='w-screen h-[5vh] mt-5'>
  <p className='text-center font-bold text-2xl mt-1'>EMERGENCY</p>
  <div className='flex space-x-7 mt-5 overflow-x-auto'>
    {Array.isArray(Edata) && Edata.length > 0 ? (
      Edata.map((item, index) => (
        <EmergencyCard data={item} key={index} />
      ))
    ) : (
      <p>No emergency data available.</p>
    )}
  </div>
</div>
        </div>
      </div>
      <div className='mt-[400px]'>
  <p className='text-center font-bold text-2xl'>BLOOD-CAMP UPDATES</p>
  <div className='flex space-x-7 mt-5 overflow-x-auto'>
    {Array.isArray(Cdata) && Cdata.length > 0 ? (
      Cdata.map((camp, index) => (
        <BloodCampCard key={index} data={camp} />
      ))
    ) : (
      <p>No blood camp updates available.</p>
    )}
  </div>
</div>
      <div className='w-screen flex justify-center mt-3'>
        <Link to="/news">
          <button className='bg-black text-white p-3 rounded-lg w-[40vw]'>
            LIVE HEALTH NEWS📰
          </button>
        </Link>
      </div>
      <div className='w-screen justify-center flex mt-5'>
        <div className='w-[90%] border border-black flex justify-center items-center rounded-lg flex-col'>
          <p className='p-2'>
            Blood Community is a dedicated platform for active blood donors within our college, streamlining the blood donation process and ensuring quick access during emergencies. This initiative, designed to foster a community of support, allows users to register their blood type and location, making it easier for those in need to find suitable donors. The platform is user-friendly and collects essential information from each user to ensure accuracy and reliability. Through its live feed and search functionalities, students and staff can quickly access updates and search for specific blood types. Developed by Abishek, a BTech Information Technology student at Sri Shakthi Institute of Engineering and Technology in Coimbatore, this project showcases the power of technology in lifesaving applications. The hope is that every college adopts similar systems to enhance emergency preparedness.
          </p>
          <div className='w-full flex justify-end'>
            <Link to="/contact">
              <button className='bg-black text-white p-3 rounded-lg w-[100px] m-8'>
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default RootPage;
