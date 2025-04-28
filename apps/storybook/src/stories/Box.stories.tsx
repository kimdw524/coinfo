import { Box } from '@repo/ui';
import { boxProperties, colorProperties } from '@repo/ui/src/styles';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    flexDirection: {
      control: 'select',
      options: Object.keys(boxProperties.styles.flexDirection.values),
    },
    justifyContent: {
      control: 'select',
      options: Object.keys(boxProperties.styles.justifyContent.values),
    },
    alignItems: {
      control: 'select',
      options: Object.keys(boxProperties.styles.alignItems.values),
    },
    gap: {
      control: 'select',
      options: Object.keys(boxProperties.styles.gap.values),
    },
    paddingTop: {
      control: 'select',
      options: Object.keys(boxProperties.styles.paddingTop.values),
    },
    paddingBottom: {
      control: 'select',
      options: Object.keys(boxProperties.styles.paddingBottom.values),
    },
    paddingLeft: {
      control: 'select',
      options: Object.keys(boxProperties.styles.paddingLeft.values),
    },
    paddingRight: {
      control: 'select',
      options: Object.keys(boxProperties.styles.paddingRight.values),
    },
    marginTop: {
      control: 'select',
      options: Object.keys(boxProperties.styles.marginTop.values),
    },
    marginBottom: {
      control: 'select',
      options: Object.keys(boxProperties.styles.marginBottom.values),
    },
    marginLeft: {
      control: 'select',
      options: Object.keys(boxProperties.styles.marginLeft.values),
    },
    marginRight: {
      control: 'select',
      options: Object.keys(boxProperties.styles.marginRight.values),
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(colorProperties.styles.backgroundColor.values),
    },
    color: {
      control: 'select',
      options: Object.keys(colorProperties.styles.color.values),
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoxStory: Story = {
  args: {
    children: (
      <>
        <div style={{ height: '2rem', backgroundColor: 'red' }}>Child1</div>
        <div style={{ height: '2.5rem', backgroundColor: 'green' }}>Child2</div>
        <div style={{ height: '1.5rem', backgroundColor: 'blue' }}>Child3</div>
      </>
    ),
    flex: true,
  },
  name: 'Box',
};
