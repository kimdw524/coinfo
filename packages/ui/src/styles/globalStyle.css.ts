import { globalStyle } from '@vanilla-extract/css';

import { theme } from '#themes';

globalStyle('body', {
  margin: '0',

  backgroundColor: `rgb(${theme.color.background})`,

  color: `rgb(${theme.color.foreground})`,
});

globalStyle('*', {
  boxSizing: 'border-box',

  fontFamily: 'Pretendard',

  overscrollBehavior: 'none',
  WebkitTapHighlightColor: 'transparent',
});
