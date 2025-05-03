import { style } from '@vanilla-extract/css';

import { paddingVar } from './Accordion.css';

export const container = style({
  overflow: 'hidden',

  opacity: '0',
  transition: 'height 0.2s ease, opacity 0.2s ease',

  selectors: {
    "[aria-expanded='true'] + &": {
      visibility: 'visible',

      height: 'var(--height) !important',

      opacity: '1',
    },
  },
});

export const inner = style({
  padding: paddingVar,
});
