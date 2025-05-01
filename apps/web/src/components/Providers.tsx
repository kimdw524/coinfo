'use client';

import { ReactNode } from 'react';

import { OverlayProvider } from '@repo/utils';
import { SWRConfig } from 'swr';

import fetcher from '@/utils/fetcher';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <OverlayProvider>
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
