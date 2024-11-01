import React, { useState } from 'react';
import { ListTodo, User2, Menu, X,HeartPulse} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [sideBar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sideBar);
  };

  return (
    <>
      <div className='lg:hidden'>
        <div
          className={`fixed top-0 left-0 h-full bg-red-300 backdrop-blur-md transition-transform duration-300 ease-in-out ${
            sideBar ? 'translate-x-0' : '-translate-x-full'
          } z-50`}
          style={{ width: '70%' }} 
        >
          <div onClick={handleSidebar} className='p-4'>
            <p className='text-3xl font-mono text-white'>
              <X size={40} />
            </p>
          </div>
          <div className='flex flex-col gap-4 p-4'>
            <Link to="/" onClick={handleSidebar}>
              <div className='w-full bg-slate-400 p-3'><p>Home</p></div>
            </Link>
            <Link to="/about" onClick={handleSidebar}>
              <div className='w-full bg-slate-400 p-3'><p>About us</p></div>
            </Link>
            <Link to="/login" onClick={handleSidebar}>
              <div className='w-full bg-slate-400 p-3'><p>Login</p></div>
            </Link>
            <Link to="/register" onClick={handleSidebar}>
              <div className='w-full bg-slate-400 p-3'><p>Register</p></div>
            </Link>
          </div>
          <div className='absolute bottom-0 w-full text-center p-4'>
            <p className='text-white font-mono font-bold'>Powered by Abishek</p>
          </div>
        </div>
      </div>
      <div className='w-screen h-16 bg-red-500 text-white font-mono p-4 flex items-center justify-between z-60 relative'>
        <div className='flex items-center space-x-4'>
          <div className='lg:hidden' onClick={handleSidebar}>
            <Menu size={40} />
          </div>
          <div className='text-2xl sm:text-3xl flex'>Blood Community <HeartPulse /></div>
        </div>
        <div className='hidden lg:flex space-x-4 items-center'>
          <Link to="/" className="hover:underline"><p>Home</p></Link>
          <Link to="/about" className="hover:underline"><p>About us</p></Link>
          <Link to="/login" className="hover:underline"><p>Register</p></Link>
          <Link to="/register" className="hover:underline"><p>Login</p></Link>
          <User2 />
        </div>
      </div>
    </>
  );
};

export default Navbar;
