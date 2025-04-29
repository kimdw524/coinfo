import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '14px',
    },
  },
});

globalStyle('body', {
  overflowY: 'scroll',
});
