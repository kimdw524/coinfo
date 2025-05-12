import { useCallback } from 'react';

import useWebSocketAPI from '@/hooks/useWebSocketAPI';
import { Market } from '@/types/asset';

import type { UpbitTicker } from './types';

const useUpbitWebSocket = () => {
  const webSocketAPI = useWebSocketAPI<UpbitTicker>({
    market: Market.Upbit,
    url: 'wss://api.upbit.com/websocket/v1',
    formatSubscribe: useCallback((tickers) => {
      return JSON.stringify([
        {
          ticket: crypto.randomUUID(),
        },
        {
          type: 'ticker',
          codes: tickers.map((ticker) => `KRW-${ticker}`),
        },
        {
          format: 'DEFAULT',
        },
      ]);
    }, []),
    formatUpdate: useCallback((data) => {
      const code = data.code.split('-')[1] || '';

      return {
        ask_bid: data.ask_bid,
        change_price: data.signed_change_price,
        high_price: data.high_price,
        highest_52_week_date: data.highest_52_week_date,
        highest_52_week_price: data.highest_52_week_price,
        low_price: data.low_price,
        lowest_52_week_date: data.lowest_52_week_date,
        lowest_52_week_price: data.lowest_52_week_price,
        name: code,
        symbol: code,
        opening_price: data.opening_price,
        prev_closing_price: data.prev_closing_price,
        trade_price: data.trade_price,
        trade_volume: data.trade_volume,
        currency_code: 'KRW',
      };
    }, []),
  });

  return webSocketAPI;
};

export default useUpbitWebSocket;
