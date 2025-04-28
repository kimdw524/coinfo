import Link from 'next/link';

import { Card, CardContent, CardInteraction, Box, Skeleton, Typography } from '@repo/ui';

import AssetLogo from '@/components/asset/AssetLogo';

interface AssetCardLoadingProps {
  name: string;
  symbol: string;
}

export const AssetCardLoading = ({ name, symbol }: AssetCardLoadingProps) => {
  return (
    <Link href={`/currencies/${symbol}`}>
      <Card>
        <CardInteraction>
          <CardContent padding="sm">
            <Box flex alignItems="center" gap="md">
              <span>
                <AssetLogo symbol={symbol} width={24} height={24} />
              </span>
              <Typography as="p">{name}</Typography>
            </Box>
            <Typography size="sm" color="muted-foreground">
              {symbol}
            </Typography>
            <Box flex alignItems="flex-end" justifyContent="space-between">
              <Skeleton width="100px" height="1rem" />
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
