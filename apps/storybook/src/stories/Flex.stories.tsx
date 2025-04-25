import { Flex, flexCss } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },

    direction: {
      control: 'select',
      options: Object.keys(flexCss.flex.classNames.variants.direction),
    },

    gap: {
      control: 'select',
      options: Object.keys(flexCss.flex.classNames.variants.gap),
    },

    alignItems: {
      control: 'select',
      options: Object.keys(flexCss.flex.classNames.variants.alignItems),
    },

    justifyContent: {
      control: 'select',
      options: Object.keys(flexCss.flex.classNames.variants.justifyContent),
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlexStory: Story = {
  args: {
    children: (
      <>
        <div style={{ height: '2rem', backgroundColor: 'red' }}>Flex1</div>
        <div style={{ height: '2.5rem', backgroundColor: 'green' }}>Flex2</div>
        <div style={{ height: '1.5rem', backgroundColor: 'blue' }}>Flex3</div>
      </>
    ),
  },
  name: 'Flex',
};
