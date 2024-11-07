import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDetails = () => {
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate();

  const nameref = useRef(null);
  const dobref = useRef(null);
  const yearref = useRef(null);
  const bloodref = useRef(null);
  const numberref = useRef(null);
  const cityref = useRef(null);
  const stateref = useRef(null);

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const DataAnupu = async (objData) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post("https://blood-community-tcn0.onrender.com/api/v2/adddetails", objData);
      if (res.status === 201) {
        alert("Data sent successfully");
        navigate("/development"); 
      }
    } catch (error) {
      alert("Failed to submit data. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => {
    const objData = {
      _userid: sessionStorage.getItem("id"),
      name: nameref.current.value,
      blood: bloodref.current.value,
      dob: dobref.current.value,
      year: yearref.current.value,
      number: numberref.current.value,
      city: cityref.current.value,
      state: stateref.current.value,
      img: image,
    };
    DataAnupu(objData);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center bg-gray-100 p-4">
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-xl flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={nameref}
            required
          />
          <label className="w-full text-left text-sm">Blood Group:</label>
          <select
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={bloodref}
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
          <label className="w-full text-left text-sm">Date of Birth:</label>
          <input
            type="date"
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={dobref}
            required
          />
          <input
            type="text"
            placeholder="Academic year (e.g., 2022-2026)"
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={yearref}
            required
          />
          <input
            type="text"
            placeholder="Contact number"
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={numberref}
            required
          />
          <input
            type="text"
            placeholder="City"
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={cityref}
            required
          />
          <input
            type="text"
            placeholder="State"
            className="rounded-lg border border-gray-300 w-full p-3 mb-3"
            ref={stateref}
            required
          />
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={convertToBase64}
            required
            className="w-full p-3 mb-3"
          />
          <p className="text-red-500 text-sm mb-3">*Add Profile image</p>
          <button
            onClick={handleSubmit}
            className={`w-full bg-black text-white text-xl p-3 rounded-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Save Life"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDetails;
