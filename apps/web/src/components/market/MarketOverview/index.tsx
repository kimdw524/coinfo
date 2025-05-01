'use client';

import { Box } from '@repo/ui';

import MarketIndex from '@/components/market/MarketIndex';
import useFetchMarketIndex from '@/hooks/api/useFetchMarketIndex';

import * as s from './style.css';

const MarketOverview = () => {
  const data = useFetchMarketIndex();

  return (
    <Box flex gap="lg" padding="lg" className={s.container}>
      <MarketIndex name="원/달러 환율" value={data.USDKRW.value} change={data.USDKRW.change} />
      <MarketIndex name="다우 존스 산업평균지수" value={data.INDEXDJX.value} change={data.INDEXDJX.change} />
      <MarketIndex name="S&P 500" value={data.INDEXSP.value} change={data.INDEXSP.change} />
      <MarketIndex name="나스닥 100" value={data.INDEXNASDAQ.value} change={data.INDEXNASDAQ.change} />
    </Box>
  );
};

export default MarketOverview;
