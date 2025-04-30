'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Box, Card, CardContent, CardInteraction, Typography } from '@repo/ui';
import { withInViewport } from '@repo/utils';
import { useAtom } from 'jotai';

import Flag from '@/assets/images/flag-south-korea.webp';
import { assetFamily } from '@/atoms/asset';
import AssetLogo from '@/components/asset/AssetLogo';
import useAssetPremium from '@/hooks/useAssetPremium';
import useAtomAsync from '@/hooks/useAtomAsync';
import { getColorByChange } from '@/utils/getColorByChange';

interface AssetCardProps {
  name: string;
  symbol: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const AssetCard = ({ name, symbol, ref }: AssetCardProps) => {
  const [marketAtom] = useAtomAsync(assetFamily(symbol));
  const [market] = useAtom(marketAtom!);
  const [asset] = useAtom(Object.values(market)[0]!);
  const assetPremium = useAssetPremium(market);

  const price = asset?.trade_price || 0;
  const change = asset?.change_price || 0;

  const changeColor = getColorByChange<React.ComponentProps<typeof Typography>['color']>(
    change,
    'red-500',
    'blue-500',
    'foreground',
  );

  const premiumColor = getColorByChange<React.ComponentProps<typeof Typography>['color']>(
    assetPremium || 0,
    'red-500',
    'blue-500',
    'foreground',
  );

  return (
    <Link href={`/assets/${symbol}`}>
      <Card ref={ref}>
        <CardInteraction>
          <CardContent padding="sm">
            <Box flex alignItems="center" gap="md" marginBottom="sm">
              <span>
                <AssetLogo symbol={asset.symbol} width={24} height={24} />
              </span>
              <Typography as="p">{name}</Typography>
            </Box>
            <Typography size="sm" color="muted-foreground">
              {asset.symbol}
            </Typography>
            <Box flex alignItems="flex-end" justifyContent="space-between" marginTop="lg">
              <Box flex flexDirection="column" gap="md">
                <Box flex alignItems="center" gap="sm">
                  <Image src={Flag} width={16} height={16} alt="Premium" unoptimized />
                  <Typography size="sm" color={premiumColor}>
                    {assetPremium === undefined ? '-' : `${Math.round(assetPremium * 100) / 100}%`}
                  </Typography>
                </Box>
                <Typography size="md" weight="semiBold">
                  {price.toLocaleString()} {asset?.currency_code}
                </Typography>
              </Box>
              <Box flex flexDirection="column" alignItems="flex-end" gap="md">
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
          </CardContent>
        </CardInteraction>
      </Card>
    </Link>
  );
};

export default withInViewport(AssetCard);
