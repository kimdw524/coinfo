import type { Meta, StoryObj } from '@storybook/react';

import { Chip, chipCss } from '@repo/ui/src/components/Chip';
import { colorProperties } from '@repo/ui/src/styles';

const meta = {
  title: 'UI/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(colorProperties.styles.backgroundColor.values),
    },
    color: {
      control: 'select',
      options: Object.keys(colorProperties.styles.color.values),
    },
    size: {
      control: 'select',
      options: Object.keys(chipCss.chip.classNames.variants.size),
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChipStory: Story = {
  args: {
    children: 'Chip',
  },
  name: 'Chip',
};
