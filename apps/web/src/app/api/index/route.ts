const getItem = (source: string, name: string) => {
  const data = source.split(`data-symbol="${name}" data-field="regularMarketPrice"`)[1];

  if (!data) {
    throw new Error();
  }

  const value = data.split('data-value="')[1]?.split('"')[0],
    change = data.split('<span')[1]?.split('>')[1]?.split('</spa')[0]?.replace('+', '');

  return {
    value: Math.round(Number(value) * 100) / 100,
    change: Math.round(Number(change) * 100) / 100,
  };
};

export async function GET() {
  try {
    const currency = await (await fetch('https://query1.finance.yahoo.com/v8/finance/chart/KRW=X')).json();
    const index = await (await fetch('https://finance.yahoo.com/markets/commodities/')).text();
    const current = currency.chart.result[0].meta.regularMarketPrice,
      prev = currency.chart.result[0].meta.previousClose;

    return Response.json({
      USDKRW: { value: current, change: current - prev },
      INDEXDJX: getItem(index, 'YM=F'),
      INDEXSP: getItem(index, 'ES=F'),
      INDEXNASDAQ: getItem(index, 'NQ=F'),
    });
  } catch {
    return Response.error();
  }
}

export const revalidate = 9;
export const dynamic = 'force-dynamic';
