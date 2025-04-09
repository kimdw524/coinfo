import { createTheme } from '@vanilla-extract/css';

import { theme } from './theme.css';

export const lightTheme = createTheme(theme, {
  borderRadius: '4px',
  color: {
    background: '255, 255, 255',
    foreground: '10, 10, 11',
    primary: '42, 122, 255',
    'primary-foreground': '240, 248, 255',
    secondary: '234, 239, 245',
    'secondary-foreground': '32, 32, 33',
    muted: '234, 239, 245',
    'muted-foreground': '120, 120, 120',
    accent: '234, 239, 245',
    'accent-foreground': '32, 32, 33',
    border: '203, 213, 225',
    card: '255, 255, 255',
    'card-foreground': '10, 10, 11',
  },
});
