import { style } from '@vanilla-extract/css';

export const modal = style({
  overflow: 'hidden',
  width: '600px',
  maxWidth: '100vw',
  maxHeight: '100vh',

  resize: 'both',
});
