import React from "react";
import "../App.css";
import about from "../image/about.jpg";
import { FaCheck } from "react-icons/fa"; // Import the check icon from Font Awesome

const About = () => {
  const aboutData = {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Why: [
      "Lorem ipsum dolor",
      "Tempor incididunt",
      "Lorem ipsum dolor",
      "Incididunt ut labore"
    ],
    Why2: [
      "Aliquip ex ea commodo",
      "Lorem ipsum dolor",
      "Exercitation ullamco",
      "Lorem ipsum dolor"
    ]
  };

  // Create elements
  const aboutSection = React.createElement('div', { id: 'about' },
    React.createElement('div', { className: 'container pb-5 pt-5' },
      React.createElement('div', { className: 'row' },
        React.createElement('div', { className: 'col-xs-12 col-md-6' },
          React.createElement('img', { src: about, className: "img-responsive", alt: "" })
        ),
        React.createElement('div', { className: 'col-xs-12 col-md-6' },
          React.createElement('div', { className: 'about-text text-start' },
            React.createElement('h2', null, "About Us"),
            React.createElement('p', null, aboutData.paragraph),
            React.createElement('p',{ className: 'fs-2 fw-bold' }, "Why Choose Us?"),
            React.createElement('div', { className: 'list-style row' },
              React.createElement('div', { className: 'col-lg-6 col-sm-6 col-xs-12' },
                React.createElement('ul', null,
                  aboutData.Why.map((d, i) => (
                    React.createElement('li', { key: `${d}-${i}` },
                      React.createElement(FaCheck, { className: "icon" }), // Use React Icons here
                      ` ${d}` // Append the text after the icon
                    )
                  ))
                )
              ),
              React.createElement('div', { className: 'col-lg-6 col-sm-6 col-xs-12' },
                React.createElement('ul', null,
                  aboutData.Why2.map((d, i) => (
                    React.createElement('li', { key: `${d}-${i}` },
                      React.createElement(FaCheck, { className: "icon" }), // Use React Icons here
                      ` ${d}` // Append the text after the icon
                    )
                  ))
                )
              )
            )
          )
        )
      )
    )
  );

  return aboutSection;
};
export default About;