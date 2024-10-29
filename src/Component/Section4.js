import React from 'react';
import "../App.css";

import main from '../image/main-about-2.jpg';

export default function Section4() {
  return (
    <section className='About-3 pb-5'>
    <div className='container py-5'>
      <h2 className='heading mt-3'>Why Choose</h2>
      <div className='upper-content text-center'>
        <p className='fs-2 fw-bold'> Amara Jyothi Public School (AJPS)?</p>
      <p>We’ll give you 4 compelling reasons…</p>
      </div>
    <div className='row'>

     <div className='col-md-6 col-sm-12 col-6 p-2'>
      <div className='content-col1 p-3'>
        <img className='first-img m-3 mb-4' src={main} alt='' width={400} />
        <h5>FOUNDATIONAL STAGE</h5>
        <p>The Foundational Stage schooling at AJPS comprises of the Pre-Primary Section to Grade II. It forms the crux of the edifice of holistic child development.</p>
        <a className='a-about-3'>Known More</a>
      </div>
     </div>
     <div className='col-md-6 col-sm-12 col-6 p-2'>
     <div className='content-col1 p-3'>
     <img className='first-img m-3 mb-4' src={main} alt='' width={400} />
     <h5>PREPARATORY STAGE</h5>
     <p>The Preparatory Stage schooling at AJPS comprises of Grade III to Grade V. This is one of the most important phases in a
     child’s learning contour.</p>
     <a className='a-about-3'>Known More</a>
     </div>
     </div>
     <div className='col-md-6 col-sm-12 col-6 p-2'>
     <div className='content-col1 p-3'>
     <img className='first-img m-3 mb-4' src={main} alt='' width={400} />
     <h5>MIDDLE STAGE</h5>
     <p>The Middle Stage schooling at AJPS comprises of Grade VI to Grade VIII. It is a big leap from the previous arenas of learning to experiential learning.</p>
     <a className='a-about-3'>Known More</a>
     </div>
     </div>

     <div className='col-md-6 col-sm-12 col-6 p-2'>
     <div className='content-col1 p-3'>
     <img className='first-img m-3 mb-4' src={main} alt='' width={400} />
     <h5>SECONDARY STAGE</h5>
     <p>The Secondary Stage schooling at AJPS comprises of Grade IX to Grade XII. The corridors of education and learning are fully opened to multi-disciplinary system of education</p>
     <a className='a-about-3'>Known More</a>
     </div>
     </div>

    </div>
</div>
</section>
  )
}
