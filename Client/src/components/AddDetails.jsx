import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
const AddDetails = () => {
    const [image,setImage]=useState("");
    const nameref=useRef(null);
    const dobref=useRef(null);
    const yearref=useRef(null);
    const bloodref=useRef(null);
    const numberref=useRef(null);
    const cityref=useRef(null);
    const stateref=useRef(null);
   const convertToBase64=(e)=>{
        const reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result);
            setImage(reader.result);
        }
    }
    const DataAnupu=async(objData)=>{
      const res = await axios.post("http://localhost:1998/api/v2/adddetails", objData);
      alert(res.status);
      if(res.status==201)
      {
        alert("Data send succuessfully");
      }
    }
    const handlesubmit=()=>{
       const objData={
          _userid:sessionStorage.getItem("id"),
          name:nameref.current.value,
          blood:bloodref.current.value,
          dob:dobref.current.value,
          year:yearref.current.value,
          number:numberref.current.value,
          city:cityref.current.value,
          state:stateref.current.value,
          img:image,
       }
       console.log(objData);
       DataAnupu(objData);
    }
  return (
    <>
      <Navbar/>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='max-sm:w-[80vw] max-sm:h-[70vh] max-md:w-[80vw] max-md:h-[80vh] border border-black flex flex-col justify-center items-center p-10 rounded-xl'>
            <input type="text" placeholder='Name' className='rounded-lg border border-black w-full p-3 m-3' ref={nameref} required/>
            <div className='w-full h-auto flex justify-start'><p>BLOOD GROUP:</p></div><select className='rounded-lg border border-black w-full p-3 m-3' ref={bloodref} required>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
            </select>
            <div className='w-full h-auto flex justify-start'><p>DOB:</p></div>
            <input type="date" placeholder='DOB' className='rounded-lg border border-black w-full p-3 m-3' ref={dobref} required/>
            <input type="text" placeholder='Academic year. eg: 2022-2026' className='rounded-lg border border-black w-full p-3 m-3' ref={yearref} required/>
            <input type="text" placeholder='Contact number' className='rounded-lg border border-black w-full p-3 m-3'required ref={numberref}/>
            <input type="text" placeholder='City' className='rounded-lg border border-black w-full p-3 m-3'required ref={cityref}/>
            <input type="text" placeholder='State' className='rounded-lg border border-black w-full p-3 m-3' required ref={stateref}/>
            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={convertToBase64} required/>
            <div className='w-full h-auto flex justify-start'><p className='text-red-500'>*Add Profile image</p></div>
            <button className='bg-black text-2xl text-white p-2 rounded-lg' onClick={handlesubmit}>Save Life</button>
        </div>
      </div>
    </>
  )
}

export default AddDetails