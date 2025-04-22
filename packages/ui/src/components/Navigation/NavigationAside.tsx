import * as s from './NavigationAside.css';

export const NavigationAside = ({ ...props }: React.ComponentProps<'aside'>) => {
  return <aside className={s.navigationAside} {...props} />;
};
