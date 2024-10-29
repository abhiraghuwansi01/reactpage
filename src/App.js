import React from 'react';
import './App.css';
import Header from './Component/Header';
import Slider from './Component/Slider';
import About from './Component/About';
import WhyChoose from './Component/Whychoose';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Testimonials from './Component/Testimonials';
import ScrollToTopButton from './Component/ScrollToTopButton';
import GalleryComponent  from './Component/Gallery';
import { Features } from './Component/Features';
import Newsletter from './Component/Newsletter';
import Footer from './Component/Footer';
import Parallax from './Component/Parallax';


function App() {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <Slider />
      <About />
      <WhyChoose/>
      <Section3 />
      <Section4 />
      <Testimonials />
      <GalleryComponent/>
      <Features/>
      <Newsletter/>
      <ScrollToTopButton />
      <Footer/>
    </div>
  );
}

export default App;
