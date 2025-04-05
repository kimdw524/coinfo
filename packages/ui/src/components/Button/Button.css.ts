import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '#themes';
import { color, semanticColor } from '#tokens';

const semanticColors = semanticColor.reduce(
  (prev, color) => ({
    ...prev,
    [color]: style({
      backgroundColor: `rgb(${theme.color[color]})`,
      color: `rgb(${theme.color[`${color}-foreground`]})`,

      ':hover': {
        backgroundColor: `rgba(${theme.color[color]}, 0.85)`,
      },
    }),
  }),
  {} as Record<(typeof semanticColor)[number], string>,
);

const scaleColors = Object.entries(color).reduce(
  (prev, [key, value]) => ({
    ...prev,
    [key]: style({
      backgroundColor: `rgb(${value[500]})`,
      color: `rgb(${theme.color.background})`,

      ':hover': {
        backgroundColor: `rgba(${value[500]}, 0.85)`,
      },
    }),
  }),
  {} as Record<keyof typeof color, string>,
);

const pulse = keyframes({
  '0%': {
    backgroundPosition: '-300% 0',
  },

  '100%': {
    backgroundPosition: '300% 0',
  },
});

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: '0',
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none',

    ':disabled': {
      backgroundColor: `rgb(${theme.color.muted})`,
      color: `rgb(${theme.color['muted-foreground']})`,
      cursor: 'default',
    },

    '::before': {
      content: '',
      inset: '0 0 0 0',
      position: 'absolute',
      border: `1px solid rgba(${theme.color.foreground}, 0.3)`,
      borderRadius: 'inherit',
      boxShadow: `0 0 4px 2px rgba(${theme.color.foreground}, 0.2)`,
      opacity: '0',
      transition: 'opacity 0.1s ease',
    },

    selectors: {
      ':not(:disabled):active&::before': {
        opacity: '1',
      },
    },
  },

  variants: {
    color: {
      ...semanticColors,
      ...scaleColors,
    },

    size: {
      sm: {
        height: '2.25rem',
        padding: '0 0.75rem',
        fontSize: '0.875rem',
      },

      md: {
        height: '2.5rem',
        padding: '0 0.875rem',
        fontSize: '1rem',
      },

      lg: {
        height: '2.75rem',
        padding: '0 1rem',
        fontSize: '1.125rem',
      },
    },

    pulse: {
      true: {
        '::after': {
          content: '',
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(90deg, transparent 30%,#ffffff33 65%, transparent 100%)',
          backgroundSize: '300% 100%',
          animation: `${pulse} 5s linear 0s infinite`,
        },
      },
    },
  },
});
