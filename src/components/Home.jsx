// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Home.css'; // Import the CSS file
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import Ecosystem from './sub-components/Ecosystem';
import Initiatives from './sub-components/Initiatives';
import Products from './sub-components/Products';
import Services from './sub-components/Services';
import  InformationSection from './sub-components/InformationSection';
import Footer from './sub-components/Footer';
const Home = () =>
 {
  const images = [bg1, bg2, bg3];
  const texts = [
    { title: "Welcome To Organic Farm", subtitle: "Empowering Farmers with Knowledge" },
    { title: "Farmer Initiatives", subtitle: "Supporting Sustainable Agriculture" },
    { title: "Product and Services", subtitle: "Innovative Solutions for Your Farm" }
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage(prevImage => (prevImage + 1) % images.length);
        setFade(true);
      }, 500); // This timeout should match the CSS transition duration
    }, 5000); // Change image and text every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
      setFade(true);
    }, 500); // This timeout should match the CSS transition duration
  };

  return (
    <div className="home">
      <header
        className={`header ${fade ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
        onClick={handleClick}
      >
        <div className="header-overlay">
          <h1 className="header-title">{texts[currentImage].title}</h1>
          <p className="header-subtitle">{texts[currentImage].subtitle}</p>
        </div>
      </header>
      <Ecosystem />
      <Initiatives />
      <Products />
      <Services />
      <InformationSection />
      <Footer/>
    </div>
  );
};

export default Home;