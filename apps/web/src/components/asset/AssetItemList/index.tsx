import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { Table, TableBody, TableHead, TableHeader, TableRow, Typography } from '@repo/ui';

import AssetItem from '@/components/asset/AssetItem';
import AssetItemLoading from '@/components/asset/AssetItem/loading';
import { currencies } from '@/constants/currencies';

const AssetItemList = () => {
  return (
    <Table striped>
      <TableHeader>
        <TableRow>
          <TableHead width="40%" textAlign="left">
            <Typography ellipsis>종목</Typography>
          </TableHead>
          <TableHead textAlign="right">
            <Typography ellipsis>현재가</Typography>
          </TableHead>
          <TableHead textAlign="right">
            <Typography ellipsis>변동</Typography>
          </TableHead>
          <TableHead width="15%" textAlign="right">
            <Typography ellipsis>프리미엄</Typography>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currencies.map((currency) => (
          <Suspense key={currency.symbol} fallback={<AssetItemLoading name={currency.name} symbol={currency.symbol} />}>
            <AssetItem key={currency.symbol} name={currency.name} symbol={currency.symbol} />
          </Suspense>
        ))}
      </TableBody>
    </Table>
  );
};

export default dynamic(() => Promise.resolve(AssetItemList), {
  ssr: false,
});
