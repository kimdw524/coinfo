import Link from 'next/link';

import { Card, CardContent, CardInteraction, Flex, Skeleton, Typography } from '@repo/ui';

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
            <Flex alignItems="center" gap="md">
              <span>
                <AssetLogo symbol={symbol} width={24} height={24} />
              </span>
              <Typography as="p">{name}</Typography>
            </Flex>
            <Typography size="sm" color="muted-foreground">
              {symbol}
            </Typography>
            <Flex alignItems="flex-end" justifyContent="space-between">
              <Skeleton width="100px" height="1rem" />
              <Flex direction="column" alignItems="flex-end" gap="md" style={{ marginTop: '1rem' }}>
                <Skeleton width="30px" height="0.875rem" />
                <Skeleton width="50px" height="1rem" />
              </Flex>
            </Flex>
          </CardContent>
        </CardInteraction>
      </Card>
    </Link>
  );
};
