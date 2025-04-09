import { createTheme } from '@vanilla-extract/css';

import { theme } from './theme.css';

export const darkTheme = createTheme(theme, {
  borderRadius: '4px',
  color: {
    background: '10, 10, 18',
    foreground: '186, 212, 255',
    primary: '66, 128, 255',
    'primary-foreground': '33, 34, 38',
    secondary: '30, 36, 44',
    'secondary-foreground': '186, 212, 255',
    muted: '30, 36, 44',
    'muted-foreground': '102, 112, 133',
    accent: '30, 36, 44',
    'accent-foreground': '186, 212, 255',
    border: '30, 36, 44',
    card: '16, 22, 42',
    'card-foreground': '186, 212, 255',
  },
});
