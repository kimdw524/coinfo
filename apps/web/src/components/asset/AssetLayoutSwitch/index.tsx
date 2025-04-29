'use client';

import dynamic from 'next/dynamic';

import { useAtom } from 'jotai';
import { LayoutGridIcon, Rows3Icon } from 'lucide-react';

import { assetLayoutAtom } from '@/atoms/assetLayout';
import { Box, Button } from '@repo/ui';

const AssetLayoutSwitch = () => {
  const [assetLayout, setAssetLayout] = useAtom(assetLayoutAtom);
  const isCard = assetLayout === 'card';

  return (
    <Box flex gap="sm">
      <Button color={isCard ? 'primary' : 'secondary'} size="icon-sm" onClick={() => setAssetLayout('card')}>
        <LayoutGridIcon />
      </Button>
      <Button color={isCard ? 'secondary' : 'primary'} size="icon-sm" onClick={() => setAssetLayout('item')}>
        <Rows3Icon />
      </Button>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(AssetLayoutSwitch), {
  ssr: false,
});
