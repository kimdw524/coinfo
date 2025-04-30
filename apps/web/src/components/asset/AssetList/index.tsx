'use client';

import { Box } from '@repo/ui';
import { useAtom } from 'jotai';
import clsx from 'clsx';

import { assetLayoutAtom } from '@/atoms/assetLayout';
import AssetCardList from '@/components/asset/AssetCardList';
import AssetItemList from '@/components/asset/AssetItemList';
import AssetLayoutSwitch from '@/components/asset/AssetLayoutSwitch';

import * as s from './style.css';

const AssetList = () => {
  const [assetLayout] = useAtom(assetLayoutAtom);

  return (
    <Box padding="xl" className={clsx(assetLayout === 'item' && s.container)}>
      <Box flex justifyContent="flex-end" marginBottom="xl">
        <AssetLayoutSwitch />
      </Box>
      {assetLayout === 'card' ? (
        <AssetCardList />
      ) : (
        <div className={s.itemList}>
          <AssetItemList />
        </div>
      )}
    </Box>
  );
};

export default AssetList;
