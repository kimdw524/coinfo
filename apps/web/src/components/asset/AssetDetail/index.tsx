import { Box, Typography } from '@repo/ui';
import { PrimitiveAtom, useAtom } from 'jotai';

import { MarketAtom } from '@/atoms/asset';
import AssetLogo from '@/components/asset/AssetLogo';
import { getColorByChange } from '@/utils/getColorByChange';

interface AssetDetailProps {
  name: string;
  marketAtom: PrimitiveAtom<MarketAtom>;
}

const AssetDetail = ({ name, marketAtom }: AssetDetailProps) => {
  const [market] = useAtom(marketAtom);
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
    <>
      <Box flex alignItems="center" gap="md">
        <span>
          <AssetLogo symbol={asset.symbol} width={24} height={24} />
        </span>
        <Typography as="p">{name}</Typography>
      </Box>
      <Typography size="sm" color="muted-foreground">
        {asset.symbol}
      </Typography>
      <Box flex alignItems="flex-end" justifyContent="space-between">
        <Typography size="md" weight="semiBold">
          {price.toLocaleString()} {asset?.currency_code}
        </Typography>
        <Box flex flexDirection="column" alignItems="flex-end" gap="md" style={{ marginTop: '1rem' }}>
          <Typography size="sm" color={changeColor}>
            {change >= 0 && '+'}
            {change.toLocaleString()}
          </Typography>
          <Typography color={changeColor}>
            {change >= 0 && '+'}
            {Math.round((change / (price - change)) * 10000) / 100}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AssetDetail;
