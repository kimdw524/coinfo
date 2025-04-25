import { recipe } from '@vanilla-extract/recipes';

export const flex = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      column: {
        flexDirection: 'column',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },

    gap: {
      sm: {
        gap: '0.25rem',
      },
      md: {
        gap: '0.5rem',
      },
      lg: {
        gap: '0.75rem',
      },
    },

    alignItems: {
      center: {
        alignItems: 'center',
      },
      'flex-start': {
        alignItems: 'flex-start',
      },
      'flex-end': {
        alignItems: 'flex-end',
      },
    },

    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      'flex-start': {
        justifyContent: 'flex-start',
      },
      'flex-end': {
        justifyContent: 'flex-end',
      },
    },
  },
});
