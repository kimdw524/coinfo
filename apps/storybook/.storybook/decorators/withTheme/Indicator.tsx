import React from 'react';

export const Indicator = ({ width, height }: { width: number; height: number }) => {
  return (
    <div style={{ fontSize: '0.875rem' }}>
      {width} x {height}
    </div>
  );
};
