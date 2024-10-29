import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonials data with name, post, text, and rating
const testimonials = [
  { id: 1, name: "John Doe", post: "CEO", text: "Great service and friendly staff!", rating: 5 },
  { id: 2, name: "Jane Smith", post: "Marketing Manager", text: "I had an amazing experience with this company.", rating: 4 },
  { id: 3, name: "Alice Johnson", post: "Software Engineer", text: "Would highly recommend to anyone looking for quality.", rating: 5 },
  { id: 4, name: "Michael Brown", post: "Product Manager", text: "Exceptional support and guidance.", rating: 5 },
  { id: 5, name: "Emily Clark", post: "Designer", text: "Loved working with this team!", rating: 4 },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show three slides at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show two slides for medium screens
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one slide for small screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='About-5 p-5'>
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
     <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '10px' }}>What Our Clients Say</h2>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
        We value our clients' feedback and strive to provide exceptional service every day.
      </p>
      <Slider {...settings} className='text-start'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px", textAlign: "center" }}>
            <h3 className='fs-5'>{testimonial.name}</h3>
            <p className='f-6'><strong>{testimonial.post}</strong></p>
            <p className='fs-6'>{testimonial.text}</p>
            <p style={{ color: "green", fontSize: "1.5rem" }}>{"⭐".repeat(testimonial.rating)}</p>
          </div>
        ))}
      </Slider>
      <div className='button-1'> 
      <a className='a-read-more mt-5 mb-3'>Read More...</a>
      </div>
    </div>
    </div>
  );
}
