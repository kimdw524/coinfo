import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './Typography.css';
import { typographyColor } from './typographyColor';

type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypographyProps<T extends TypographyElement = TypographyElement> = ComponentPropsWithoutRef<T> &
  RecipeVariants<typeof s.typography> & {
    children: ReactNode;
    as?: T;
    color?: keyof typeof typographyColor;
    style?: CSSProperties;
  };

export const Typography = ({
  children,
  as: Component = 'p',
  color = 'foreground',
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
          [s.colorVar]: typographyColor[color],
        }),
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export { typographyColor };
export { s as typographyCss };
