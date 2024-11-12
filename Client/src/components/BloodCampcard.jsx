import React from 'react';

const BloodCampCard = ({ data }) => {
  console.log(data);
  return (
    <div className='w-full max-w-[250px] p-4 border border-gray-300 rounded-xl shadow-lg bg-white sm:w-[180px] md:w-[220px] lg:w-[250px]'>
      <div className='flex flex-col mt-3'>
        <p className='font-bold text-sm sm:text-base truncate'>Camp: {data.address || "N/A"}</p>
        <p className='text-gray-600 text-xs sm:text-sm'>Location: {data.location || "N/A"}</p>
        <p className='text-gray-600 text-xs sm:text-sm'>Contact: {data.contact || "N/A"}</p>
      </div>
    </div>
  );
};

export default BloodCampCard;
