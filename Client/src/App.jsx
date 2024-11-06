import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import RootPage from './components/RootPage';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import AddDetails from './components/AddDetails';
import Profile from './components/Profile';
function App()
 {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/development" element={<Profile/>}/>
        <Route path="/adddetails" element={<AddDetails />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
