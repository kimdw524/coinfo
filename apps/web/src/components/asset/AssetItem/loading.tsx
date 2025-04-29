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
        <Box flex alignItems="center" gap="md" marginBottom="sm">
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
        <Skeleton width="100px" height="1rem" />
      </TableCell>
      <TableCell textAlign="right">
        <Box flex flexDirection="column" gap="sm" alignItems="flex-end">
          <Skeleton width="30px" height="0.75rem" />
          <Skeleton width="60px" height="1rem" />
        </Box>
      </TableCell>
      <TableCell textAlign="right">
        <Skeleton width="50px" height="1rem" />
      </TableCell>
    </TableRow>
  );
};

export default AssetItemLoading;
