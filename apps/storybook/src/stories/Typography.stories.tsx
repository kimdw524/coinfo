import { Typography, typographyCss } from '@repo/ui';
import { colorProperties } from '@repo/ui/src/styles';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: Object.keys(colorProperties.styles.color.values),
    },
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      options: Object.keys(typographyCss.typography.classNames.variants.size),
    },
    weight: {
      control: 'select',
      options: Object.keys(typographyCss.typography.classNames.variants.weight),
    },
    ellipsis: {
      control: 'boolean',
    },
    style: {
      control: false,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TypographyStory: Story = {
  args: {
    children: 'Typography',
  },
  name: 'Typography',
};
