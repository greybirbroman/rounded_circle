import './AnimatedCircle.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { useEvents } from '../../context/EventsContext';

interface AnimatedCircleProps {
  numberOfDots: number;
  circleRadius: number;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  numberOfDots,
  circleRadius,
}) => {
  const { findEventByIndex, selectedEvent } = useEvents();
  const [selectedDot, setSelectedDot] = useState<number>(1);
  const [hovered, setHovered] = useState<number | null>(1);
  const [shoudShowCategory, setShoudShowCategory] = useState(true);

  const rotateToSelectedDot = useCallback(() => {
    // const initialAngle = -315 + (360 / numberOfDots) * selectedDot;
    const initialAngle = (360 / numberOfDots) * selectedDot;

    gsap.to('.circle', {
      rotation: -initialAngle,
      duration: 1,
      ease: 'power4.out',
    });
    gsap.to('.dot', {
      rotation: initialAngle,
      duration: 0.35,
      ease: 'power4.out',
    });
    gsap.fromTo(
      '.dot-category',
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1 },
    );
  }, [selectedDot, numberOfDots]);

  useEffect(() => {
    rotateToSelectedDot();
  }, [rotateToSelectedDot]);

  const handleDotClick = (dotIndex: number) => {
    setShoudShowCategory(true);
    setSelectedDot(dotIndex);
    findEventByIndex(dotIndex);
  };

  const handleMouseOn = (dotIndex: number) => {
    setHovered(dotIndex);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  const width = circleRadius * 2;
  const height = circleRadius * 2;

  return (
    <>
      <div className="circle" style={{ width: width, height: height }}>
        <div className="dots-container">
          {[...Array(numberOfDots)].map((_, index) => {
            // const angle = -315 + (360 / numberOfDots) * index;
            const angle = (360 / numberOfDots) * index;

            const radians = (angle * Math.PI) / 180;
            const x = circleRadius * Math.cos(radians);
            const y = circleRadius * Math.sin(radians);

            const isDotSelected =
              selectedDot === index + 1 || hovered === index + 1;

            return (
              <span
                key={index}
                className={`dot ${isDotSelected ? 'selected' : ''}`}
                onClick={() => handleDotClick(index + 1)}
                onMouseEnter={() => handleMouseOn(index + 1)}
                onMouseLeave={handleMouseOut}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                {isDotSelected ? index + 1 : null}
              </span>
            );
          })}
        </div>
      </div>
      {shoudShowCategory ? (
        <p className="dot-category">{selectedEvent?.category}</p>
      ) : null}
    </>
  );
};

export default AnimatedCircle;
