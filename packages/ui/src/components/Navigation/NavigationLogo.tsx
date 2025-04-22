import * as s from './NavigationLogo.css';

export const NavigationLogo = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={s.navigationLogo} {...props} />;
};
