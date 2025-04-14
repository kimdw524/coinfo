import { recipe } from '@vanilla-extract/recipes';

import { theme } from '#themes';

export const ripple = recipe({
  base: {
    position: 'absolute',
    width: '4px',
    height: '4px',

    borderRadius: '50%',

    backgroundColor: `color-mix(in srgb, rgba(${theme.color.accent}, 0.3) 80%, rgba(${theme.color.foreground}, 0.3) 20%)`,

    pointerEvents: 'none',
  },
  variants: {
    fadeIn: {
      true: {
        opacity: '1',
      },

      false: {
        opacity: '0',
      },
    },
  },
});
