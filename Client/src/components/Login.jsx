import React from 'react'
import axios from 'axios';
import {Navbar} from './Navbar'
import {Link} from 'react-router-dom'
import { useRef,useState } from 'react'
import {Navigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login = () =>{
  const [Redirecttohome,setRedirecttohome]=useState(false);
  const emailref=useRef(null);
  const passwordref=useRef(null);
       const handleLogin=()=>{
        const email=emailref.current.value;
        const password=passwordref.current.value;
        if(email.length==0 || password.length==0)
        {
           const toastfy=(message)=>toast(message)
           toastfy("Please fill all fields!");
        }
        else
        {
           const objdata={
             email:email,
             password:password
           }
           console.log(objdata)
           dataAnupu(objdata);
        }
   }
   const dataAnupu=async(objdata)=>{
     try{
     await axios.post("http://localhost:1998/api/v1/login",objdata).then((response)=>{
       const toastfy=(message)=>toast.success(message)
       setTimeout(()=>setRedirecttohome(true),2000);
         //sessionStorage.setItem("id",res.data.others._id);
         toastfy(response.data.message);
     })
   }
   catch(err)
   {
     if (err.response && err.response.data) {
       toast.error(err.response.data.message || "Login failed!");
     } else {
       toast.error("Server error!");
     }
   }
  }
  if(Redirecttohome)
    {
      return <Navigate to={"/home"}/>
    }
  return (
    <>
    <ToastContainer/>
      <Navbar name={"Login"}/>
       <div className='w-[100vw] h-[100vh] bg-[#f8f8f8] flex justify-center items-center'>
        <div className='h-auto  rounded-lg flex flex-col justify-center items-center  border-2 border-black shadow-xl shadow-green-400 z-20 p-3 '>
          <p>LOGIN</p>
          <input type="text" className='p-3 m-3 rounded-lg border-2 border-black ' placeholder='Email' ref={emailref}/>
          <input type="text" className='p-3 m-3 rounded-lg border-2 border-black ' placeholder='Password' ref={passwordref}/>
          <div className='flex  w-[100%] pl-2'><Link to="/register"><p>new user?</p></Link></div>
           <button className='border-2 rounded-lg p-2 m-2 bg-blue-800 text-white' onClick={handleLogin}> LOGIN</button>
        </div>
       </div>
    </>
  )
}

export default Login