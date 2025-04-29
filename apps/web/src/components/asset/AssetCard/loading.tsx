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
            <Box flex alignItems="flex-end" justifyContent="space-between">
              <Box flex flexDirection="column" gap="md">
                <Box flex alignItems="center" gap="sm">
                  <Image src={Flag} width={16} height={16} alt="Premium" />
                  <Skeleton width="30px" height="0.875rem" />
                </Box>
                <Skeleton width="100px" height="1rem" />
              </Box>
              <Box flex flexDirection="column" alignItems="flex-end" gap="md" style={{ marginTop: '1rem' }}>
                <Skeleton width="30px" height="0.875rem" />
                <Skeleton width="50px" height="1rem" />
              </Box>
            </Box>
          </CardContent>
        </CardInteraction>
      </Card>
    </Link>
  );
};

export default AssetCardLoading;
