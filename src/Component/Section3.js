import React from 'react'
import "../App.css";
import img from '../image/main-about-2.jpg';
export default function Section3() {
  return (
    <section className='About-2 pb-5'>
    <div className='container py-5'>
    <p className='fs-2 fw-bold mt-5 subheading'> Amara Jyothi Public School (AJPS)?</p>
    <h2 className='heading1-about-2 mt-3'><span className='heading-about-2'>Who Are We</span></h2>
      <div className='upper-content text-center mb-5'>
       <p className='lh-1'>School Affiliation Number:830149</p>
       <p className='lh-1'>School Code: 45118</p>
      </div>
      <div className='row'>
        <div className='col-12'>
            <p className='fs-3 fw-lighter text-about-2'>Amara Jyothi Public School (AJPS) is a prestigious educational institution nestled in the heart of Krishnarajapuram, Bengaluru. Established in 2004, it is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, and serves students from Pre-Primary through Senior Secondary levels. Founded with a vision of delivering seamless, quality education, AJPS is the realization of Shri Srinivasa K N’s aspirations to uplift the student community.</p>
        </div>
        
      </div>
      <div className='row'>
      <div className='col-md-6 col-sm-12'>
          <img className='img-about-2' src={img} width="100%" alt='' />
        </div>
        <div className='col-md-6 col-sm-12 text-start'>
            <p className='fs-5 fw-normal'>Operated under the <span className='span-p'>Amara Jyothi Educational Trust</span>, headquartered in Bengaluru, AJPS upholds a strong belief in the immense potential of today’s youth to shape every facet of the socio-economic landscape, both nationally and globally. Today’s youth are the innovators, creators, builders, and leaders of tomorrow, and AJPS is committed to fostering their growth to contribute meaningfully to the nation’s progress and economic vitality.</p>
            <p  className='fs-6 fw-light'><span className='span-p'>Amara Jyothi Public School</span> aspires to be a transformative force in school education, aligning with contemporary global standards. Our mission is to offer high-quality, affordable education that invigorates and inspires the creative minds of modern India.</p>
      </div>
      <div className='button-1'>
      <a className='a-read-more mt-5 mb-3'>Read More...</a>
      </div>
      </div>
    </div>
    </section>
  )
}
