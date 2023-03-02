import { useState, useEffect, useRef } from 'react';

type Direction = 'LEFT' | 'RIGHT' | 'UP' | 'DOWN';

type SwipeEvent = {
  direction: Direction;
  distance: number;
};

type SwipeHandler = (event: SwipeEvent) => void;

const useSwipe = (
  onSwipe: SwipeHandler,
  targetElementRef: React.RefObject<HTMLElement>
) => {
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });

  const swipeThreshold = 100;
  const swipeTimeout = 250;

  const swipeDirection = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): Direction => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    const threshold = Math.PI / 8;
    if (Math.abs(angle) < threshold) {
      return 'RIGHT';
    } else if (Math.abs(angle) > Math.PI - threshold) {
      return 'LEFT';
    } else if (angle > 0) {
      return 'DOWN';
    } else {
      return 'UP';
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    setStartPoint({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (event: TouchEvent) => {
    const touch = event.touches[0];
    setEndPoint({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    const distance = Math.sqrt(
      Math.pow(endPoint.x - startPoint.x, 2) +
        Math.pow(endPoint.y - startPoint.y, 2)
    );
    const direction = swipeDirection(
      startPoint.x,
      startPoint.y,
      endPoint.x,
      endPoint.y
    );
    if (distance > swipeThreshold) {
      onSwipe({ direction, distance });
    }
    setStartPoint({ x: 0, y: 0 });
    setEndPoint({ x: 0, y: 0 });
  };

  useEffect(() => {
    const targetElement = targetElementRef.current;
    if (!targetElement) return;

    targetElement.addEventListener('touchstart', handleTouchStart);
    targetElement.addEventListener('touchmove', handleTouchMove);
    targetElement.addEventListener('touchend', handleTouchEnd);

    return () => {
      targetElement.removeEventListener('touchstart', handleTouchStart);
      targetElement.removeEventListener('touchmove', handleTouchMove);
      targetElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [targetElementRef, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return null;
};

export default useSwipe;
