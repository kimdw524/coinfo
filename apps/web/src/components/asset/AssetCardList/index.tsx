import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import AssetCard from '@/components/asset/AssetCard';
import { AssetCardLoading } from '@/components/asset/AssetCard/loading';
import { currencies } from '@/constants/currencies';

import * as s from './style.css';

const AssetCardList = () => {
  return (
    <div className={s.container}>
      {currencies.map((currency) => (
        <Suspense key={currency.symbol} fallback={<AssetCardLoading name={currency.name} symbol={currency.symbol} />}>
          <AssetCard key={currency.symbol} name={currency.name} symbol={currency.symbol} />
        </Suspense>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(AssetCardList), {
  ssr: false,
});
