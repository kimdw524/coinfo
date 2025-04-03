import { createTheme } from '@vanilla-extract/css';

import { theme } from './theme.css';

export const lightTheme = createTheme(theme, {
  borderRadius: '4px',
  color: {
    background: '0 0% 100%',
    foreground: '240 6% 4%',
    primary: '213 100% 60%',
    'primary-foreground': '210 67% 97%',
    secondary: '210 22% 96%',
    'secondary-foreground': '240 4% 13%',
    muted: '210 22% 96%',
    'muted-foreground': '0 0% 47%',
    accent: '210 22% 96%',
    'accent-foreground': '240 4% 13%',
    border: '210 25% 84%',
  },
});
