import { Accordion, AccordionContent, AccordionTrigger } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
    },
    padding: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AccordionStory: Story = {
  args: {
    children: (
      <>
        <AccordionTrigger>제목</AccordionTrigger>
        <AccordionContent>내용</AccordionContent>
      </>
    ),
  },
  name: 'Accordion',
};
