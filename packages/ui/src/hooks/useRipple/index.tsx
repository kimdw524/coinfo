import { useEffect, useMemo, useRef } from 'react';

import * as s from './ripple.css';

export const useRipple = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const ripple = rippleRef.current;

    let isFadeIn = false,
      isMouseDown = false,
      isTransitionEnd = true;

    if (!ripple || !element) {
      return;
    }

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if ((e instanceof MouseEvent && e.button !== 0) || !ripple || !isTransitionEnd) {
        return;
      }

      let x, y;

      if (e instanceof MouseEvent) {
        x = e.offsetX;
        y = e.offsetY;
      } else {
        const rect = element.getBoundingClientRect();

        x = (e.touches[0]?.clientX || 0) - rect.left;
        y = (e.touches[0]?.clientY || 0) - rect.top;
      }

      const width = element.clientWidth / 2 + Math.abs(element.clientWidth / 2 - x),
        height = element.clientHeight / 2 + Math.abs(element.clientHeight / 2 - y);
      const size = Math.round(Math.sqrt(width ** 2 + height ** 2) * 2);

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.style.boxShadow = `${s.colorVar} 0 0 ${size / 10}px ${size / 10}px`;
      ripple.className = s.ripple({ animation: false });
      //eslint-disable-next-line
      ripple.offsetTop;
      ripple.className = s.ripple({ animation: true });
      ripple.style.opacity = '1';

      isFadeIn = true;
      isMouseDown = true;
      isTransitionEnd = false;
    };

    const handleMouseUp = (e: MouseEvent | TouchEvent) => {
      if ((e instanceof MouseEvent && e.button !== 0) || !isMouseDown) {
        return;
      }

      if (!isFadeIn) {
        ripple.style.opacity = '0';
        isFadeIn = false;
      }

      isMouseDown = false;
    };

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === 'opacity' && isFadeIn) {
        if (!isMouseDown) {
          ripple.style.opacity = '0';
        }

        isFadeIn = false;
        return;
      }

      if (e.propertyName === 'transform' && !isFadeIn) {
        isTransitionEnd = true;
      }
    };

    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('touchstart', handleMouseDown);
    ripple.addEventListener('transitionend', handleTransitionEnd);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('touchcancel', handleMouseUp);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('touchstart', handleMouseDown);
      ripple.removeEventListener('transitionend', handleTransitionEnd);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('touchcancel', handleMouseUp);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [ref]);

  return useMemo(
    () => ({
      ref,
      ripple: <div ref={rippleRef} className={s.ripple({ animation: false })} />,
    }),
    [ref, rippleRef],
  );
};
