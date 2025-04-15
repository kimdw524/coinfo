import { style } from '@vanilla-extract/css';

import { theme } from '#themes';

export const cardInteraction = style({
  position: 'relative',
  overflow: 'hidden',

  height: '100%',

  transition: 'all 0.15s ease',

  cursor: 'pointer',
  userSelect: 'none',

  ':hover': {
    backgroundColor: `rgba(${theme.color.accent}, 0.33)`,
  },
});
