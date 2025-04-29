'use client';

import { useRouter } from 'next/navigation';

import { Box, TableCell, TableRow, Typography } from '@repo/ui';
import { withInViewport } from '@repo/utils';
import { useAtom } from 'jotai';

import { assetFamily } from '@/atoms/asset';
import AssetLogo from '@/components/asset/AssetLogo';
import useAtomAsync from '@/hooks/useAtomAsync';
import { getColorByChange } from '@/utils/getColorByChange';

interface AssetItemProps {
  name: string;
  symbol: string;
  ref?: React.RefObject<HTMLTableRowElement | null>;
}

const AssetItem = ({ name, symbol, ref }: AssetItemProps) => {
  const router = useRouter();
  const [marketAtom] = useAtomAsync(assetFamily(symbol));
  const [market] = useAtom(marketAtom!);
  const [asset] = useAtom(Object.values(market)[0]!);

  const price = asset?.trade_price || 0;
  const change = asset?.change_price || 0;

  const changeColor = getColorByChange<React.ComponentProps<typeof Typography>['color']>(
    change,
    'red-500',
    'blue-500',
    'foreground',
  );

  return (
    <TableRow ref={ref} interactive onClick={() => router.push(`/currencies/${symbol}`)}>
      <TableCell>
        <Box flex alignItems="center" gap="md" marginBottom="sm">
          <span>
            <AssetLogo symbol={asset.symbol} width={24} height={24} />
          </span>
          <Box flex flexDirection="column" gap="sm">
            <Typography as="p">{name}</Typography>
            <Typography size="sm" color="muted-foreground">
              {asset.symbol}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell textAlign="right">
        <Typography>
          {price.toLocaleString()} {asset?.currency_code}
        </Typography>
      </TableCell>
      <TableCell textAlign="right">
        <Box flex flexDirection="column" gap="sm">
          <Typography size="xs" color={changeColor}>
            {change >= 0 && '+'}
            {change.toLocaleString()}
          </Typography>
          <Typography color={changeColor}>
            {change >= 0 && '+'}
            {Math.round((change / (price - change)) * 10000) / 100}%
          </Typography>
        </Box>
      </TableCell>
      <TableCell textAlign="right">-</TableCell>
    </TableRow>
  );
};

export default withInViewport(AssetItem);
