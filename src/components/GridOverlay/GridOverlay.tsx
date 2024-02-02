import React from 'react';
import './GridOverlay.scss';

interface GridOverlayProps {}

const GridOverlay: React.FC<GridOverlayProps> = () => {
  return (
    <div className="overlay">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default GridOverlay;