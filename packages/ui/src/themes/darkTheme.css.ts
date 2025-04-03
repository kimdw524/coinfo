import { createTheme } from '@vanilla-extract/css';

import { theme } from './theme.css';

export const darkTheme = createTheme(theme, {
  borderRadius: '4px',
  color: {
    background: '240 23% 7%',
    foreground: '214 77% 92%',
    primary: '215 92% 62%',
    'primary-foreground': '225 10% 15%',
    secondary: '210 29% 16%',
    'secondary-foreground': '214 77% 92%',
    muted: '210 29% 16%',
    'muted-foreground': '210 15% 52%',
    accent: '210 29% 16%',
    'accent-foreground': '214 77% 92%',
    border: '210 29% 16%',
  },
});
