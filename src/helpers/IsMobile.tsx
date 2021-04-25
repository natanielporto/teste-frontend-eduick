import { useEffect, useState } from 'react';

function windowSize(): { width: number } {
  const { innerWidth: width } = window;
  return { width };
}

function IsMobile(): boolean {
  const [widthNow, setWidthNow] = useState<{ width: number }>(windowSize());

  useEffect(() => {
    function handleWidth() {
      setWidthNow(windowSize());
    }

    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, [widthNow]);

  const isMobile = widthNow.width <= 400;

  return isMobile;
}

export default IsMobile;
