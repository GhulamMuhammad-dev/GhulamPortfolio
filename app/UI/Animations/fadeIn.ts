import { gsap } from 'gsap';

export const fadeIn = (element: HTMLElement, duration: number = 1) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration, ease: 'power2.out' }
  );
};