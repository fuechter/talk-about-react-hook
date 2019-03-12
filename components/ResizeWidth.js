import React, { useEffect, useState } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return width;
  }
  
export default function ResizeWidth() {
    const width = useWindowWidth(); // Our custom Hook
    return (
      <p>Window width is {width}</p>
    );
  }