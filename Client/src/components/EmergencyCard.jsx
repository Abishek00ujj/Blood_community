import React from 'react';
import defaultimg from '../assets/img/defaultprofile.webp';
import { Phone } from 'lucide-react';

const EmergencyCard = ({ data }) => {
  console.log(data);
  return (
    <div className='w-full max-w-[500px] border border-gray-300 p-4 rounded-xl shadow-lg bg-white md:flex md:space-x-4 lg:p-6'>
      <div className='flex justify-center md:w-[40%]'>
        <img src={defaultimg} alt="Patient" className='w-full h-[150px] object-cover rounded-lg md:h-[180px]' />
      </div>
      <div className='flex flex-col mt-3 md:mt-0 md:w-[60%]'>
        <p className='font-bold truncate text-lg md:text-xl'>Patient Name: {data.name || "N/A"}</p>
        <p className='text-sm md:text-base'>UNIT: {data.unit || "N/A"}</p>
        <p className='text-gray-600 text-sm md:text-base'>Hospital: {data.hospital || "N/A"}</p>
        <p className='text-gray-600 text-sm md:text-base'>Location: {data.location || "N/A"}</p>
        <div className='flex justify-between items-center mt-4'>
          <p className='text-2xl font-bold text-red-600 md:text-3xl'>{data.blood || "N/A"}</p>  
          <a href={`tel:+91${data.phone}`} className='flex items-center'>
            <Phone fill='green' color='green' size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;
