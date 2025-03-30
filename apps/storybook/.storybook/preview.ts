import darkTheme from '@repo/ui/src/themes/darkTheme.css';
import lightTheme from '@repo/ui/src/themes/lightTheme.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
