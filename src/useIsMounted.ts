import { useEffect, useRef, type RefObject } from "react";

const useIsMounted = (): RefObject<boolean> => {
  const ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);

  return ref;
};

export default useIsMounted;
