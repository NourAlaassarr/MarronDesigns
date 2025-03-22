import React, { useEffect,useState,useRef } from 'react';
import Style from'./Home.module.css';
import Footer from '../Footer/Footer.jsx';
import Dressing from'../../img/dressing.jpg'
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import img1 from '../../img/img2.jpg'
import $ from 'jquery';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Loader/Loader.jsx';
import photocollage from '../../img/photo-collage.png - Copy.png';
import AboutUs from '../../img/img4.jpg';
import { Link, Navigate } from 'react-router-dom';
import VerticalSwiper from '../Swiper/VerticalSwiper.jsx';
import kitchen from '../../img/mtbakhhelw.jpg'
import { ScrollContainer, ScrollPage, Animator,Move,FadeIn,ZoomIn, ZoomInScrollOut,Zoom,StickyIn, Sticky,Fade, batch, FadeOut } from 'react-scroll-motion';
import { Nav } from 'react-bootstrap';
import DownloadPdf from '../DownloadPdf.js';
import Typed from "typed.js";

import modern from '../../img/modern-living-room-interior-design-line-art-illustration-two-armchairs-floor-lamp-houseplant-furnished-drawing-room-contour-illustration-sketch-on-white-background-minimalist-interior-design-vector.jpg'
export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const navigate = useNavigate();
  const [loaded, setIsLoading] = useState(false);



  const el = useRef(null);
  useEffect(() => {
   
    const typed = new Typed(el.current, {
      strings: ["MARRÓN DESIGNS " , " You Deserves The Best!!","Crafting Dreams into Reality."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true, // Make sure the typing effect loops infinitely
    loopCount: Infinity // Continue the loop indefinitely
    });
    Aos.init();
    setTimeout(() => {
      setIsLoading(true); // Set loaded to true after 500ms
    }, 3000);
    return () => {
      typed.destroy();
    };
  },[])
  return (
<>
<section data-aos="fade-up" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='900' className='HomePage' > 

<section className="d-flex align-items-center" style={{ height: "80" }}>
  <div className="container-fluid">
    <div className={`${Style.Home} row d-flex justify-content-center align-items-center text-center`} style={{ height: "100vh" }}>
      
      <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
        <div className="typing m-2 p-4">
          <h1 className=" fw-bolder text-white" ref={el}></h1>
        </div>

        <button className={`${Style.catalog} btn mt-4`}>
          <DownloadPdf />
        </button>
      </div>
      
    </div>
  </div>
</section>


<section id='Aboutus' data-aos="fade-up"  data-aos-easing='ease-in-sine' data-aos-delay='200' data-aos-duration='900'   className={`${Style.AboutUs} mt-5`}>
  <div className={`${Style.AboutUsLayer}`}>
    <div className="container-fluid  py-3 ">
      <div className="row  justify-content-evenly align-items-center  p-3 ">
        
        <div  className="col-md-6">
          <div className={`${Style.imgcontainer} `}>
          <img src={AboutUs} className='w-100' alt="Dressing"/>

          </div>
        </div>
        <div  className="col-md-5 m-2 p-2">
          <h2 data-aos="fade-up" data-aos-once="false" className=' fw-bold'>About Us </h2>
          <p data-aos="fade-up" data-aos-once="false" data-aos-duration='900' className='fw-1 h5  fw-semibold py-3'>Marron designs,founded by Architect Mahmoud Gabr in 2018, specializes in creating custom wood-based solutions for small spaces, from kitchens to furniture.<br/> We prioritize your needs, delivering high-quality products with a focus on functionality, style, and fast delivery at reasonable prices.</p>
          
          <div className="Learn More d-flex justify-content-evenly align-items-center  ">
            <h3 data-aos="fade-up" data-aos-once="false" data-aos-duration='1000'  className='h5 fw-bolder'> LEARN MORE</h3>
            <button data-aos="fade-up" data-aos-once="false" data-aos-duration='1100' onClick={() => navigate('/About')} className={`${Style.btn} bg-white `}>
                <i className='fa-solid fa-arrow-right'></i>
            </button>
            </div>

        </div>
      </div>

</div>
</div>
  </section>
    {/* View Portfolio */}
<section  data-aos="fade-up"  data-aos-easing='ease-in-sine' data-aos-delay='200' data-aos-duration='600'   className='mt-5 mb-5' >
<div className={`${Style.HomeBackground} `}>
  <div className={`${Style.HomeBackgroundLayer} d-flex justify-content-center align-items-center  `}>
    
  <div className="text-center mx-auto">
        <h3 className='h2 text-white'>Get Inspiration Viewing <br /> Our Portfolio</h3>
        <button 
        onClick={() => navigate('/Portfolio')}
          data-aos="fade-up" 
          data-aos-easing='ease-in-sine'  
          data-aos-once="false"  
          className='btn btn-dark'> 
          View More
        </button>
      </div>
    
  </div>
  </div>
  
</section>

<section id='Services'  className="OurServices mt-5 mb-5">
      <div className={ `${Style.ServicePic} ` }>
      <div className={`${Style.ServicePicLayer} d-flex flex-column align-items-center justify-content-center `}>
        <h1 className=' fw-bolder h2 text-white'> What we Offer</h1>
        <p className=' fw-lighter text-white h6  '>We specialize in optimizing small spaces to meet your needs. </p>
          <p className=' fw-lighter text-white h6  '> First, we listen, then design with both functionality and aesthetics in mind. You'll get all the info and options to make the best choice.</p>
          <p className=' fw-lighter text-white h6'>We promise quality products, fast delivery, and reasonable prices.</p>
          <p className=' fw-lighter text-white h5 p-2'> You deserve the best!</p>
      </div>
      </div>
      <div className=" container-fluid ">
      <div className="row justify-content-evenly align-items-center">
      <div data-aos="fade-up" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='800' className="col-md-5">
        
        <div  className={`${Style.imgContan}`}>
        
        <img className={`${Style.ServiceImg}`}  src={kitchen}></img>
        
        <div  data-aos="fade-up" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='500' className="contents d-flex align-items-center justify-content-center">
          <h5 className='fw-bold p-4 text-center'>Kitchen Design</h5>
         <p className='h6 text-center fw-lighter p-4'>Transform your kitchen with our custom designs, perfectly tailored to your space, budget, and materials. Explore innovative solutions that combine elegance and practicality, turning your dream kitchen into reality!</p>
       </div>
       </div>
     </div>

     <div data-aos="fade-up" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='800' className="col-md-5">
        
        <div  className={`${Style.imgContan}`}>
        
        <img className={`${Style.ServiceImg}`}  src={Dressing}></img>
        
        <div  data-aos="fade-up" data-aos-easing='ease-in-sine'  data-aos-once="false"  data-aos-duration='500' className="contents d-flex align-items-center justify-content-center">
        <h5 className='fw-bold p-3 text-center'>Dressing Design</h5>
         <p className='h6 text-center fw-lighter p-4'>Our dressing room designs, including wardrobes, shelving units, and vanity stations, are tailored to your space, needs, budget, and materials. We offer various mirror shapes and lighting options to enhance both functionality and style.</p>
       </div>
       </div>
     </div>
        </div>
        </div>
    
  </section>

 




  
  {/* Working Steps */}
<section data-aos="fade-up"  data-aos-once="false" data-aos-duration='1000' className={`${Style.WorkingSteps} mt-5 mb-5`}>
  <div className= {`${Style.WorkingStepsLayer}  d-flex justify-content-center align-items-center `}>


      <div className="container-fluid p-2 ">
        
        <div className="row mt-3 p-4  justify-content-evenly align-items-center">
          <div className="col-md-12">
            <h1 className='text-center h2 fw-bolder'>How we are working</h1>
            <p className='text-center h6 fw-lighter mb-5'>Our specialist will professionally advice you on  all issues<br/> and provide recommendations on the choice of material and design.</p>
          </div>
          <div className={`col-md-2 }`}>
            <div className={`${Style.WorkingBorder}`}>
            <i className="fa fa-phone text-center"></i>
            </div>
            <h4 className='h6 mt-2'> Consultaion</h4>

          </div>

          <div className={`col-md-2 }`}>
            <div className={`${Style.WorkingBorder}`}>
            <i class="fa-solid fa-chalkboard-user"></i>
            </div>
            <h4 className='h6 mt-2'>Personal meeting</h4>

          </div>

          <div className={`col-md-2 }`}>
            <div className={`${Style.WorkingBorder}`}>
            <i class="fa-solid fa-pen-ruler"></i>
            </div>
            <h4 className='h6 mt-2'> Measurements</h4>

          </div>
          <div className={`col-md-2 }`}>
            <div className={`${Style.WorkingBorder}`}>
            <i class="fa-regular fa-handshake"></i>
            </div>
            <h4 className='h6 mt-2'>Cost Discussion</h4>

          </div>
          
          <div className={`col-md-2 }`}>
            <div className={`${Style.WorkingBorder}`}>
            <i class="fa-solid fa-list-check"></i>
            </div>
            <h4 className='h6 mt-2'> Confirmation</h4>

          </div>
          <div className={`col-md-2 }`}>
            <div className={` ${Style.WorkingBorder} `}>
            <i class="fa-solid fa-check"></i>
            </div>
            <h4 className='h6 mt-2'> Satisfied customer</h4>

          </div>
          
        </div>
      </div>
      </div>
     </section>

    
  <section  className="ContactUs mt-5 vh-100 ">
    <div className="container-fluid  py-3 m-5">
      <div className="row  justify-content-evenly align-items-center  p-4 ">
        <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1100' className="col-md-4">
          <h1 className='h5'> it's time to</h1>
          <h2>DISCUSS YOUR <br/> PROJECT</h2>
          <p className='fw-lighter h6 fw-1'>To start cooperation with our Agency.Fill out the Application below and we will contact you as soon as possible.</p>

          <form>
            <label htmlFor="Name"></label>
            <input className= {` ${Style.formControl }`} id='Name' name='Name' placeholder='Name:' type='text' ></input>
            <label  htmlFor="Phone"></label>
            <input className={` ${Style.formControl }`} id='Phone' name='Phone' placeholder='Phone:' type='tel'></input>

            <div className="sendRequest d-flex justify-content-between align-items-center mt-3 ">
            <h3 className='h5 fw-bolder mt-2'> SEND A REQUEST</h3>
            <button className={`${Style.btn}`}> <i className='fa-solid fa-arrow-right'></i></button>
            </div>
          </form>
        </div>
        <div className="col-md-6 offset-2 ">
          <div className={`${Style.imgcontainer} `}>
          <img src={Dressing} className='w-100' alt="Dressing"/>

          </div>
        </div>
      </div>

</div>

  </section>

  <section  className='location mt-5'>
    <div className="container-fluid p-3">
   
      <div className="row  justify-content-evenly align-items-center  m-2 p-4">
      
        <div className="col-md-4  p-3">
        <h1 className='h1'> Get to know us<br/> personally</h1>
        <h2 className='h4'>Our Contacts:</h2>
        
        <div className={` d-flex flex-column mb-2 mt-4 ${Style.contacts}`}>
          <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1000'>
          <h2 className='h5 mt-3'> The agency is located at:</h2>
        <i className="fa fa-map-marker">
                  <p className='h6 d-inline-flex p-2 '>St.tagamo3</p>
                </i>
          </div>
          <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1000'>
        
                <h2 className='h5 mt-3'> Contact us by mail:</h2>
        <i className="fa fa-envelope">

                  <p className='h6 d-inline-flex p-2'>Mahmoud.gabr@hotmail.co.uk</p>
                </i>
                </div>
                <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1200'>
                <h2 className='h5 mt-3'> Call us on this number:</h2>
                <i className="fa fa-phone">
                  <p className='h6 d-inline-flex p-2'>+201223464949</p>
                </i>
                </div>
        </div>
        </div>
        <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1100' className={`col-md-6 offset-2 ${Style.MapLocator}`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1288555942156!2d31.314536475346742!3d30.09049577490041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815c6eb02fdc3%3A0x563a6dcb55a34cbe!2sWood%26Bronze%20Designs!5e0!3m2!1sen!2seg!4v1727351317155!5m2!1sen!2seg" 
        width="600" 
        height="450" 
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div>

      </div>
    </div>
  </section>
   
  
</section>
  
     
    </>
  )
}
