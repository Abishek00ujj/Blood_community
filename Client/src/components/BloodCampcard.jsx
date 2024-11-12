import React from 'react';
const BloodCampcard = ({ data }) => {
  console.log(data+hello);
  return (
    <div className='w-[250px] sm:w-[200px] md:w-[220px] border border-gray-300 p-4 rounded-xl shadow-lg bg-white'>
      <div className='flex flex-col mt-3'>
        <p className='font-bold truncate'>Camp: {data.address|| "N/A"}</p>
        <p className='text-gray-600'>Location: {data.location || "N/A"}</p>
        <p className='text-gray-600'>contact: { data.contact|| "N/A"}</p>
      </div>
    </div>
  );
};
export default BloodCampcard;
