import { recipe } from '@vanilla-extract/recipes';

export const cardContent = recipe({
  base: {
    flex: '1 1 auto',
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
