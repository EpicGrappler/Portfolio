import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, hasAnimated]);

  return [elementRef, isVisible];
};

export const useStaggeredAnimation = (itemCount, delay = 100) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of child elements
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * delay);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [itemCount, delay]);

  return [containerRef, visibleItems];
};

// Scroll animation component
export const ScrollAnimatedDiv = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = '0.8s',
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold, rootMargin);

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getInitialTransform(animation, isVisible),
        transitionDelay: `${delay}ms`,
        transitionDuration: duration,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  );
};

// Helper function to get initial transform based on animation type
const getInitialTransform = (animation, isVisible) => {
  if (isVisible) return 'translateY(0) translateX(0) scale(1) rotate(0deg)';
  
  switch (animation) {
    case 'fadeInUp':
      return 'translateY(40px)';
    case 'fadeInDown':
      return 'translateY(-40px)';
    case 'fadeInLeft':
      return 'translateX(-40px)';
    case 'fadeInRight':
      return 'translateX(40px)';
    case 'scaleIn':
      return 'scale(0.8)';
    case 'slideInUp':
      return 'translateY(60px)';
    case 'slideInDown':
      return 'translateY(-60px)';
    case 'slideInLeft':
      return 'translateX(-60px)';
    case 'slideInRight':
      return 'translateX(60px)';
    case 'rotateIn':
      return 'rotate(-180deg) scale(0.8)';
    case 'bounceIn':
      return 'scale(0.3)';
    case 'flipIn':
      return 'rotateY(-90deg)';
    default:
      return 'translateY(40px)';
  }
};

// Animation variants for different types of animations
export const animationVariants = {
  fadeInUp: 'fadeInUp',
  fadeInDown: 'fadeInDown',
  fadeInLeft: 'fadeInLeft',
  fadeInRight: 'fadeInRight',
  scaleIn: 'scaleIn',
  slideInUp: 'slideInUp',
  slideInDown: 'slideInDown',
  slideInLeft: 'slideInLeft',
  slideInRight: 'slideInRight',
  rotateIn: 'rotateIn',
  bounceIn: 'bounceIn',
  flipIn: 'flipIn'
};

export default useScrollAnimation;