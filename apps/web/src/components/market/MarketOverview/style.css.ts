import { style } from '@vanilla-extract/css';

export const container = style({
  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    height: '0',
  },
});
