import { theme } from '#themes';
import { style } from '@vanilla-extract/css';

export const tableHead = style({
  padding: '0.5em 0.625em',

  color: `rgb(${theme.color['accent-foreground']})`,
  fontSize: '0.9375em',
  fontWeight: '500',
});
