import { useEffect, useRef } from 'react';

function useTimeout(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(() => {});
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [delay]);
}

export default useTimeout;
