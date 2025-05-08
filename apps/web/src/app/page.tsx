import { Suspense } from 'react';

import AssetList from '@/components/asset/AssetList';
import MarketOverviewFetch from '@/components/market/MarketOverview/fetch';
import MarketOverviewLoading from '@/components/market/MarketOverview/loading';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<MarketOverviewLoading />}>
        <MarketOverviewFetch />
      </Suspense>
      <AssetList />
    </>
  );
}
