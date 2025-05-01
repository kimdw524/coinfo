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

  return data!;
};

export default useFetchMarketIndex;
