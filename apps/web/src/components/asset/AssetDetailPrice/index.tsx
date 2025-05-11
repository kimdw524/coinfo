'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { useAtom } from 'jotai';

import { Box, Table, TableBody, Typography } from '@repo/ui';

import { assetFamily } from '@/atoms/asset';
import AssetMarketPrice from '@/components/asset/AssetMarketPrice';
import useAtomAsync from '@/hooks/useAtomAsync';
import { Market } from '@/types/asset';
import { getColorByChange } from '@/utils/getColorByChange';

interface AssetDetailPriceProps {
  symbol: string;
  chart: ReactNode;
}

const AssetDetailPrice = ({ symbol, chart }: AssetDetailPriceProps) => {
  const [marketAtom] = useAtomAsync(assetFamily(symbol));
  const [markets] = useAtom(marketAtom!);
  const [asset] = useAtom(Object.values(markets)[0]!);

  const price = asset?.trade_price || 0;
  const change = asset?.change_price || 0;

  const changeColor = getColorByChange<React.ComponentProps<typeof Typography>['color']>(
    change,
    'red-500',
    'blue-500',
    'foreground',
  );

  return (
    <>
      <Box flex gap="sm" alignItems="center" marginBottom="xl">
        <Typography size="lg" weight="semiBold">
          {price.toLocaleString()} {asset.currency_code}
        </Typography>
        <Box flex gap="sm">
          <Typography color={changeColor} weight="medium">
            {change >= 0 && '+'}
            {change.toLocaleString()}
          </Typography>
          <Typography color={changeColor} weight="semiBold">
            ({change >= 0 && '+'}
            {Math.round((change / (price - change)) * 10000) / 100}%)
          </Typography>
        </Box>
      </Box>
      {chart}
      <Typography size="sm">주요 거래소 시세</Typography>
      <Box padding="sm" backgroundColor="muted" marginTop="md" rounded>
        <Table>
          <TableBody>
            {Object.entries(markets).map(([marketId, market]) => (
              <AssetMarketPrice
                key={marketId}
                marketId={marketId as unknown as (typeof Market)[keyof typeof Market]}
                market={market}
              />
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default dynamic(() => Promise.resolve(AssetDetailPrice), { ssr: false });
