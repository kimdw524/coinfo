import { Card, CardContent, cardCss, CardInteraction, CardThumbnail } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    color: {
      control: 'select',
      options: Object.keys(cardCss.card.classNames.variants.color),
    },
  },
  args: {
    color: 'card',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
  args: {
    children: <CardContent>Card</CardContent>,
  },
  name: 'Card',
};

export const CardInteractionStory: Story = {
  args: {
    children: (
      <CardInteraction>
        <CardContent>CardInteraction</CardContent>
      </CardInteraction>
    ),
  },
  name: 'CardInteraction',
};

export const CardThumbnailStory: Story = {
  args: {
    children: (
      <>
        <CardThumbnail src={'/src/assets/images/paella.jpg'} />
        <CardContent>
          <CardContent>CardThumbnail</CardContent>
        </CardContent>
      </>
    ),
    width: '300px',
    height: '250px',
  },
  name: 'CardThumbnail',
};
