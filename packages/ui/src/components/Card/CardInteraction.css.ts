import { style } from '@vanilla-extract/css';

import { theme } from '#themes';

export const cardInteraction = style({
  position: 'relative',

  cursor: 'pointer',
  userSelect: 'none',

  '::before': {
    content: '',
    position: 'absolute',
    inset: '0 0 0 0',

    transition: 'background-color 0.15s ease',
  },

  selectors: {
    '&:active::before': {
      backgroundColor: `rgba(${theme.color.muted}, 0.33)`,
    },
  },
});
