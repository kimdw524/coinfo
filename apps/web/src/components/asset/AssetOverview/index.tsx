import { useRef } from 'react';

import { Maximize2Icon, XIcon } from 'lucide-react';

import { Box, Button, Typography } from '@repo/ui';
import { useOverlay } from '@repo/utils';

import AssetDetailPrice from '@/components/asset/AssetDetailPrice';
import AssetLogo from '@/components/asset/AssetLogo';
import TradingViewWidget from '@/components/asset/TradingViewWidget';

import * as s from './style.css';

interface AssetOverviewProps {
  symbol: string;
  name: string;
}

const AssetOverview = ({ symbol, name }: AssetOverviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { close } = useOverlay();

  const hadnleMaximizeClick = () => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.style.width = '100vw';
    container.style.height = '100vh';
  };

  return (
    <Box
      ref={containerRef}
      flex
      flexDirection="column"
      backgroundColor="background"
      padding="xl"
      className={s.modal}
      rounded
    >
      <Box flex justifyContent="space-between" alignItems="center" marginBottom="xl">
        <Box flex alignItems="center" gap="lg">
          <AssetLogo symbol={symbol} width={32} height={32} />
          <Typography size="3xl" weight="medium">
            {name}
          </Typography>
          <Typography color="muted-foreground">{symbol}</Typography>
        </Box>
        <Box flex gap="md">
          <Button size="icon-sm" onClick={hadnleMaximizeClick}>
            <Maximize2Icon />
          </Button>
          <Button size="icon-sm" color="red" onClick={close}>
            <XIcon />
          </Button>
        </Box>
      </Box>
      <AssetDetailPrice
        symbol={symbol}
        chart={
          <div style={{ flex: '1 1 auto', height: '300px' }}>
            <TradingViewWidget symbol={symbol} />
          </div>
        }
      />
    </Box>
  );
};

export default AssetOverview;
