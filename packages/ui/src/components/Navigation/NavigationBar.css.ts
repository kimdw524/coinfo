import { createContainer } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '#themes';

export const navigationBarContainer = createContainer();

export const navigationBar = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5em',
    position: 'sticky',
    top: '0',
    zIndex: '10',

    width: '100%',
    borderBottom: `1px solid rgba(${theme.color.border}, 0.5)`,

    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',

    color: `rgb(${theme.color.foreground})`,

    transition: 'border-bottom-color 0.2s ease',

    containerType: 'inline-size',
    containerName: navigationBarContainer,
  },
  variants: {
    size: {
      sm: {
        height: '4em',
        padding: '0 0.75em',
      },

      md: {
        height: '5em',
        padding: '0 1em',
      },

      lg: {
        height: '6em',
        padding: '0 1.25em',
      },
    },
  },
});
