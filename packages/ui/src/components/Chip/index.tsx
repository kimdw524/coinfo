import { ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { sprinkles, SprinklesProps } from '#styles';

import * as s from './Chip.css';

type ChipVariants = NonNullable<RecipeVariants<typeof s.chip>>;

interface ChipProps extends ChipVariants, Omit<React.ComponentProps<'div'>, keyof ChipVariants> {
  children: ReactNode;
  backgroundColor?: SprinklesProps['backgroundColor'];
  color?: SprinklesProps['color'];
}

export const Chip = ({
  children,
  backgroundColor = 'primary',
  color = 'primary-foreground',
  size = 'md',
  ...props
}: ChipProps) => {
  return (
    <div className={clsx(s.chip({ size }), sprinkles({ backgroundColor, color }))} {...props}>
      <span>{children}</span>
    </div>
  );
};

export { s as chipCss };
