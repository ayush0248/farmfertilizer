import React from 'react';
import '../../styles/sub-style/Initiatives.css'
import DTImage from '../../assets/img/DI.jpg';
import SOT from '../../assets/img/SOT.jpg';
import KM from '../../assets/img/KM.jpg';
import { Link } from 'react-router-dom';
const initiativesData = [
  {
    title: 'Drip Irrigation',
    description: 'Drip irrigation is the most efficient water and nutrient delivery system for growing crops. It delivers water and nutrients directly to the plants roots zone, in the right amounts, at the right time, so each plant gets exactly what it needs, when it needs it, to grow optimally.',
    image: DTImage,
    link: 'https://vikaspedia.in/agriculture/agri-inputs/farm-machinary/drip-irrigation-system'
  },
  {
    title: 'Soil health card',
    description: 'A Soil Health Card is used to assess the current status of soil health and, when used over time, to determine changes in soil health that are affected by land management',
    image: SOT,
    link: 'https://soilhealth.dac.gov.in/home'
    
  },
  {
    title: 'Krushi Mahotsav',
    description: 'The Krishi Mahotsav Yojana is an agricultural development scheme launched by the Government of Gujarat in the year 2010',
    image: KM,
    link : 'https://www.myscheme.gov.in/schemes/km'
  },
  
  // Add more initiatives as needed
];

const Initiatives = () => {
  return (
    <section className="initiatives">
      <h2>Farmer Initiatives By Goverment</h2>
      <div className="initiatives-container">
        {initiativesData.map((initiative, index) => (
          <div className="initiative-card" key={index}>
            <img src={initiative.image} alt={initiative.title} className="initiative-image" />
            <h3>{initiative.title}</h3>
            <p>{initiative.description}</p>
            <a href={initiative.link} target="_blank" rel="noopener noreferrer" className="initiative-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;