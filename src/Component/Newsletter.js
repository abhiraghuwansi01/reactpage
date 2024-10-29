import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { MdEmail } from 'react-icons/md'; // Import the email icon
import '../App.css';
import blogimage1 from '../image/b1.webp';
import blogimage2 from '../image/b2.jpg';
import blogimage3 from '../image/b3.jpg';

const Newsletter = () => {
  const blogPosts = [
    { title: 'Blog Post 1', image: blogimage1, link: '#', category: 'Tech' },
    { title: 'Blog Post 2', image: blogimage2, link: '#', category: 'Health' },
    { title: 'Blog Post 3', image: blogimage3, link: '#', category: 'Lifestyle' }
  ];

  const resources = [
    { title: 'Resource 1', image: blogimage1, link: '#', category: 'FAQ' },
    { title: 'Resource 2', image: blogimage2, link: '#', category: 'FAQ' },
    { title: 'Resource 3', image: blogimage3, link: '#', category: 'Video Tutorial' },
    { title: 'Resource 4', image: blogimage3, link: '#', category: 'Manual' }
  ];

  const faqItems = [
    { title: 'How to Install This Template?', content: 'Detailed instructions on installing the template.' },
    { title: 'Customize This Template', content: 'Guidance on how to customize the template.' },
    { title: 'Getting Started With Slider Revolution', content: 'Basics to get started with Slider Revolution.' },
    { title: 'FAQ & Tutorials', content: 'Answers to frequently asked questions and tutorials.' }
  ];

  return (
    <div className="newsleetter-container container my-5">
      <div className="text-center mb-4">
        <h2 className="text-danger font-weight-bold">Get The Most</h2>
        <p className="text-muted">Out Of This Slider Template</p>
        <p className="text-muted">Our in-depth resources will provide you with knowledge and instant solutions.</p>
      </div>

      <div className="row">
        {faqItems.map((item, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <Accordion>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
      </div>

      <div className="my-5 text-center">
        <div
          className="p-5"
          style={{ backgroundColor: '#6200ea', color: 'white', borderRadius: '10px' }}
        >
          <h3>Join 9+ million building unique content with Slider Revolution</h3>
          <button className="btn btn-primary mt-3">sliderrevolution</button>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-stretch">
        {/* Blog Section */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title font-weight-bold text-start">From The Blog</h3>
              {blogPosts.map((post, index) => (
                <div key={index} className="blogs">
                  <img src={post.image} alt={post.title} className="img-fluid mb-2" style={{ borderRadius: '8px' }} />
                 
                  <p>
                    <a href={post.link} className="text-primary blog-title">
                      {post.title}
                    </a>
                    <p className="text-primary blog-category">{post.category}</p>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title font-weight-bold text-start ">Popular Resources</h3>
              {resources.map((resource, index) => (
                 <div key={index} className="resource">
                 <img src={resource.image} alt={resource.title} className="img-fluid mb-2" style={{ borderRadius: '8px' }} />
                 <p>
                   <a href={resource.link} className="text-primary resource-title">
                     {resource.title}
                   </a>
                   <p className="text-primary resource-category">{resource.category}</p>
                 </p>
               </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h2 className="card-title font-weight-bold">
                Newsletter <MdEmail />
              </h2>
              <p>Join our 25,000+ subscribers to get the latest updates directly to your inbox.</p>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
