import React, { useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import './AnimatedTimePeriodBar.scss';

interface ITimePeriodBar {
  from: number | string | undefined;
  to: number | string | undefined;
}

const AnimatedTimePeriodBar = ({ from, to }: ITimePeriodBar) => {
  const [animationProps, setAnimationProps] = useSprings(2, () => ({
    from: { value: Number(from) },
    to: { value: Number(from) },
  }));

  useEffect(() => {
    setAnimationProps((index) => ({
      to: { value: index === 0 ? Number(from) : Number(to) },
    }));
  }, [from, to, setAnimationProps]);

  return (
    <div className="year__container">
      <animated.p className="from">
        {animationProps[0].value.to((val) => Math.round(val))}
      </animated.p>
      <animated.p className="to">
        {animationProps[1].value.to((val) => Math.round(val))}
      </animated.p>
    </div>
  );
};

export default AnimatedTimePeriodBar;
