import React from 'react';
import '../../styles/sub-style/Ecosystem.css';
import fertilizerIcon from '../../assets/icons/fertilizerIcon.svg';
import insuranceIcon from '../../assets/icons/insurance.svg';
import logisticsIcon from '../../assets/icons/logistics.svg';
import retailIcon from '../../assets/icons/retail.png';

// Import other icons similarly

const Ecosystem = () => {
  const items = [
    { icon: fertilizerIcon, name: 'Fertilizers' },
    { icon: insuranceIcon, name: 'General Insurance' },
    { icon: logisticsIcon, name: 'Logistics' },
    { icon: retailIcon, name: 'Rural Retail' },
     // Add other items similarly
  ];

  return (
    <section id="ecosystem">
      <h2>Organic Farm Ecosystem</h2>
      <div className="ecosystem-items">
        {items.map((item, index) => (
          <div key={index} className="ecosystem-item">
            <img src={item.icon} alt={item.name} className="ecosystem-icon" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
