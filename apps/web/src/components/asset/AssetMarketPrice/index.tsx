'use client';

import dynamic from 'next/dynamic';
import Image, { StaticImageData } from 'next/image';

import { PrimitiveAtom, useAtom } from 'jotai';

import { Box, TableCell, TableRow, Typography } from '@repo/ui';

import BinanceLogo from '@/assets/images/binance.png';
import BithumbLogo from '@/assets/images/bithumb.png';
import UpbitLogo from '@/assets/images/upbit.jpg';
import { AssetDetail, Market } from '@/types/asset';
import { getColorByChange } from '@/utils/getColorByChange';

interface AssetMarketPriceProps {
  marketId: (typeof Market)[keyof typeof Market];
  market: PrimitiveAtom<AssetDetail>;
}

const AssetMarketPrice = ({ marketId, market }: AssetMarketPriceProps) => {
  const [asset] = useAtom(market);
  const marketName = Market[marketId];

  const price = asset?.trade_price || 0;
  const change = asset?.change_price || 0;

  const changeColor = getColorByChange<React.ComponentProps<typeof Typography>['color']>(
    change,
    'red-500',
    'blue-500',
    'foreground',
  );

  const logo: Record<typeof marketId, StaticImageData> = {
    [Market.Upbit]: UpbitLogo,
    [Market.Bithumb]: BithumbLogo,
    [Market.Binance]: BinanceLogo,
  };

  return (
    <TableRow>
      <TableCell>
        <Box flex alignItems="center" gap="sm">
          <Image src={logo[marketId]} width={16} height={16} alt="logo" />
          <Typography size="sm" weight="medium">
            {marketName}
          </Typography>
        </Box>
      </TableCell>
      <TableCell colSpan={2}>
        <Box flex gap="sm" justifyContent="flex-end">
          <Typography size="sm" weight="medium">
            {asset.trade_price?.toLocaleString()} {asset.currency_code}
          </Typography>
          <Typography color={changeColor} size="sm" weight="medium">
            ({change >= 0 && '+'}
            {Math.round((change / (price - change)) * 10000) / 100}%)
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default dynamic(() => Promise.resolve(AssetMarketPrice), { ssr: false });
