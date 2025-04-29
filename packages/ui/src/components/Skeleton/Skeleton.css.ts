import { theme } from '#themes';
import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%': {
    backgroundPosition: '-300% 0',
  },

  '100%': {
    backgroundPosition: '300% 0',
  },
});

export const skeleton = style({
  display: 'inline-block',

  maxWidth: '100%',
  borderRadius: theme.borderRadius,

  background: `linear-gradient(90deg, rgb(${theme.color.accent}) 30%, rgba(${theme.color.accent}, 0.5) 65%, rgb(${theme.color.accent}) 100%)`,
  backgroundSize: '300% 100%',

  animation: `${shimmer} 5s linear 0s infinite`,
});
