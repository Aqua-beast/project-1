import React, { useState } from 'react';
import DataEntry from './DataEntry';
import Tracker from './Tracker';

function Hero() {
  const [selectedComponent, setSelectedComponent] = useState(true);

  return (
    <div className="hero-container">
      <div className="button-container">
        <button
          className={`option-button ${selectedComponent ? 'active' : ''}`}
          onClick={() => setSelectedComponent(true)}
        >
          Data Entry
        </button>
        <button
          className={`option-button ${!selectedComponent ? 'active' : ''}`}
          onClick={() => setSelectedComponent(false)}
        >
          Tracker
        </button>
      </div>
      <div className="component-container">
        {selectedComponent ? <DataEntry /> : <Tracker />}
      </div>
    </div>
  );
}

export default Hero;
