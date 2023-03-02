import React from 'react';
import useSwipe from '../../hooks/useSwipe';

const BottomSheet = () => {
  const swipeDirection = useSwipe();

  return <div>{swipeDirection && <p>Swiped {swipeDirection}</p>}</div>;
};

export default BottomSheet;
