import React from 'react'
import Navbar from './Navbar';
const Reqblood = () => {
    console.log(sessionStorage.getItem("id"));
  return (
     <>
      <Navbar/>
      <div className='w-screen h-screen'>
         <div className='w-full flex justify-start text-3xl font-bold p-5'>
            Request an Emergency post! <span className='animate-spin no-underline'>⭐</span>
         </div>
         <div className='w-screen flex justify-center h-auto'>
            <marquee behavior="" direction="up" className="flex w-full justify-center text-2xl">
              You are doing a life saving job! 🩸
            </marquee>
         </div>
         <div className='w-full h-full flex justify-center items-center'>
         <div className='w-[500px] h-auto rounded-lg border border-black flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center text-2xl'>
                Request form!
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex justify-center items-center gap-5 text-2xl p-5'>Select Blood:
            <select
            className="rounded-lg border border-gray-300 w-[20%] p-3 mb-3"
            required
          >
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
          🩸</div>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Patient Name!'/>
                <input type="Number" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='No. of unit needed'/>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Hospital Name'/>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Location'/>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Hospital Name'/>
                <button className='bg-green-400 text-white font-bold pl-5 pr-5 pt-3 pb-3 m-5'>Save a Life!</button>
            </div>
         </div>
         </div>
      </div>
     </>
  )
}

export default Reqblood;