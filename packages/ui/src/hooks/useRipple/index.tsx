import { useEffect, useMemo, useRef } from 'react';

import * as s from './ripple.css';

export const useRipple = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const ripple = rippleRef.current;

    if (!ripple) {
      return;
    }

    ripple.className = s.ripple({ fadeIn: false });

    let isMouseDown = false,
      isTransitionEnd = true;

    if (!element) {
      return;
    }

    const fadeOut = () => {
      ripple.style.transition = 'opacity 300ms ease';
      ripple.className = s.ripple({ fadeIn: false });
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();

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

      const initialSize = 4,
        scale = Math.max(
          element.clientWidth + Math.abs(element.clientWidth - x * 2),
          element.clientHeight + Math.abs(element.clientHeight - y * 2),
        );

      const duration = `${Math.min(600, 100 + scale * 1.25)}ms`;

      isMouseDown = true;
      isTransitionEnd = false;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.transform = 'scale(1)';
      ripple.style.transition = `opacity ${duration} ease`;
      //eslint-disable-next-line
      ripple.offsetTop;
      ripple.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
      ripple.style.transform = `scale(${(scale / initialSize + 1) * 1.415})`;

      ripple.className = s.ripple({ fadeIn: true });
    };

    const handleMouseUp = (e: MouseEvent | TouchEvent) => {
      if ((e instanceof MouseEvent && e.button !== 0) || !isMouseDown) {
        return;
      }

      isMouseDown = false;

      if (isTransitionEnd) {
        fadeOut();
      }
    };

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName !== 'transform') {
        return;
      }

      isTransitionEnd = true;

      if (!isMouseDown) {
        fadeOut();
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
      ripple: <div className={s.ripple({ fadeIn: false })} ref={rippleRef} />,
    }),
    [ref, rippleRef],
  );
};
