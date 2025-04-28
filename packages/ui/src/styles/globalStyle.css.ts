import { assignVars, globalStyle } from '@vanilla-extract/css';

import { theme } from '#themes';

import { darkThemeVars } from '../themes/darkTheme.css';
import { lightThemeVars } from '../themes/lightTheme.css';

globalStyle('*', {
  boxSizing: 'border-box',

  fontFamily: 'Pretendard',
  lineHeight: '1',

  overscrollBehavior: 'none',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('.light', {
  vars: assignVars(theme, lightThemeVars),
});

globalStyle('.dark', {
  vars: assignVars(theme, darkThemeVars),
});

globalStyle('body', {
  margin: '0',

  backgroundColor: `rgb(${theme.color.background})`,

  color: `rgb(${theme.color.foreground})`,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
