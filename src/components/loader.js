'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  useEffect(() => {
    const timer = document.querySelector('.line1-part1 h5');
    let grow = 0;

    const tl = gsap.timeline();

    // Animate the text appearance

    tl.to(".line", {
      opacity: 1,
      duration: 0.1
    })
    tl.from(".line h1, .line h2", {
      y: 150,
      stagger: 0.2,
      duration: 0.6,
      delay: 0.5,
    });
    // Increment the number and show opacity
    tl.from(".line1-part1, .line h2", {
      opacity: 0,
      onStart: () => {
        const interval = setInterval(() => {
          if (grow < 100) {
            timer.innerHTML = ++grow;
          } else {
            clearInterval(interval);
          }
        }, 33); // Adjust this interval as needed for timing
      },
    });
    tl.to(".line h1", {
      opacity: 0,
      delay: 3.2,
      stagger: 0.1
    })
    // Fade out the loader and slide it up
    tl.to("#loader", {
      delay: 0.1, // Optional delay after the count reaches 100
      y: "-100%", // Move loader out of view upwards
      duration: 1, // Duration of the upward slide
      ease: "power3.inOut",
    });
    tl.set("#loader", { display: "none" });

    
  },
  
  []);

  return (
    <>
      <div
        id="loader"
        className=" h-[100vh] w-full fixed z-[999] text-white bg-black lg:px-[25vh] md:px-[20px] sm:px-[15px] sm:py-[60vw] md:py-[50vw]  lg:py-[10vw] leading-tight"
      >
        <div className="line opacity-0 md:flex-row sm:flex-col sm:items-start ">
          <div className="line1-part1 md:pt-[14px] ">
            <h5 className="font-silkSerif ">00</h5>
            <h6 className="font-silkSerif">- 100</h6>
          </div>
          <h1>Your</h1>
        </div>
        <div className="line opacity-0">
          <h1>Web Experience</h1>
        </div>
        <div className="line opacity-0">
          <h1>Is Loading Right</h1>
          <h2>Now</h2>
        </div>
      </div>
    </>
  );
};

export default Loader;
