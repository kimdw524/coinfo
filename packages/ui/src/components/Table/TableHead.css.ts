import { theme } from '#themes';
import { style } from '@vanilla-extract/css';

export const tableHead = style({
  padding: '0.5rem 0.625rem',

  color: `rgb(${theme.color['accent-foreground']})`,
  fontSize: '0.9375rem',
  fontWeight: '500',
});
