import React from 'react';
import "../App.css"; // Import your CSS
import Image1 from "../image/gallery/1.jpg";
import Image2 from "../image/gallery/2.jpg";
import Image3 from "../image/gallery/3.jpg";
import Image4 from "../image/gallery/4.jpg";
import Image5 from "../image/gallery/5.jpg";
import Image6 from "../image/gallery/6.jpg";
import Image7 from "../image/gallery/7.jpg";
import Image8 from "../image/gallery/8.jpeg"; // Corrected
import Image9 from "../image/gallery/9.jpg"; // Corrected

// Gallery data with updated image paths
export const Gallery = [
  {
    title: "Project Title 1",
    largeImage: Image1,
    smallImage: Image1 // or another image if you have one
  },
  {
    title: "Project Title 2",
    largeImage: Image2,
    smallImage: Image2 // Adjust as needed
  },
  {
    title: "Project Title 3",
    largeImage: Image3,
    smallImage: Image3 // Adjust as needed
  },
  {
    title: "Project Title 4",
    largeImage: Image4,
    smallImage: Image4 // Adjust as needed
  },
  {
    title: "Project Title 5",
    largeImage: Image5,
    smallImage: Image5 // Adjust as needed
  },
  {
    title: "Project Title 6",
    largeImage: Image6,
    smallImage: Image6 // Adjust as needed
  },
  {
    title: "Project Title 7",
    largeImage: Image7,
    smallImage: Image7 // Adjust as needed
  },
  {
    title: "Project Title 8",
    largeImage: Image8,
    smallImage: Image8 // Adjust as needed
  },
  {
    title: "Project Title 9",
    largeImage: Image9,
    smallImage: Image9 // Adjust as needed
  }
];

const ImageComponent = ({ title, largeImage, smallImage }) => {
    return (
        <div className="portfolio-item">
            <div className="hover-bg">
                <img src={largeImage} alt={title} className="img-fluid large-image" />
                <img src={smallImage} alt={title} className="img-fluid small-image" />
                <div className="hover-content">
                    <h4 className="image-title">{title}</h4>
                </div>
            </div>
        </div>
    );
};

// Gallery component
const GalleryComponent = () => {
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="row">
                    {Gallery.map((item, index) => (
                        <div key={`${item.title}-${index}`} className="col-sm-6 col-md-4 col-lg-4 p-0">
                            <ImageComponent
                                title={item.title}
                                largeImage={item.largeImage}
                                smallImage={item.smallImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryComponent;
