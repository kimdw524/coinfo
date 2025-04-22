import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './NavigationBar.css';

type NavigationBarVariants = NonNullable<RecipeVariants<typeof s.navigationBar>>;

export type NavigationBarProps = React.ComponentProps<'nav'> & NavigationBarVariants;

export const NavigationBar = ({ size = 'md', ...props }: NavigationBarProps) => {
  return <nav className={s.navigationBar({ size })} {...props} />;
};

export { s as navigationBarCss };
