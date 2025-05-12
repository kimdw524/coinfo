import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '#themes';

import { navigationBarContainer } from './NavigationBar.css';

export const narrow = style({
  display: 'none',

  '@container': {
    [`${navigationBarContainer} (max-width: 586px)`]: {
      display: 'block',
    },
  },
});

export const wide = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',

  '@container': {
    [`${navigationBarContainer} (max-width: 586px)`]: {
      display: 'none',
    },
  },
});

export const navigationAside = style({
  marginLeft: 'auto',
});

export const popup = recipe({
  base: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '100',

    maxHeight: '100vh',
    padding: '0.75em',
    borderBottom: `1px solid rgb(${theme.color.border})`,

    backgroundColor: `rgb(${theme.color.background})`,

    transition: 'transform 0.2s ease, opacity 0.2s ease',
  },

  variants: {
    isVisible: {
      true: {
        transform: 'translateY(0)',

        opacity: '1',
      },

      false: {
        transform: 'translateY(-100%)',

        opacity: '0',

        pointerEvents: 'none',
      },
    },
  },
});
