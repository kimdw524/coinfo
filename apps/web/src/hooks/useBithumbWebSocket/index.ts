import { useCallback } from 'react';

import useWebSocketAPI from '@/hooks/useWebSocketAPI';
import { Market } from '@/types/asset';

import type { BithumbTicker } from './types';

const useBithumbWebSocket = () => {
  const webSocketAPI = useWebSocketAPI<BithumbTicker>({
    market: Market.Bithumb,
    url: 'wss://pubwss.bithumb.com/pub/ws',
    formatSubscribe: useCallback((tickers) => {
      return JSON.stringify({
        type: 'ticker',
        symbols: tickers.map((ticker) => `${ticker}_KRW`),
        tickTypes: ['24H'],
      });
    }, []),
    formatUpdate: useCallback((data) => {
      if (data.type !== 'ticker') {
        return;
      }

      const content = data.content;
      const code = content.symbol.split('_')[0] || '';
      return {
        ask_bid: 'BID',
        change_price: Number(content.closePrice) - Number(content.openPrice),
        high_price: Number(content.highPrice),
        low_price: Number(content.lowPrice),
        name: code,
        symbol: code,
        opening_price: Number(content.openPrice),
        prev_closing_price: Number(content.prevClosePrice),
        currency_code: 'KRW',
        trade_price: Number(content.closePrice),
      };
    }, []),
  });

  return webSocketAPI;
};

export default useBithumbWebSocket;
