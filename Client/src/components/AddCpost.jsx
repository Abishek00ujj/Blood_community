import React, { useRef } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCpost = () => {
  const addressref = useRef(null);
  const locationref = useRef(null);
  const contactref = useRef(null);

  const warntoast = (message) => toast.warn(message);
  const toastfy = (message) => toast.success(message);
  const errortoast = (message) => toast.error(message);

  const handlesend = () => {
    const obj = {
      location: locationref.current.value,
      address: addressref.current.value,
      contact: contactref.current.value
    };

    if (!obj.address || !obj.location || !obj.contact) {
      warntoast("Please fill all the fields");
      return;
    }

    sendData(obj);
  };

  const sendData = async (obj) => {
    try {
      const res = await axios.post("https://blood-community-tcn0.onrender.com/api/v3/addcpost", obj);
      toastfy(res.data.message);

      if (res.status === 201) {
        addressref.current.value = "";
        locationref.current.value = "";
        contactref.current.value = "";
      }
    } catch (err) {
      console.error(err);
      errortoast("Failed to save data. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className='w-screen h-screen bg-black justify-center items-center flex'>
        <div className='w-[450px] h-auto bg-white flex flex-col p-5 rounded-2xl space-y-7'>
          <p>ADD BLOOD CAMP POST</p>
          <input ref={locationref} type="text" placeholder='Location' className='border border-black p-4 rounded-2xl' />
          <input ref={addressref} type="text" placeholder='Address' className='border border-black p-4 rounded-2xl' />
          <input ref={contactref} type="text" placeholder='Contact Number' className='border border-black p-4 rounded-2xl' />
          <button onClick={handlesend} className='bg-green-500 font-bold rounded-2xl text-white p-2'>
            ADD BLOOD CAMP POST
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCpost;
 