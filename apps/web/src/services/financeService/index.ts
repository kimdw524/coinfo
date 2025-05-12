import 'server-only';

export const getFinanceChart = async (symbol: string) => {
  const result = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`);
  const json: FinanceChartResult = await result.json();

  const current = Math.round(json.chart.result[0].meta.regularMarketPrice * 100) / 100,
    prev = Math.round(json.chart.result[0].meta.previousClose * 100) / 100;

  return { value: current, change: Math.round((current - prev) * 100) / 100 };
};
