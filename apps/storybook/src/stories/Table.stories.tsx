import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableStory: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead width="40%">TableHead 1</TableHead>
            <TableHead>TableHead 2</TableHead>
            <TableHead>TableHead 3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>TableCell1 1</TableCell>
            <TableCell>TableCell1 2</TableCell>
            <TableCell>TableCell1 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TableCell2 1</TableCell>
            <TableCell>TableCell2 2</TableCell>
            <TableCell>TableCell2 3</TableCell>
          </TableRow>
          <TableRow interactive>
            <TableCell>Interactive 1</TableCell>
            <TableCell>Interactive 2</TableCell>
            <TableCell>Interactive 3</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  name: 'Table',
};
