import { useState,useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import About from './About';

const ScrollParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxEffect = useSpring({
    transform: `translateY(${scrollY * 0.5}px)`,
  });

  return (
    <animated.div style={parallaxEffect}>
      {/* <About /> */}
    </animated.div>
  );
};

export default ScrollParallax;
