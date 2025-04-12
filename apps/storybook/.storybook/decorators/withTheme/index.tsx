import React, { CSSProperties } from 'react';

import { darkTheme, lightTheme, theme } from '@repo/ui';
import { ReactRenderer } from '@storybook/react';
import { type DecoratorFunction } from 'storybook/internal/types';

import { Resizable } from './Resizable';

const containerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',

  backgroundColor: `rgb(${theme.color.background})`,
};

export const withTheme: DecoratorFunction<ReactRenderer> = (StoryFn, storyContext) => {
  const currentTheme = storyContext.globals.theme;

  return (
    <Resizable>
      {currentTheme === 'multi' ? (
        <>
          <div className={lightTheme} style={containerStyle}>
            <StoryFn />
          </div>
          <div className={darkTheme} style={containerStyle}>
            <StoryFn />
          </div>
        </>
      ) : (
        <div className={currentTheme === 'light' ? lightTheme : darkTheme}>{<StoryFn />}</div>
      )}
    </Resizable>
  );
};
