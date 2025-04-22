import * as s from './NavigationMenu.css';

export const NavigationMenu = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={s.navigationMenu} {...props} />;
};

export { s as navigationMenuCss };
