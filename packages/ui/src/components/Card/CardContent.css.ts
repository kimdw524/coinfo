import { recipe } from '@vanilla-extract/recipes';

export const cardContent = recipe({
  base: {
    height: '100%',
  },

  variants: {
    padding: {
      sm: {
        padding: '0.75em',
      },
      md: {
        padding: '1em',
      },
      lg: {
        padding: '1.25em',
      },
    },
  },
});
