import { recipe } from '@vanilla-extract/recipes';

import { theme } from '#themes';

export const navigationBar = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    position: 'sticky',
    top: '0',
    zIndex: '10',

    width: '100%',
    borderBottom: `1px solid rgba(${theme.color.border}, 0.5)`,

    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',

    color: `rgb(${theme.color.foreground})`,

    transition: 'border-bottom-color 0.2s ease',
  },
  variants: {
    size: {
      sm: {
        height: '4rem',
        padding: '0 0.75rem',
      },

      md: {
        height: '5rem',
        padding: '0 1rem',
      },

      lg: {
        height: '6rem',
        padding: '0 1.25rem',
      },
    },
  },
});
