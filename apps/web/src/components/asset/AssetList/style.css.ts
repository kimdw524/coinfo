import { style } from '@vanilla-extract/css';

export const container = style({
  width: '80%',
  margin: '0 auto',

  '@media': {
    'screen and (max-width: 1280px)': {
      width: '100%',
      maxWidth: '1024px',
    },
  },
});
