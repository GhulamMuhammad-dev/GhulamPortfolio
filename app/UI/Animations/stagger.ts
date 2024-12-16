import { gsap } from 'gsap';

export const stagger = (elements: HTMLElement[], duration: number = 1) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration, ease: 'power2.out', stagger: 0.2 }
  );
};
