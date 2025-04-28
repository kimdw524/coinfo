'use client';

import Link from 'next/link';

import { Card, CardContent, CardInteraction } from '@repo/ui';
import { withInViewport } from '@repo/utils';

import { assetFamily } from '@/atoms/asset';
import AssetDetail from '@/components/asset/AssetDetail';
import useAtomAsync from '@/hooks/useAtomAsync';

interface AssetCardProps {
  name: string;
  symbol: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const AssetCard = ({ name, symbol, ref }: AssetCardProps) => {
  const [market] = useAtomAsync(assetFamily(symbol));

  return (
    <Link href={`/currencies/${symbol}`}>
      <Card ref={ref}>
        <CardInteraction>
          <CardContent padding="sm">
            <AssetDetail name={name} marketAtom={market!} />
          </CardContent>
        </CardInteraction>
      </Card>
    </Link>
  );
};

export default withInViewport(AssetCard);
