import React from 'react';
import defaultimg from '../assets/img/defaultprofile.webp';
import { Phone } from 'lucide-react';

const  BloodCampcard= () => {
  return (
    <div className='w-[220px] sm:w-[180px] md:w-[220px] border border-gray-300 p-4 rounded-xl shadow-lg bg-white'>
      <div className='flex justify-center'>
        <img src={defaultimg} alt="Patient" className='w-[200px] h-[200px] object-cover rounded-lg' />
      </div>
      <div className='flex flex-col mt-3'>
        <p className='font-bold'>Location: Coimbatore</p>
        <p className='font-bold'>Address: PSG-HOSPITAL 📌</p>
      </div>
      <div className='w-full flex items-center mt-4'>
        <p>Organizer contact: </p><Phone fill='green' color='green' size={30} className='cursor-pointer' />
      </div>
    </div>
  );
};

export default BloodCampcard;
