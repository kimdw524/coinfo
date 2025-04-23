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

    const handleMouseDown = (e: PointerEvent) => {
      if (e.button !== 0 || !ripple || !isTransitionEnd) {
        return;
      }

      const x = e.offsetX,
        y = e.offsetY;

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

    const handleMouseUp = (e: PointerEvent) => {
      if (e.button !== 0 || !isMouseDown) {
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

    element.addEventListener('pointerdown', handleMouseDown);
    // element.addEventListener('touchstart', handleMouseDown);
    ripple.addEventListener('transitionend', handleTransitionEnd);
    document.addEventListener('pointerup', handleMouseUp);
    document.addEventListener('pointerleave', handleMouseUp);
    // document.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('pointerdown', handleMouseDown);
      // element.removeEventListener('touchstart', handleMouseDown);
      ripple.removeEventListener('transitionend', handleTransitionEnd);
      document.removeEventListener('pointerup', handleMouseUp);
      document.removeEventListener('pointerleave', handleMouseUp);
      // document.removeEventListener('mouseup', handleMouseUp);
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
