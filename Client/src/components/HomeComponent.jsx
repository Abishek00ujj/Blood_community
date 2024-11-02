import React from 'react'
import {Phone,MessageCircle} from 'lucide-react'
const HomeComponent = (props) => {
  return (
    <>
    <div className='w-screen flex justify-center items-center'>
    <div className='w-[30vh] border border-black rounded-lg backdrop-blur-lg m-5 p-5'>
      <div><img src={props.img} alt="" className='rounded-full'/></div>
      <div className='flex w-full justify-between'><p className='font-bold text-slate-800'>{props.name}</p>
      <p className='text-3xl text-red-600 font-semibold'>{props.blood}</p></div>
      <div><p>{props.city}</p></div>
      <div><p>{props.state}</p></div>
      <div className='flex justify-between'>
        <a href={`tel:+91${props.number}`}>
              <Phone fill='green' color='green' size={30} />
        </a>
        <a href={`sms:+91${props.number}`}>
              <MessageCircle fill={"blue"} color='white' size={30} />
        </a></div>
      <div className='w-full flex justify-start'><p>{props.year}</p></div>
    </div>
    </div>
    </>
  )
}

export default HomeComponent