
import { Link } from 'react-router-dom'
import Logo  from '../../img/MARRON-LOGO-FINAL.png';
import Style from'./Navbar.module.css';
import { useLocation, userState } from 'react-router-dom';
import { useEffect } from 'react';
import DownloadPdf from '../DownloadPdf.js';

export default function Navbar() {


  return (
    <>
   <nav class={` ${Style.Navbar} navbar navbar-expand-lg bg-transparent  p-2 navbar-light  `}>
   <div  className='navbar-brand '>
     <Link to={'/Home'}> <img className={Style.LogoStyle} src={Logo} alt="logo"/></Link>
  </div>
 
 <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span  className="navbar-toggler-icon"></span>
 </button>
 
 <div  className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul  className="navbar-nav mr-auto">
     <li  className="nav-item active">
       <Link  className="nav-link fw-bold" to={"/Home"}>Home <span  className="sr-only"></span></Link>
     </li>
     <li  className="nav-item">
       <Link  className="nav-link fw-bold" to={'/About'}>About</Link>
     </li>
     <li  className="nav-item">
       <Link  className="nav-link fw-bold" to={'/Portfolio'}>Photo-Gallery</Link>
     </li>
    
     <li  className="nav-item">
       <Link  className="nav-link fw-bold" href="#">Events</Link>
     </li>
   </ul>
  
  
   <ul  className="navbar-nav ms-auto ">
   <li className={`nav-item active d-flex align-items-center p-2 fs-3 text-white  ${Style.socialLinks}`}>
     
             <Link  to={'https://www.instagram.com/marrondesigns/?fbclid=IwZXh0bgNhZW0CMTAAAR1yL4bM0B-3MKRf3cvhg-E7G-IYa1CXowZiWdhx8VNWZbb5F-0CY23RDY8_aem_c-NHWDNz9kOWCgw7ddP1zw'}><i className="fab mx-2 fa-instagram"> </i></Link>
              <Link to={'https://www.tiktok.com/@marrondesigns?fbclid=IwZXh0bgNhZW0CMTAAAR2dLxwKohTNQedoKZMj2aKeRRXZn2pz6ybEgujmj8Sc1PDmH-frU7Fn8dM_aem_vyasE1Vkixpt2dQbcu3PFw'}><i className="fab mx-2 fa-tiktok"></i></Link>
             <Link to='https://www.facebook.com/marrondesigns'><i className="fab mx-2 fa-facebook"></i></Link>
             <Link to={'https://x.com/marrondesigns?fbclid=IwZXh0bgNhZW0CMTAAAR2IsDnVuzbuOl5gL11UGbEoZWocBQh51GkmZ0SCro31OIJoR1ytGZphDW8_aem_3FeaIaXsS28qWqgSRLSrHg'}><i className="fab mx-2 fa-twitter"></i></Link>
              <Link to={'https://wa.me/201223464949'}><i className="fab mx-2 fa-whatsapp"> </i></Link>
           </li>
 
           <li className="nav-item active p-2">
           <li className="nav-item active p-2">

</li>
            </li>
   </ul>
 
 </div>
 </nav>
 
  
    </>
  )
}
