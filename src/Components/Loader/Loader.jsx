import React, { useEffect } from 'react';
import Styles from './Loader.module.css'; 
import $ from 'jquery';

export default function Loader() {
  // Trigger the animation after component mounts
  useEffect(() => {
    $('.first').animate({ height: '100vh' }, 1500);
    $('.second').animate({ height: '100vh' }, 2000);
    $('.third').animate({ height: '100vh' }, 2500, () => {
      $('.spinning').removeClass('d-none').fadeIn(); // Remove d-none before fading in
    });
  }, []);

  return (
    <div className={`vh-100 position-relative ${Styles.Loader}`}>
      
      <div className="row align-items-start">
        <div className={`col-md-2 first ${Styles.first}`}></div>
        <div className={`col-md-4 second ${Styles.second}`}></div>
        <div className={`col-md-6 third ${Styles.third}`}></div>
      </div>

 
      <div className="spinning position-absolute top-50 start-50 translate-middle d-none">
        <i className='fas fa-spinner fa-spin text-white'></i>
      </div>
    </div>
  );
}
