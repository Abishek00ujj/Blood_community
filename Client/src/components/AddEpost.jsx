import React from 'react'
import Navbar from './Navbar'
const AddEpost = () => {
  return (
    <>
    <Navbar/>
    <div className='w-screen h-screen bg-black justify-center items-center flex'>
        <div className='w-[450px] h-auto bg-white flex flex-col p-5 rounded-2xl space-y-7'>
        <p>ADD EMERGENCY POST</p>
          <select
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
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
            <input type="Number" name="" id="" placeholder='No. of units' className='border border-black p-4 rounded-2xl'/>
            <input type="text" name="" id="" placeholder='Patient Name' className='border border-black p-4 rounded-2xl'/>
            <input type="text" name="" id="" placeholder='Hospital Name' className='border border-black p-4 rounded-2xl'/>
            <input type="text" name="" id="" placeholder='Location' className='border border-black p-4 rounded-2xl' />
            <input type="text" name="" id="" placeholder='Contact Number'className='border border-black p-4 rounded-2xl' />
            <button className='bg-red-500 font-bold rounded-2xl text-white p-2'>ADD EMERGENCY POST</button>
        </div>
    </div>
    </>
  )
}

export default AddEpost