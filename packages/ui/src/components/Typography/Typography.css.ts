import { recipe } from '@vanilla-extract/recipes';

export const typography = recipe({
  base: {
    margin: '0',
  },
  variants: {
    size: {
      xs: {
        fontSize: '0.75rem',
      },
      sm: {
        fontSize: '0.875rem',
      },
      md: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.125rem',
      },
      xl: {
        fontSize: '1.25rem',
      },
      '2xl': {
        fontSize: '1.375rem',
      },
      '3xl': {
        fontSize: '1.5rem',
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
