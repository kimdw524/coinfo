import { SWRConfig } from 'swr';

import MarketOverview from '@/components/market/MarketOverview';
import fetcher from '@/utils/fetcher';

const MarketOverviewFetch = async () => {
  const data = await fetcher('/api/index');

  return (
    <>
      <SWRConfig value={{ fallback: { '/api/index': data } }}>
        <MarketOverview />
      </SWRConfig>
    </>
  );
};

export default MarketOverviewFetch;
