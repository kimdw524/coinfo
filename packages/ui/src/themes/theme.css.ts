import { createThemeContract } from '@vanilla-extract/css';

import { semanticColor } from '#tokens';

const semanticColors: Record<(typeof semanticColor)[number] | `${(typeof semanticColor)[number]}-foreground`, null> = {
  primary: null,
  'primary-foreground': null,
  secondary: null,
  'secondary-foreground': null,
  muted: null,
  'muted-foreground': null,
  accent: null,
  'accent-foreground': null,
};

export const theme = createThemeContract({
  borderRadius: null,
  color: {
    background: null,
    foreground: null,
    border: null,
    ...semanticColors,
  },
});
