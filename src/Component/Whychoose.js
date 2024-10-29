import React from 'react';
import "../App.css";
import first from '../image/first.gif';
import second from '../image/second.gif';
import third from '../image/third.gif';
export default function WhyChoose() {
  return (
    <section className='About-1 pb-5'>
    <div className='container py-5'>
      <h2 className='heading mt-3'>Why Choose</h2>
      <div className='upper-content text-center'>
        <p className='fs-2 fw-bold'> Amara Jyothi Public School (AJPS)?</p>
      <p>We’ll give you 3 compelling reasons…</p>
      </div>
    <div className='row'>

     <div className='col-md-4 col-sm-12 col-4'>
      <div className='content-col p-3'>
        <img className='first-img m-3 mb-4' src={first} alt='' width={80} />
        <h5>Premier Location and CBSE Affiliation</h5>
        <p>Amara Jyothi Public School is situated in the heart of Krishnarajapuram, Bengaluru, providing an inspiring environment for learning. Founded in 2004, AJPS is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, ensuring students receive a high-quality education that prepares them for a global future.</p>
      </div>
     </div>
     <div className='col-md-4 col-sm-12 col-4'>
     <div className='content-col p-3'>
     <img className='first-img m-3 mb-4' src={second} alt='' width={80} />
     <h5>A Visionary Approach to Holistic Education</h5>
     <p>Led by the esteemed Shri. Srinivasa K N, AJPS has always prioritized the importance of seamless, quality education. Through the support of the Amara Jyothi Educational Trust, our institution is dedicated to nurturing creativity, critical thinking, and strong values in students, preparing them to become future leaders and change-makers.</p>
     </div>
     </div>
     <div className='col-md-4 col-sm-12 col-4'>
     <div className='content-col p-3'>
     <img className='first-img m-3 mb-4' src={third} alt='' width={80} />
     <h5>Commitment to Empowering Young Minds for a Bright Future</h5>
     <p>AJPS believes in the transformative power of the youth and their potential to make a positive impact on the world. We envision our students as innovators, builders, and leaders who contribute meaningfully to society. Our commitment to accessible, affordable, and forward-thinking education sets AJPS apart as an institution that truly empowers young minds.</p>
     </div>
     </div>

    </div>
</div>
</section>
  )
}
