import gsap from 'gsap';

const slideFrom = (target: string) => {
  return gsap.from(target, {
    y: -20,
    opacity: 0,
  });
};

const slideTo = (target: string) => {
  return gsap.to(target, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'power4.out',
  });
};


export {
    slideFrom,
    slideTo
}