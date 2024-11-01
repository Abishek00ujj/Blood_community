import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d653fb3b-e8d0-435b-95b8-629fed32c9e7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <div className="text-2xl font-semibold mb-4">Contact Form</div>
      
      <form 
        onSubmit={onSubmit} 
        className="w-full max-w-lg flex flex-col items-center space-y-4" 
        aria-busy={loading}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          className="w-full p-4 border border-gray-300 rounded-xl focus:border-black"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="w-full p-4 border border-gray-300 rounded-xl focus:border-black"
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          className="w-full p-4 border border-gray-300 rounded-xl focus:border-black"
        ></textarea>
        <button 
          type="submit" 
          disabled={loading} 
          className={`w-full p-4 text-white rounded-xl ${loading ? 'bg-gray-400' : 'bg-black'}`}
        >
          {loading ? "Sending..." : "Submit Form"}
        </button>
      </form>
      
      <span 
        className="mt-4 text-lg" 
        role="status" 
        aria-live="polite"
      >
        {result}
      </span>
    </div>
  );
};

export default Contact;
