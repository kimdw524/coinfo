import { createVar, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '#themes';
import { color, semanticColor } from '#tokens';

const backgroundVar = createVar();
const foregroundVar = createVar();

const semanticColors = semanticColor.reduce(
  (prev, color) => ({
    ...prev,
    [color]: style({
      vars: {
        [backgroundVar]: theme.color[color],
        [foregroundVar]: theme.color[`${color}-foreground`],
      },
    }),
  }),
  {} as Record<(typeof semanticColor)[number], string>,
);

const scaleColors = Object.entries(color).reduce(
  (prev, [key, value]) => ({
    ...prev,
    [key]: style({
      vars: {
        [backgroundVar]: value[500],
        [foregroundVar]: theme.color.background,
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
    overflow: 'hidden',

    border: '0',
    borderRadius: theme.borderRadius,

    transition: 'all 0.2s ease',

    cursor: 'pointer',
    userSelect: 'none',
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

      icon: {
        width: '2.5rem',
        height: '2.5rem',
      },
    },

    variant: {
      contained: {
        backgroundColor: `rgb(${backgroundVar})`,
        color: `rgb(${foregroundVar})`,

        ':disabled': {
          backgroundColor: `rgb(${theme.color.muted})`,

          color: `rgb(${theme.color['muted-foreground']})`,

          cursor: 'default',
        },
      },

      ghost: {
        background: 'transparent',

        color: `rgb(${theme.color.foreground})`,

        ':hover': {
          backgroundColor: `rgba(${backgroundVar}, 0.8)`,

          color: `rgb(${foregroundVar})`,
        },

        ':disabled': {
          color: `rgb(${theme.color['muted-foreground']})`,

          cursor: 'default',
        },
      },
    },

    pulse: {
      true: {
        '::after': {
          content: '',
          position: 'absolute',
          inset: '0',

          background: 'linear-gradient(90deg, transparent 30%, #ffffff33 65%, transparent 100%)',
          backgroundSize: '300% 100%',

          animation: `${pulse} 5s linear 0s infinite`,
        },
      },
    },
  },
});
