import gsap from 'gsap'

const slideFrom = (target: string) => {
  return gsap.from(target, {
    y: -60,
    opacity: 0,
  });
};

const slideTo = (target: string) => {
  return gsap.to(target, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  });
};

const rotateTo = (target: string, angle: number, duration: number) => {
  return gsap.to(target, {
    rotation: angle,
    duration: duration,
    ease: 'power4.out',
  });
};

const opacityFomTo = (target: string) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
    },
    { opacity: 1, duration: 1 },
  );
};

export { slideFrom, slideTo, rotateTo, opacityFomTo };
