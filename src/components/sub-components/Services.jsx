import React from 'react';
import '../../styles/sub-style/Services.css';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img1.jpg';
import image3 from '../../assets/img1.jpg';
import image4 from '../../assets/img1.jpg';

const Service = () => {
  
  return (
    <section id= "services">
     <div className="service-container">
      <h1 className="service-title">Our Services</h1>
    <div className="service-section">
      <div className="service-card" style={{ backgroundImage: `url(${image1})` }}>
        <div className="service-content">
          <h2>TOGETHER</h2>
          <p>54 glorious years dedicated to farmers and the family called IFFCO</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="service-card" style={{ backgroundImage: `url(${image2})` }}>
        <div className="service-content">
          <h2>FOR</h2>
        </div>
      </div>
      <div className="service-card" style={{ backgroundImage: `url(${image3})` }}>
        <div className="service-content">
          <h2>GREATER</h2>
        </div>
      </div>
      <div className="service-card" style={{ backgroundImage: `url(${image4})` }}>
        <div className="service-content">
          <h2>GOOD</h2>
        </div>
      </div>
     </div>
    </div>
    </section>
   
  );
 
}

export default Service;