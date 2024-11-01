import React from 'react'
import Abi from '../assets/img/abidp2.jpg'
import {Phone,MessageCircle} from 'lucide-react'
const HomeComponent = () => {
  return (
    <>
    <div className='w-screen flex justify-center items-center'>
    <div className='w-[30vh] border border-black rounded-lg backdrop-blur-lg m-5 p-5'>
      <div><img src={Abi} alt="" className='rounded-full'/></div>
      <div className='flex w-full justify-between'><p className='font-bold text-slate-800'>Abishek.S</p>
      <p className='text-3xl text-red-600 font-semibold'>O+</p></div>
      <div><p>Thirumurugan Poondi- Tirupur</p></div>
      <div className='flex justify-between'><Phone fill='green' color='green' size={30}/><MessageCircle fill={"blue"} color='white' size={30}/></div>
      <div className='w-full flex justify-start'><p>2022-2026</p></div>
    </div>
    </div>
    </>
  )
}

export default HomeComponent