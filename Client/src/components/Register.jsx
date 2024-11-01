import React, { useRef,useState } from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from './Navbar'
import axios from 'axios'
import {Navigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Register = () => {
  const [RedirecttoLogin,setRedirecttoLogin]=useState(false);
  const usernameref=useRef(null);
  const emailref=useRef(null);
  const passwordref1=useRef(null);
  const passwordref2=useRef(null);
  const handleRegister=()=>{
       const username=usernameref.current.value;
       const email=emailref.current.value;
       const password1=passwordref1.current.value;
       const password2=passwordref2.current.value;
       if(username.length==0 || email.length==0 || password1.length==0 || password2.length==0)
       {
          const toastfy=(message)=>toast(message)
          toastfy("Please fill all fields!");
       }
       else if(password1!=password2)
       {
        const toastfy=(message)=>toast.warning(message)
        toastfy("Passwords not matching!");
       }
       else
       {
          const objdata={
            username:username,
            email:email,
            password:password1
          }
          dataAnupu(objdata);
       }
  }
  const dataAnupu=async(objdata)=>{
    try{
    await axios.post("http://localhost:1998/api/v1/register",objdata).then((response)=>{
      const toastfy=(message)=>toast.success(message)
      setTimeout(()=>setRedirecttoLogin(true),2000);
        toastfy(response.data.message);
    })
  }
  catch(err)
  {
    if (err.response && err.response.data) {
      toast.error(err.response.data.message || "Registration failed!");
    } else {
      toast.error("Server error!");
    }
  }
  }
  if(RedirecttoLogin)
    {
      return <Navigate to={"/login"}/>
    }
  return (
    <>
    <ToastContainer/>
    <Navbar name={"Register"}/>
    <div className='w-[100vw] h-[100vh] bg-[#f8f8f8] flex justify-center items-center'>
     <div className='max-w-sm min-w-sm h-auto  rounded-lg flex flex-col justify-center items-center  border-2 border-black shadow-xl shadow-green-400 z-20 p-3'>
       <p>REGISTER</p>
       <input type="text" className='p-3 m-3 rounded-lg border-2 border-black ' placeholder='Name'  ref={usernameref}/>
       <input type="email" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Email' ref={emailref}/>
       <input type="password" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Password'ref={passwordref1}/>
       <input type="password" className='p-3 m-3 rounded-lg border-2 border-black' placeholder='Re-enter Password'ref={passwordref2}/>
       <div className='flex  w-[100%] pl-2'><Link to="/login"><p>existing user?</p></Link></div>
       <button className='border-2 rounded-lg p-2 m-2 bg-blue-800 text-white' onClick={handleRegister}>REGISTER</button>
     </div>
    </div>
 </>
  )
}

export default Register