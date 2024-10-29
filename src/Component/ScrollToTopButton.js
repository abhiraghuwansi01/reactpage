import React, { useState, useEffect } from "react";
import "../App.css";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      console.log("Window scroll position:", window.scrollY); // Debugging
      setShowScrollTop(window.scrollY > 100); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showScrollTop && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑ Top
      </button>
    )
  );
};

export default ScrollToTopButton;
