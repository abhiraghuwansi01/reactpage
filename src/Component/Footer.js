import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "../App.css"; // Custom CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer bg-dark  pt-5">
      <div className="container">
        {/* Upper Row with Links */}
        <div className="row">
          {/* Column 1 - Slider Revolution */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase font-weight-bold mb-3 text-start">
              Slider Revolution
            </h6>
            <ul className="list-unstyled text-start">
              {[
                "Build Anything Visually",
                "Pro-Level Design",
                "Templates",
                "Advanced Transitions",
                "Addons",
                "Upgrade To Premium",
                "Affiliate Program",
                "WordPress Hosting",
              ].map((link, index) => (
                <li key={index}>
                  <a className="d-block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2 - Support */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase font-weight-bold mb-3 text-start">
              Support
            </h6>
            <ul className="list-unstyled text-start">
              {[
                "Help Center",
                "Manual",
                "FAQs",
                "Contact Us",
                "Complaints",
                "DMCA",
                "Open a Ticket",
              ].map((link, index) => (
                <li key={index}>
                  <a className=" d-block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 - Platforms */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase font-weight-bold mb-3 text-start">
              Platforms
            </h6>
           
            <ul className="list-unstyled text-start">
              {[
                "WordPress v6.x",
                "Shopify v6.x",
                "jQuery v5.4",
                "Magento v6.2",
                "Prestashop v6.x",
                "OpenCart v5.3",
                "TYPO3 v6.x",
                "Essential Grid Gallery",
              ].map((link, index) => (
                <li key={index}>
                  <a className=" d-block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 4 - Resources */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase font-weight-bold mb-3 text-start">
              Resources
            </h6>
            <ul className="list-unstyled text-start">
              {[
                "Pricing",
                "Terms of Use",
                "Legal Disclosure",
                "Privacy Policy",
                "Licensing",
                "Cookie Policy",
                "Sitemap",
                "Newsletter",
              ].map((link, index) => (
                <li key={index}>
                  <a className=" d-block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Lower Row with Social Icons and Copyright */}
      <div className="footer-bottom container-fluid">
      <img alt="dummy" className="img-dummy-footer d-none" />
        <div className="row">
          {/* Social Icons Column */}
          <div className="col-12 col-md-6">
            <div className="social-icons d-flex">
              <a className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a className="social-icon" aria-label="Pinterest">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Copyright Column */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="copyright">
              ©2024 AMARA JYOTHI PUBLIC SCHOOL. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
