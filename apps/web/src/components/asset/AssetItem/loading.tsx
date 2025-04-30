import { useRouter } from 'next/navigation';

import { Box, Skeleton, TableCell, TableRow, Typography } from '@repo/ui';

import AssetLogo from '@/components/asset/AssetLogo';

interface AssetItemLoadingProps {
  name: string;
  symbol: string;
}

const AssetItemLoading = ({ name, symbol }: AssetItemLoadingProps) => {
  const router = useRouter();

  return (
    <TableRow interactive onClick={() => router.push(`/currencies/${symbol}`)}>
      <TableCell>
        <Box flex alignItems="center" gap="md">
          <span>
            <AssetLogo symbol={symbol} width={24} height={24} />
          </span>
          <Box flex flexDirection="column" gap="sm">
            <Typography as="p">{name}</Typography>
            <Typography size="sm" color="muted-foreground">
              {symbol}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell textAlign="right">
        <Skeleton width="6.25em" height="1em" />
      </TableCell>
      <TableCell textAlign="right">
        <Box flex flexDirection="column" gap="sm" alignItems="flex-end">
          <Skeleton width="1.875em" height="0.75em" />
          <Skeleton width="3.75em" height="1em" />
        </Box>
      </TableCell>
      <TableCell textAlign="right">
        <Skeleton width="3em" height="1em" />
      </TableCell>
    </TableRow>
  );
};

export default AssetItemLoading;
