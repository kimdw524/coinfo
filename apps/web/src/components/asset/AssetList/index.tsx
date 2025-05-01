'use client';

import { Box } from '@repo/ui';
import clsx from 'clsx';
import { useAtom } from 'jotai';

import { assetLayoutAtom } from '@/atoms/assetLayoutAtom';
import AssetCardList from '@/components/asset/AssetCardList';
import AssetItemList from '@/components/asset/AssetItemList';
import AssetLayoutSwitch from '@/components/asset/AssetLayoutSwitch';
import { currencies } from '@/constants/currencies';
import useRealTimePrice from '@/hooks/useRealTimePrice';

import * as s from './style.css';

const AssetList = () => {
  useRealTimePrice(currencies.map((currency) => currency.symbol));

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
