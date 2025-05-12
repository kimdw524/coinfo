import { Box, Typography } from '@repo/ui';

import AssetDetailPrice from '@/components/asset/AssetDetailPrice';
import AssetLogo from '@/components/asset/AssetLogo';
import TradingViewWidget from '@/components/asset/TradingViewWidget';

import * as s from './style.css';

interface AssetOverviewProps {
  symbol: string;
  name: string;
}

const AssetOverview = ({ symbol, name }: AssetOverviewProps) => {
  return (
    <Box flex flexDirection="column" backgroundColor="background" padding="xl" className={s.modal} rounded>
      <Box flex justifyContent="space-between" alignItems="center" marginBottom="xl">
        <Box flex alignItems="center" gap="lg">
          <AssetLogo symbol={symbol} width={32} height={32} />
          <Typography size="3xl" weight="medium">
            {name}
          </Typography>
        </Box>
        <div>
          <Typography color="muted-foreground">{symbol}</Typography>
        </div>
      </Box>
      <AssetDetailPrice
        symbol={symbol}
        chart={
          <div style={{ flex: '1 1 auto', height: '300px' }}>
            <TradingViewWidget />
          </div>
        }
      />
    </Box>
  );
};

export default AssetOverview;
