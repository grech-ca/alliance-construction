import { useState, useEffect } from 'react';

function getWindowSize() {
  const { innerWidth: width } = window;
  return width;
}

const useWindowSize = (): number => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function handleResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
