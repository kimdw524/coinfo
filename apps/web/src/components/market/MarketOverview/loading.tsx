import { Box } from '@repo/ui';

import MarketIndexLoading from '@/components/market/MarketIndex/loading';

import * as s from './style.css';

const MarketOverviewLoading = () => {
  return (
    <Box flex gap="lg" padding="lg" className={s.container}>
      <MarketIndexLoading />
      <MarketIndexLoading />
      <MarketIndexLoading />
      <MarketIndexLoading />
    </Box>
  );
};

export default MarketOverviewLoading;
