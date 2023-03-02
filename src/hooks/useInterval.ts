import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const intervalId = setInterval(tick, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [delay]);
}

export default useInterval;
