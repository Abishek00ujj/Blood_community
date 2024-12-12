import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
const Reqblood = () => {
    console.log(sessionStorage.getItem("id"));
    let bloodref=useRef(null);
  let bloodunitref=useRef(null);
  let nameref=useRef(null);
  let hospitalnameref=useRef(null);
  let locationref=useRef(null);
  let contactref=useRef(null);
  let handlesend=()=>{
    const obj={
      blood:bloodref.current.value,
      unit:bloodunitref.current.value,
      name:nameref.current.value,
      hospital:hospitalnameref.current.value,
      location:locationref.current.value,
      phone:contactref.current.value
    }
    const warntoast=(message)=>toast.warn(message);
    if (!obj.blood || !obj.unit || !obj.name || !obj.hospital || !obj.location || !obj.phone) {
      warntoast("Please fill all the fields");
      return;
    }
    sendData(obj);
  }
  const toastfy=(message)=>toast.success(message)
  const sendData=async(obj)=>{
    try{
        const res=await axios.post("https://blood-community-tcn0.onrender.com/api/v3/reqepost",obj);
        toastfy("Requested blood post!");
        if(res.status==201)
        {
          bloodref.current.value="";
          bloodunitref.current.value="";
          nameref.current.value="";
          hospitalnameref.current.value="";
          locationref.current.value="";
          contactref.current.value="";
        }
    }
    catch(err)
    {
      console.error(err);
      const errortoast=(message)=>toast.error(message);
      errortoast("Failed to save data. Please try again later.");
    }
   }
  return (
     <>
     <ToastContainer/>
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
         <div className='w-[400px] h-auto rounded-lg border border-black flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center text-2xl'>
                Request form!
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex justify-center items-center gap-5 text-2xl p-5'>Select Blood:
            <select
            className="rounded-lg border border-gray-300 w-20 h-15 mb-3 pl-5 pr-5 pt-3 pb-3 text-center flex justify-center items-center"
            required ref={bloodref}
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
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Patient Name!' ref={nameref}/>
                <input type="Number" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='No. of unit needed' ref={bloodunitref}/>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Hospital Name' ref={hospitalnameref}/>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Location' ref={locationref}/>
                <input type="text" className='w-[80%] p-5 border border-black rounded-sm m-5' placeholder='Conatact' ref={contactref}/>
                <button onClick={handlesend} className='bg-green-400 text-white font-bold pl-5 pr-5 pt-3 pb-3 m-5'>Save a Life!</button>
            </div>
         </div>
         </div>
      </div>
     </>
  )
}

export default Reqblood;