import './App.css';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import React, { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About.jsx';
import Aos from 'aos';
import Portofolio from './Components/Portfolio/Portofolio.jsx';
import {ScrollButton} from './Components/ScrollToTop.jsx'
<link rel="stylesheet" href="./App.css" />

export default function App() {
  const [loaded, setIsLoading] = useState(false);

  // Simulate loading with a timeout
  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setIsLoading(true); // Set loaded to true after 500ms
    }, 3000);
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader></Loader>
      
        
      ) : (
      <>
      <ScrollButton/>
        <Navbar />
        {/* <button className='upbtn'> <i className='fa-solid fa-arrow-up'></i></button> */}
        
          <Routes>
            <Route path='Home' element={<Home></Home>}></Route>
            <Route path='About' element={<About></About>}></Route>
            <Route path='Portfolio' element={<Portofolio></Portofolio>}></Route>
            <Route path='' element={<Home/>}></Route>
            <Route path='*' element={''}></Route>
          </Routes>
          <div data-aos="zoom-in-up"  data-aos-easing='ease-in-sine' data-aos-delay='200' data-aos-duration='600'>
   <Footer /> 
   </div>
        
        </>
      )}
    </>
  );
}
