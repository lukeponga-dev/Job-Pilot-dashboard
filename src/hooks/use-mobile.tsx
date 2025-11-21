'use client';

import { useState, useEffect } from 'react';

export function useMobile(query: string = '(max-width: 767px)') {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Initial check
    handleResize(); 
    
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [query]);

  return isMobile;
}
