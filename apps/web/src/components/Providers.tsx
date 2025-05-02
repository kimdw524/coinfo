'use client';

import { ReactNode } from 'react';

import { OverlayProvider } from '@repo/utils';
import { SWRConfig } from 'swr';

import * as overlayStyle from '@/styles/overlay.css';
import fetcher from '@/utils/fetcher';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <OverlayProvider className={{ ...overlayStyle }} unmountOn={'transitionEnd'}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        {children}
      </SWRConfig>
    </OverlayProvider>
  );
};

export default Providers;
