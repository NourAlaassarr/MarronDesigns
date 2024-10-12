import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <section className='FooterLayout mt-4 py-5'>
        <div className=" container-fluid py-5 ">
          <div className="row justify-content-center align-items-center p-3">
            <div className="col-md-4 mb-4"> {/* Added margin-bottom */}
              <h1 className='text-capitalize fw-bolder'>
                MARRÓN <br /> Designs
              </h1>
              <h2 className='h3 text-muted'>You Deserve The Best</h2>
            </div>
            <div className="col-md-3 mb-2"> {/* Added margin-bottom */}
              <h4>Useful Links</h4>
              <div className={`d-flex flex-column ${Style.UsefulLinks}`}>
                <Link to={'/About'} className='text-decoration-none'>About</Link>
                <Link to={'/Services'} className='text-decoration-none'>Services</Link>
                <Link to={'/ContactUs'} className='text-decoration-none'>Contact Us</Link>
                <Link to={'/FAQ'} className='text-decoration-none'>FAQ</Link>
              </div>
            </div>
            <div className="col-md-3 mb-4"> {/* Added margin-bottom */}
              <h4>Head Office</h4>
              
              <div className={`d-flex flex-column mb-2  ${Style.UsefulLinks}`}>
              
                <i className="fa fa-map-marker">
                  <p className='h6 d-inline-flex p-2 offset-1'>St.tagamo3</p>
                </i>
              
                <i className="fa fa-envelope">
                  <p className='h6 d-inline-flex p-2 offset-1'>Mahmoud.gabr@hotmail.co.uk</p>
                </i>
                <i className="fa fa-phone">
                  <p className='h6 d-inline-flex p-2 offset-1'>+201223464949</p>
                </i>
              </div>
            </div>
            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center mb-4"> {/* Added margin-bottom */}
              <h4 className='h3 fw-bolder'>Get in Touch</h4>
              <div className={`${Style.SocialLinks} d-flex`}>
                <div className={`${Style.LinkBoarder} d-flex justify-content-center align-items-center p-1`}>
                  <Link to={'https://wa.me/201223464949'}>
                    <i className="fab mx-2 fa-whatsapp"></i>
                  </Link>
                </div>
                <div className={`${Style.LinkBoarder} d-flex justify-content-center align-items-center p-1`}>
                  <Link to={'https://www.instagram.com/marrondesigns/'}>
                    <i className="fab mx-2 fa-instagram"></i>
                  </Link>
                </div>
                <div className={`${Style.LinkBoarder} d-flex justify-content-center align-items-center p-1`}>
                  <Link to={'https://www.tiktok.com/@marrondesigns'}>
                    <i className="fab mx-2 fa-tiktok"></i>
                  </Link>
                </div>
                <div className={`${Style.LinkBoarder} d-flex justify-content-center align-items-center p-1`}>
                  <Link to={'https://www.facebook.com/marrondesigns'}>
                    <i className="fab mx-2 fa-facebook"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-md-12 mt-3  ${Style.texts}`}>
              <div className={`${Style.Line}`}></div>
              <p className='text-muted text-center mt-3'>All Rights Reserved <i class="fa-solid fa-copyright m-2"></i>MARRÓNDESIGNS 2024</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
