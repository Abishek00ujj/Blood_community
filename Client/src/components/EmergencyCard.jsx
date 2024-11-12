import React from 'react';
import defaultimg from '../assets/img/defaultprofile.webp';
import { Phone } from 'lucide-react';

const EmergencyCard = ({ data }) => {
  console.log(data);
  return (
    <div className='w-full max-w-[500px] border border-gray-300 p-4 rounded-xl shadow-lg bg-white flex flex-col items-center space-y-4'>
      <div className='flex justify-center w-full'>
        <img 
          src={defaultimg} 
          alt="Patient" 
          className='w-[150px] h-[150px] object-cover rounded-lg'
        />
      </div>
      <div className='flex flex-col items-start w-full space-y-2'>
        <p className='font-bold truncate text-lg'>
          Patient Name: {data.name || "N/A"}
        </p>
        <p className='text-sm'>
          UNIT: {data.unit || "N/A"}
        </p>
        <p className='text-gray-600 text-sm'>
          Hospital: {data.hospital || "N/A"}
        </p>
        <p className='text-gray-600 text-sm'>
          Location: {data.location || "N/A"}
        </p>
        
        <div className='flex justify-between items-center w-full mt-4'>
          <p className='text-2xl font-bold text-red-600'>
            {data.blood || "N/A"}
          </p>
          <a href={`tel:+91${data.phone}`} className='flex items-center'>
            <Phone fill='green' color='green' size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;
