import React from "react";
import { FaComments, FaBullhorn, FaUsers, FaMagic } from "react-icons/fa"; // Import the required icons
import "../App.css";

const featuresData = [
  {
    icon: <FaComments className="icon" />, // Use the icon class here
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  },
  {
    icon: <FaBullhorn className="icon" />, // Use the icon class here
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  },
  {
    icon: <FaUsers className="icon" />, // Use the icon class here
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  },
  {
    icon: <FaMagic className="icon" />, // Use the icon class here
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
  }
];

export const Features = ({ data = featuresData }) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-12 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {data
            ? data.map((feature, index) => (
                <div key={`${feature.title}-${index}`} className="col-xs-6 col-md-3">
                  {feature.icon} {/* Show the icon here */}
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
