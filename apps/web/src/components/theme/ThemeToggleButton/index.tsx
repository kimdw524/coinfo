'use client';

import { Button } from '@repo/ui';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import * as s from './style.css';

const ThemeToggleButton = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="contained" color="secondary" size="icon" onClick={toggleTheme}>
      <div className={s.themeWrapper({ mode: 'light' })}>
        <SunIcon />
      </div>
      <div className={s.themeWrapper({ mode: 'dark' })}>
        <MoonIcon />
      </div>
    </Button>
  );
};

export default ThemeToggleButton;
