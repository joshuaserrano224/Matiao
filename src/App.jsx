import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutUs from './pages/About'; 
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import Header from './components/Header'; 
import Footer from './components/Footer'; 

import './index.css';

function App() {
    return (
        <BrowserRouter>
            {/* 1. Header is fixed, so it stays outside and on top */}
            <Header /> 
            
            {/* 🎯 NEW: Add a wrapper div to apply the required top spacing to all pages */}
            <div className="page-content-wrapper">
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/aboutus' element={<AboutUs />} /> 
                      <Route path='/services' element={<Services />} /> 
                        <Route path='/news' element={<News />} /> 
                         <Route path='/contact' element={<Contact />} /> 
                </Routes>
            </div>
            {/* ------------------------------------------------------------------- */}

            {/* 2. Footer rendered outside of <Routes> */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;