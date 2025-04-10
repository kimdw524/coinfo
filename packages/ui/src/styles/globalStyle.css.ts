import { globalStyle } from '@vanilla-extract/css';

import { theme } from '#themes';

globalStyle('body', {
  backgroundColor: `rgb(${theme.color.background})`,
  color: `rgb(${theme.color.foreground})`,
});
