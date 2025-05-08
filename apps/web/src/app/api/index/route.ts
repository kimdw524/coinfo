const getItem = (source: string, name: string) => {
  const data = source.split(name)[1]?.split('[')[1]?.split(']')[0]?.split(',');

  if (!data) {
    throw new Error();
  }

  return {
    value: Math.round(Number(data[0]) * 100) / 100,
    change: Math.round(Number(data[1]) * 100) / 100,
  };
};

export async function GET() {
  const data = await fetch('https://www.google.com/finance/markets/indexes/americas');
  const res = await data.text();

  const source = res.split('window.IJ_values =')[1]!;

  return Response.json({
    USDKRW: getItem(source, 'USD / KRW'),
    INDEXDJX: getItem(source, '[".DJI","INDEXDJX"]'),
    INDEXSP: getItem(source, '[".INX","INDEXSP"]'),
    INDEXNASDAQ: getItem(source, '["NDX","INDEXNASDAQ"]'),
  });
}

export const revalidate = 9;
