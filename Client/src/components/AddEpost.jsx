import React,{useRef} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddEpost = () => {
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
        const res=await axios.post("https://blood-community-tcn0.onrender.com/api/v3/addepost",obj);
        toastfy(res.data.message);
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
    <div className='w-screen h-screen bg-black justify-center items-center flex'>
        <div className='w-[450px] h-auto bg-white flex flex-col p-5 rounded-2xl space-y-7'>
        <p>ADD EMERGENCY POST</p>
          <select
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            required
            ref={bloodref}
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
            <input ref={bloodunitref} type="Number" name="" id="" placeholder='No. of units' className='border border-black p-4 rounded-2xl'/>
            <input ref={nameref} type="text" name="" id="" placeholder='Patient Name' className='border border-black p-4 rounded-2xl'/>
            <input ref={hospitalnameref} type="text" name="" id="" placeholder='Hospital Name' className='border border-black p-4 rounded-2xl'/>
            <input ref={locationref} type="text" name="" id="" placeholder='Location' className='border border-black p-4 rounded-2xl' />
            <input ref={contactref} type="text" name="" id="" placeholder='Contact Number'className='border border-black p-4 rounded-2xl' />
            <button className='bg-red-500 font-bold rounded-2xl text-white p-2' onClick={handlesend}>ADD EMERGENCY POST</button>
        </div>
    </div>
    </>
  )
}

export default AddEpost