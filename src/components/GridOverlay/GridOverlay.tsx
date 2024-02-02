import React from 'react';
import './GridOverlay.scss';

const GridOverlay: React.FC = () => {
  const renderGridCells = () => {
    const count = 4;
    const cells = new Array(count).fill(null).map((_, index) => (
      <div key={index}></div>
    ));
    return cells;
  };

  return (
    <div className="overlay">
      {renderGridCells()}
    </div>
  );
};

export default GridOverlay;
