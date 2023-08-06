// useViewportWidth.js
import { useState, useEffect } from 'react';

const useViewportWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Update viewport width on mount and resize
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Initial update
    window.addEventListener('resize', handleResize);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useViewportWidth;
