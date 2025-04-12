import type { Preview } from '@storybook/react';

import { withTheme } from './decorators/withTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [{ name: 'gray', value: '#aaa' }],
      default: 'gray',
    },
  },
  decorators: [withTheme],
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme',
    defaultValue: 'multi',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light Theme' },
        { value: 'dark', icon: 'circle', title: 'Dark Theme' },
        { value: 'multi', icon: 'grid', title: 'Multi' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export default preview;
