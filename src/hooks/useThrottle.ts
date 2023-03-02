import { useState, useEffect } from 'react';

function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());

  useEffect(() => {
    const timeSinceLastUpdate = Date.now() - lastUpdated;

    if (timeSinceLastUpdate >= delay) {
      setThrottledValue(value);
      setLastUpdated(Date.now());
    } else {
      const timeout = setTimeout(() => {
        setThrottledValue(value);
        setLastUpdated(Date.now());
      }, delay - timeSinceLastUpdate);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [value, delay, lastUpdated]);

  return throttledValue;
}

export default useThrottle;
