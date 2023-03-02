import React, { useEffect, useState } from 'react';

const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    };
    window.addEventListener('progress-bar', updateScrollProgress);

    return () => {
      window.removeEventListener('progress-bar', updateScrollProgress);
    };
  }, []);
};

export default useReadingProgress;

