// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top left of the window
  }, [pathname]); // This effect runs when 'pathname' changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
