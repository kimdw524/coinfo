import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { Indicator } from './Indicator';

export const Resizable = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      entries.some((entry) => {
        if (entry.target !== container) {
          return false;
        }

        const { width, height } = entry.contentRect;
        setSize({ width: Math.trunc(width), height: Math.trunc(height / 2) });

        return true;
      });
    });

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <>
      <Indicator width={size.width} height={size.height} />
      <div
        ref={containerRef}
        style={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', overflow: 'hidden', resize: 'both' }}
      >
        {children}
      </div>
    </>
  );
};
