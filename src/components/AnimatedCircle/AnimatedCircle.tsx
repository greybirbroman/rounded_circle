import './AnimatedCircle.scss';
import React, { useEffect, useCallback } from 'react';
import { AnimatedCircleProps } from '../../types';
import { useEvents } from '../../context/EventsContext';
import useAnimatedCircle from '../../utils/hooks/useAnimatedCircle';
import { opacityFomTo, rotateTo } from '../../utils/gsap';

const AnimatedCircle = ({
  numberOfDots,
  circleRadius,
}: AnimatedCircleProps) => {
  const { selectedEvent } = useEvents();

  const {
    width,
    height,
    initialAngle,
    selectedDot,
    hovered,
    handleDotClick,
    handleMouseOn,
    handleMouseOut,
  } = useAnimatedCircle({ numberOfDots, circleRadius });

  const rotateToSelectedDot = useCallback(() => {
    rotateTo('.circle', -initialAngle, 1);
    rotateTo('.dot', initialAngle, 0.35);
    opacityFomTo('.dot-category');
  }, [selectedDot, numberOfDots]);

  useEffect(() => {
    rotateToSelectedDot();
  }, [rotateToSelectedDot]);

  return (
    <>
      <div className="circle" style={{ width: width, height: height }}>
        <div className="dots-container" >
          {[...Array(numberOfDots)].map((_, index) => {
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
      {selectedEvent ? (
        <p className="dot-category">{selectedEvent?.category}</p>
      ) : null}
    </>
  );
};

export default AnimatedCircle;
