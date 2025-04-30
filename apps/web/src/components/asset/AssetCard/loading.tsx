import Image from 'next/image';
import Link from 'next/link';

import { Box, Card, CardContent, CardInteraction, Skeleton, Typography } from '@repo/ui';

import AssetLogo from '@/components/asset/AssetLogo';

import Flag from '@/assets/images/flag-south-korea.webp';

interface AssetCardLoadingProps {
  name: string;
  symbol: string;
}

const AssetCardLoading = ({ name, symbol }: AssetCardLoadingProps) => {
  return (
    <Link href={`/assets/${symbol}`}>
      <Card>
        <CardInteraction>
          <CardContent padding="sm">
            <Box flex alignItems="center" gap="md" marginBottom="sm">
              <span>
                <AssetLogo symbol={symbol} width={24} height={24} />
              </span>
              <Typography as="p">{name}</Typography>
            </Box>
            <Typography size="sm" color="muted-foreground">
              {symbol}
            </Typography>
            <Box flex alignItems="flex-end" justifyContent="space-between" marginTop="lg">
              <Box flex flexDirection="column" gap="md">
                <Box flex alignItems="center" gap="sm">
                  <Image src={Flag} width={16} height={16} alt="Premium" />
                  <Skeleton width="2em" height="0.875em" />
                </Box>
                <Skeleton width="6.25em" height="1em" />
              </Box>
              <Box flex flexDirection="column" alignItems="flex-end" gap="md">
                <Skeleton width="2em" height="0.875em" />
                <Skeleton width="3em" height="1em" />
              </Box>
            </Box>
          </CardContent>
        </CardInteraction>
      </Card>
    </Link>
  );
};

export default AssetCardLoading;
