import { recipe } from '@vanilla-extract/recipes';

export const chip = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: '0',
    gap: '0.125em',

    transition: 'all 0.2s ease',

    userSelect: 'none',
  },

  variants: {
    size: {
      sm: {
        height: '1.5em',
        padding: '0 0.5em',
        borderRadius: '0.625em',

        fontSize: '0.75em',
      },

      md: {
        height: '1.875em',
        padding: '0 0.75em',
        borderRadius: '0.75em',

        fontSize: '0.875em',
      },

      lg: {
        height: '2.25em',
        padding: '0 0.875em',
        borderRadius: '0.875em',

        fontSize: '1em',
      },
    },
  },
});
