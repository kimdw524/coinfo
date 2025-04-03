import { Button, buttonCss } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(buttonCss.button.classNames.variants.color),
    },

    size: {
      control: 'radio',
      options: Object.keys(buttonCss.button.classNames.variants.size),
    },

    pulse: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
  },
};
