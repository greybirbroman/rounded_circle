import React, { useState } from 'react';
import { useEvents } from '../../context/EventsContext';
import { AnimatedCircleProps } from '../../types';

const useAnimatedCircle = ({
  numberOfDots,
  circleRadius,
}: AnimatedCircleProps) => {
  const { findEventByIndex } = useEvents();

  const [selectedDot, setSelectedDot] = useState<number>(1);
  const [hovered, setHovered] = useState<number | null>(1);

  const initialAngle = (360 / numberOfDots) * selectedDot;

  const width = circleRadius * 2;
  const height = circleRadius * 2;

  const handleDotClick = (dotIndex: number) => {
    setSelectedDot(dotIndex);
    findEventByIndex(dotIndex);
  };

  const handleMouseOn = (dotIndex: number) => {
    setHovered(dotIndex);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  return {
    width,
    height,
    initialAngle,
    selectedDot,
    hovered,
    handleDotClick,
    handleMouseOn,
    handleMouseOut,
  };
};

export default useAnimatedCircle;
