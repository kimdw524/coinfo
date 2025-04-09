import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { theme } from '#themes';

import * as s from './Typography.css';

type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypographyProps<T extends TypographyElement = TypographyElement> = ComponentPropsWithoutRef<T> &
  RecipeVariants<typeof s.typography> & {
    children: ReactNode;
    as?: T;
    color?: string;
    style?: CSSProperties;
  };

export const Typography = ({
  children,
  as: Component = 'p',
  color = `rgb(${theme.color.foreground})`,
  size = 'md',
  weight = 'normal',
  ellipsis = false,
  style,
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={s.typography({ size, weight, ellipsis })}
      style={{
        ...style,
        ...assignInlineVars({
          [s.colorVar]: color,
        }),
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export { s as typographyCss };
