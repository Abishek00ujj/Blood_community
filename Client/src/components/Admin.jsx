import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
const Admin = () => {
    const [bounce,setbounce]=useState(true);
    setTimeout(()=>{setbounce(false)},1500);
    console.log(bounce)
  return (
    <>
    <div className={bounce && 'animate-bounce'}>
    <Navbar/>
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
    <p className={bounce?'text-3xl font-bold font-mono animate-spin':'text-3xl font-bold font-mono'}>ADMIN PAGE</p>
       <div className='border border-black w-[400px] h-[400px] rounded-lg'>
          <div className='w-full h-full flex flex-col space-y-5 justify-center items-center'>
             <Link to={'/addepost'}><button className='bg-red-500 p-5 rounded-lg'>ADD EMERGENCY POST</button></Link>
             <Link to={'/addcamppost'}><button className='bg-green-400 p-5 rounded-lg'>ADD BLOOD CAMP</button></Link>
             <button className='bg-green-400 p-5 rounded-lg'>VIEW EMERGENCY POST REQ</button>
          </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default Admin