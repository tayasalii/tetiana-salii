'use client';

import { useState, useEffect } from 'react';

const SCREEN_TABLET = 768;
const SCREEN_DESKTOP = 1280;

export const useWindowWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }

    const handleResize = event => {
      if (event.target) {
        setWidth(event.target.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const isScreenMobile = width > 0 && width < SCREEN_TABLET;
  const isScreenTablet = width >= SCREEN_TABLET && width < SCREEN_DESKTOP;
  const isScreenDesktop = width >= SCREEN_DESKTOP;

  return {
    width,
    isScreenMobile,
    isScreenTablet,
    isScreenDesktop,
  };
};
