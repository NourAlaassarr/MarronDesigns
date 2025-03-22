import React, { useEffect,useState,useRef } from 'react';
import Footer from '../Footer/Footer.jsx';
import bg from '../../img/dana-devolk-JBqC2n_0zHM-unsplash.jpg';
import Style from'./AboutUs..module.css';
import founder from '../../img/mahmoudkama.jpg';
import Aos from 'aos';


export default function About() {
  const [loaded, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
    setTimeout(() => {
      setIsLoading(true); // Set loaded to true after 500ms
    }, 3000);
  },[])
  return (
    <>
  <section data-aos="fade-up" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='900' className='AboutUs mt-5' > 
  <div className= {`${Style.AboutUs} d-flex flex-column justify-content-center align-items-center m-5`}>
      <h1 className={` fw-bolder h2 text-center`}> ABOUT MARRÓN DESIGNS</h1>
      <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className={`${Style.Line} mb-5 w-25`}></div>
      </div>

  <div className=" container-fluid">
    <div className="row py-3  justify-content-center align-items-center">
      <div  className="col-md-6 ">
        <div className="contents">
          <h1 className=' fw-bolder text-center h2'> Welcome to MARRÓN DESIGNS</h1>
          <div className="Textbody">
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className=' fw-ligh text-center'> At MARRÓN DESIGNS, our vision is to transform everyday spaces into extraordinary environments.</p>
<p data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className=' fw-ligh text-center' >We focus on creating personalized designs that seamlessly blend style and function, ensuring that every space reflects your unique personality and enhances the way you live.</p>


          </div>
        </div>
      </div>
      <div className={` ${ Style.backgroundcol}  col-md-6 d-flex align-items-center justify-content-center  `}>
      <h3 className=' text-center'> OUR VISION</h3>
      </div>
      <div className={` ${ Style.backgroundcol}  col-md-6 d-flex align-items-center justify-content-center `}>
     <h3 className=' text-center'> OUR MISSION</h3>
     </div>
     <div className="col-md-6">
     <ul className=''>
  <li data-aos="fade-left" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='900' className='p-2'>We LISTEN – Your vision is our top priority. We take the time to understand your goals and needs.</li>
  <li data-aos="fade-right" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='1000' className='p-2'>We DESIGN – We craft spaces that strike a perfect balance between beauty and utility, making every inch of your space work for you</li>
  <li data-aos="fade-left" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='1100' className='p-2'>We PROMISE – High-quality products, fast delivery, and competitive prices. Because you deserve nothing less than the best.</li>
  </ul>
     </div>
    </div>
  </div>













  
<div className="WhyChooseUs mt-5">
<h2 data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className={`fw-bolder text-center w-50 mx-auto ${Style.Title}`}> WHY MARRÓN DESIGNS</h2>
<div data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className={`${Style.Line} mb-5 w-25 mx-auto`}></div>
  <div className="container-fluid  d-flex justify-content-center align-items-center mt-5 ">
    
    <div className="row justify-content-center align-items-center  py-4  gy-4">
      <div data-aos="fade-right" data-aos-once="false" data-aos-duration='1000' className={`col-md-4 ms-2 me-2  ${Style.imgcontainer} `}>
        <div className={`d-flex justify-content-center align-items-center  `}>
       <div className="text-center fs-1"> <i class="fa-solid fa-user-tie"></i></div>
        </div>
        <div className="chooseus">
          <h1 className=' text-center h5'> Expert interior designers</h1>
          <p className=' fw-light fs-5 text-center'> The finest interior designers have a sharp attention to detail, skillfully creating spaces that are both aesthetically pleasing and highly functional.</p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-once="false" data-aos-duration='1000' className={`col-md-4 ms-2 me-2  ${Style.imgcontainer} `}>
        <div className={`d-flex justify-content-center align-items-center `}>
       <div className="text-center fs-1"> <i class="fa-solid fa-thumbs-up"></i></div>
        </div>
        <div className="chooseus">
          <h1 className=' text-center h5'>hassle free execution</h1>
          <p className=' fw-light fs-5 text-center'> Effective space planning is an essential component of seamless interior project execution, ensuring both beauty and practicality in every design.</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-once="false" data-aos-duration='1000' className={`col-md-4 ms-2 me-2 ${Style.imgcontainer} `}>
        <div className={`d-flex justify-content-center align-items-center `}>
       <div className="text-center fs-1"> <i class="fa-regular fa-pen-to-square"></i></div>
        </div>
        <div className="chooseus">
          <h1 className=' text-center h5'>Customized designs</h1>
          <p className=' fw-light fs-5 text-center'>With personalized interior services, every detail of your home is tailored to reflect your unique style, ensuring comfort and harmony throughout.</p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-once="false" data-aos-duration='1000' className={`col-md-4 ms-2 me-2  ${Style.imgcontainer} `}>
        <div className={`d-flex justify-content-center align-items-center `}>
       <div className="text-center fs-1"> <i class="fa-solid fa-3">D</i></div>
        </div>
        <div className="chooseus">
          <h1 className=' text-center h5'>3D design views</h1>
          <p className=' fw-light fs-5 text-center'> We offer detailed 3D design views, allowing you to visualize your space before execution, ensuring every aspect meets your expectations and vision. </p>
      </div>
      </div>
      <div data-aos="fade-right" data-aos-once="false" data-aos-duration='1000' className={`col-md-4 ms-2 me-2 ${Style.imgcontainer} `}>
        <div className={`d-flex justify-content-center align-items-center `}>
       <div className="text-center fs-1"> <i class="fa-solid fa-sack-dollar"></i></div>
        </div>
        <div className="chooseus">
          <h1 className=' text-center h5'> Budget planning</h1>
          <p className=' fw-light fs-5 text-center'> It’s crucial to assess your needs and priorities carefully, allowing you to allocate your budget wisely for the best outcome for your project. </p>
      </div>
      </div>
      <div data-aos="fade-left" data-aos-once="false" data-aos-duration='1000' className={`col-md-4 ms-2 me-2  ${Style.imgcontainer} `}>
        <div className={`d-flex justify-content-center align-items-center `}>
       <div className="text-center fs-1"> <i class="fa-solid fa-circle-check"></i></div>
        </div>
        <div className="chooseus">
          <h1 className=' text-center h5'>Material warranty</h1>
          <p className=' fw-light fs-5 text-center'> Choosing the right materials for your project guarantees your furniture is built to last, providing durability and comfort for years to come.</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
  
  <div className="MeetThefounder d-flex flex-column justify-content-center align-items-center mt-5">
    <div className="text text-center">
      <h1  data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className=' fw-bolder fw-5 fs-1 text-center  '> Meet  The Founder</h1>
      <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className={`${Style.Line} mb-5`}></div>
    </div>
    <div className="container-fluid">
    <div className='row justify-content-center align-items-center p-3'>
 <div className="col-md-6">
 <div className="FounderImg d-flex flex-column  justify-content-evenly">
   <img className={`${Style.FounderImg}`} src={founder} alt='Founder'/>
   <h5 className='text-center m-2  fs-6 text-muted'> Mahmoud Gabr</h5>
   </div>
 </div>

    
    </div>
    </div>
  
 
    
    
  </div>
    
  

   </section>
    </>
  )
}
