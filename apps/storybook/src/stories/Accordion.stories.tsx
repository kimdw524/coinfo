import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionContent, AccordionTrigger } from '@repo/ui';

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
      description: '좌우 패딩을 적용 여부를 나타냅니다.',
    },
    expanded: {
      description: '기본적으로 Accordion이 펼쳐 있을지 여부를 나타냅니다.',
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
