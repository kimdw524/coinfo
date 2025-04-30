import { recipe } from '@vanilla-extract/recipes';

export const typography = recipe({
  base: {
    margin: '0',
  },
  variants: {
    size: {
      xs: {
        fontSize: '0.75em',
      },
      sm: {
        fontSize: '0.875em',
      },
      md: {
        fontSize: '1em',
      },
      lg: {
        fontSize: '1.125em',
      },
      xl: {
        fontSize: '1.25em',
      },
      '2xl': {
        fontSize: '1.375em',
      },
      '3xl': {
        fontSize: '1.5em',
      },
    },

    weight: {
      light: {
        fontWeight: '300',
      },
      normal: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      semiBold: {
        fontWeight: '600',
      },
      bold: {
        fontWeight: '700',
      },
    },

    ellipsis: {
      false: {},
      true: {
        overflow: 'hidden',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
    },
  },
});
