// src/components/Fertilizers.jsx
import React from 'react';
 import '../../styles/sub-style/Fertilizers.css' // Import the CSS file

const Fertilizers = () => {
  return (
    <div className="fertilizers">
      <h1>Fertilizer Recommendations</h1>
      <p>Here are the best fertilizers and methods to use for your crops:</p>
      <ul>
        <li>Fertilizer 1: Description and usage instructions.</li>
        <li>Fertilizer 2: Description and usage instructions.</li>
        <li>Fertilizer 3: Description and usage instructions.</li>
        
      </ul>
    </div>
  );
};

export default Fertilizers;
