import { Market } from '@/atoms/asset';
import { AssetDetail } from '@/types/asset';

export interface WebSocketEvent {
  onopen?: WebSocket['onopen'];
  onclose?: WebSocket['onclose'];
  onerror?: WebSocket['onerror'];
}

export interface UseWebSocketAPIProps<U> {
  market: Market;
  url: string;
  formatSubscribe: (tickers: string[]) => string;
  formatUpdate: (data: U) => AssetDetail | undefined | void;
}
