import { recipe } from '@vanilla-extract/recipes';

export const cardContent = recipe({
  variants: {
    padding: {
      sm: {
        padding: '0.75rem',
      },
      md: {
        padding: '1rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
  },
});
