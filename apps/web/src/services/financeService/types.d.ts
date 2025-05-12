interface FinanceChartResult {
  chart: {
    result: [
      {
        meta: {
          currency: string;
          symbol: string;
          exchangeName: string;
          fullExchangeName: string;
          instrumentType: string;
          firstTradeDate: number;
          regularMarketTime: number;
          hasPrePostMarketData: boolean;
          gmtoffset: number;
          timezone: string;
          exchangeTimezoneName: string;
          regularMarketPrice: number;
          fiftyTwoWeekHigh: number;
          fiftyTwoWeekLow: number;
          regularMarketDayHigh: number;
          regularMarketDayLow: number;
          regularMarketVolume: number;
          longName: string;
          shortName: string;
          chartPreviousClose: number;
          previousClose: number;
          scale: number;
          priceHint: number;
          currentTradingPeriod: {
            pre: {
              timezone: string;
              end: number;
              start: number;
              gmtoffset: number;
            };
            regular: {
              timezone: string;
              end: number;
              start: number;
              gmtoffset: number;
            };
            post: {
              timezone: string;
              end: number;
              start: number;
              gmtoffset: number;
            };
          };
        };
        tradingPeriods: [
          {
            timezone: string;
            end: number;
            start: number;
            gmtoffset: number;
          }[],
        ];
        dataGranularity: string;
        range: string;
        validRanges: string[];
      },
    ];
  };
}
