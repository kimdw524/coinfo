import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import Pretendard from '../assets/fonts/PretendardVariable.woff2';
import { theme } from '#themes';

globalFontFace('Pretendard', {
  src: `url(${Pretendard}) format("woff2")`,
});

globalStyle('*', {
  fontFamily: 'Pretendard',
});

globalStyle('body', {
  backgroundColor: `rgb(${theme.color.background})`,
  color: `rgb(${theme.color.foreground})`,
});
