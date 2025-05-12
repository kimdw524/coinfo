import { useEffect, useRef } from 'react';

function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const preventStrictRef = useRef<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || preventStrictRef.current) {
      return;
    }

    preventStrictRef.current = true;

    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.appendChild(script);

      return () => {
        clearTimeout(timer);
      };
    }, 350);
  }, [containerRef]);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default TradingViewWidget;
