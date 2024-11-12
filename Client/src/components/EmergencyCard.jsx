import React from 'react';
import defaultimg from '../assets/img/defaultprofile.webp';
import { Phone } from 'lucide-react';

const EmergencyCard = ({ data }) => 
  {// Replace with actual property names in your data
  return (
    <div className='w-[250px] sm:w-[200px] md:w-[220px] border border-gray-300 p-4 rounded-xl shadow-lg bg-white'>
      <div className='flex justify-center'>
        <img src={defaultimg} alt="Patient" className='w-[220px] h-[200px] object-cover rounded-lg' />
      </div>
      <div className='flex flex-col mt-3'>
        <p className='font-bold truncate'>Patient Name: {data.name || "N/A"}</p>
        <p className='text-gray-600'>Hospital: {data.hospital || "N/A"}</p>
        <p className='text-gray-600'>Location: {data.location || "N/A"}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='text-3xl font-bold text-red-600'>{data.blood|| "N/A"}</p>  
        <Phone fill='green' color='green' size={30} className='cursor-pointer' />
      </div>
    </div>
  );
};


export default EmergencyCard;
