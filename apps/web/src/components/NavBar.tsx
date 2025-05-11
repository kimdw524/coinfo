'use client';

import Link from 'next/link';

import { Button, NavigationAside, NavigationBar, NavigationItem, NavigationLogo, NavigationMenu } from '@repo/ui';

import ThemeToggleButton from '@/components/theme/ThemeToggleButton';
import useDialog from '@/hooks/useDialog';

const NavBar = () => {
  const { alert } = useDialog();

  const handleLoginClick = () => {
    alert('아직 준비중인 기능입니다.');
  };

  return (
    <NavigationBar size="sm">
      <NavigationLogo>
        <Link href="/">Coinfo</Link>
      </NavigationLogo>
      <NavigationMenu>
        <NavigationItem>
          <Button color="secondary" variant="ghost">
            뉴스
          </Button>
        </NavigationItem>
      </NavigationMenu>
      <NavigationAside>
        <NavigationItem>
          <ThemeToggleButton />
        </NavigationItem>
        <NavigationItem>
          <Button size="sm" onClick={handleLoginClick}>
            로그인
          </Button>
        </NavigationItem>
      </NavigationAside>
    </NavigationBar>
  );
};

export default NavBar;
