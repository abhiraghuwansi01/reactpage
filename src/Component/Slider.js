import React, { useRef, useState, useEffect } from "react";
import img1 from '../image/student.png';
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Slider = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSliderComplete, setIsSliderComplete] = useState(false);
  const totalSlides = 3;

  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    dots: false,
    arrows: true,
    nextArrow: <div className="arrow arrow-next">↓</div>,
    prevArrow: <div className="arrow arrow-prev">↑</div>,
    beforeChange: (current, next) => {
      setIsSliderComplete(next === totalSlides - 1); // Unlock scroll on last slide
    },
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const slider = sliderRef.current;

      if (!isSliderComplete) {
        event.preventDefault(); // Prevent default scrolling

        if (event.deltaY > 0) {
          slider.slickNext();
        } else if (event.deltaY < 0) {
          slider.slickPrev();
        }
      } else {
        if (event.deltaY > 0 && sectionRef.current) {
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const sliderElement = sliderRef.current.innerSlider.list;
    sliderElement.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      sliderElement.removeEventListener("wheel", handleScroll);
    };
  }, [isSliderComplete]);

  return (
    <div className="main-container">
      {/* Slider Section */}
      <div className={`slider-container ${isSliderComplete ? "unlocked" : ""}`}>
        <Sliders ref={sliderRef} {...settings}>
          <div className="slide">
            <div className="content">
              <div className="group-text">
            
              <h1>

<svg height="100" stroke="#bac736" stroke-width="2" class="text-line" width="500px"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Happy Place</text></svg>
</h1>
</div>
<div className="group-text1">
              <h2>For Young Mind</h2>
              </div>
              <div className="group-text2">
  <p className="slide-up-text">
    At [School Name], we nurture young minds in a vibrant community, inspiring creativity and a lifelong passion for learning.
  </p>
</div>
            </div>
            <img src={img1} className="img-slide-1" width={500} alt="" />
          </div>
          <div className="slide">
            <div className="content">
            <div className="group-text">
            
            <h1>

<svg height="100" stroke="#bac736" stroke-width="2" class="text-line" width="500px"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Happy Place</text></svg>
</h1>
</div>
<div className="group-text1">
              <h2>For Young Mind</h2>
              </div>
              <div className="group-text2">
  <p className="slide-up-text">
    At [School Name], we nurture young minds in a vibrant community, inspiring creativity and a lifelong passion for learning.
  </p>
</div>
           
            
            </div>
            <img src={img1} className="img-slide-1" width={500} alt="" />
          </div>
          <div className="slide">
            <div className="content">
            <div className="group-text">
            
              <h1>
<svg height="100" stroke="#bac736" stroke-width="2" class="text-line" width="500px"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Happy Place</text></svg>
             </h1>
</div>
<div className="group-text1">
              <h2>For Young Mind</h2>
              </div>
              <div className="group-text2">
  <p className="slide-up-text">
    At [School Name], we nurture young minds in a vibrant community, inspiring creativity and a lifelong passion for learning.
  </p>
</div>
            
            </div>
            <img src={img1} className="img-slide-1" width={500} alt="" />
          </div>
        </Sliders>
      </div>

      {/* Additional Page Section */}
      {/* <div ref={sectionRef} className="next-section">
        <h2>Next Section</h2>
        <p>This content appears after the slider is complete.</p>
      </div> */}
    </div>
  );
};

export default Slider;
