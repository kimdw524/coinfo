import { getDefaultStore, PrimitiveAtom } from 'jotai';

import { Market } from '@/atoms/asset';
import { AssetDetail } from '@/types/asset';

const useAssetPremium = (market: Partial<Record<Market, PrimitiveAtom<AssetDetail>>>): number | undefined => {
  const store = getDefaultStore();

  if (typeof window === 'undefined') {
    return;
  }

  if (market[Market.Upbit] && market[Market.Binance]) {
    const domestic = store.get(market[Market.Upbit]),
      foreign = store.get(market[Market.Binance]);

    if (domestic.trade_price === undefined || foreign.trade_price === undefined) {
      return;
    }

    return (domestic.trade_price / (foreign.trade_price * 1424) - 1) * 100;
  }

  return;
};

export default useAssetPremium;
