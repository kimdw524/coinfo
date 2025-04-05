import React from 'react';

import { darkTheme, lightTheme, theme } from '@repo/ui';
import { ReactRenderer } from '@storybook/react';
import { type DecoratorFunction } from 'storybook/internal/types';

const containerStyle = { padding: '32px', backgroundColor: `rgb(${theme.color.background})` };

export const withTheme: DecoratorFunction<ReactRenderer> = (storyFn, storyContext) => {
  const currentTheme = storyContext.globals.theme;

  return currentTheme === 'multi' ? (
    <>
      <div className={lightTheme} style={containerStyle}>
        {storyFn()}
      </div>
      <div className={darkTheme} style={containerStyle}>
        {storyFn()}
      </div>
    </>
  ) : (
    <div className={currentTheme === 'light' ? lightTheme : darkTheme}>{storyFn()}</div>
  );
};
