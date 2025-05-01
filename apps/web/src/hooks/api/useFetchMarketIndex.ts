import { exchangeRateAtom } from '@/atoms/exchangeRate';
import { getDefaultStore } from 'jotai';
import { useEffect } from 'react';
import useSWR from 'swr';

interface MarketData {
  value: number;
  change: number;
}

interface MarketIndexResponse {
  USDKRW: MarketData;
  INDEXDJX: MarketData;
  INDEXSP: MarketData;
  INDEXNASDAQ: MarketData;
}

const useFetchMarketIndex = () => {
  const { data } = useSWR<MarketIndexResponse>('/api/index', { refreshInterval: 10000, suspense: true });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const store = getDefaultStore();
      store.set(exchangeRateAtom, data?.USDKRW.value);
    }
  }, [data?.USDKRW.value]);

  return data!;
};

export default useFetchMarketIndex;
