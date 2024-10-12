import React, { useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import { ScrollContainer, ScrollPage, Animator,Move,FadeIn,ZoomIn, ZoomInScrollOut,Zoom,StickyIn, Sticky,Fade, batch, FadeOut } from 'react-scroll-motion';
import Style from './Portfolio.module.css'
import img from '../../img/img2.jpg'
import SliderGsap from '../SliderGsap/SliderGsap.js';
import VerticalSwiper from '../Swiper/VerticalSwiper.jsx';

export default function Portfolio() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>

    <div className="container w-100">
    <VerticalSwiper/>
    </div>
 
{/* <ScrollContainer>
<ScrollPage page={(0)}> 
<div className={`${Style.section3}`}>
  <div className="div w-75">
  <h2> <Animator animation={FadeUp}>hiiiiiiii</Animator>
  </h2>
  </div>
   </div>
</ScrollPage>

<ScrollPage page={(1)}> 
  <Animator animation={FadeUp}>
    <h2>LFadeUp</h2>


  </Animator>
</ScrollPage>
<ScrollPage page={(2)}> 
  
</ScrollPage>


  </ScrollContainer>
      */}
      
    </>
  );
}
