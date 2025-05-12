import { getFinanceChart } from '@/services/financeService';

export async function GET() {
  try {
    return Response.json({
      USDKRW: await getFinanceChart('KRW=X'),
      INDEXDJX: await getFinanceChart('YM=F'),
      INDEXSP: await getFinanceChart('ES=F'),
      INDEXNASDAQ: await getFinanceChart('NQ=F'),
    });
  } catch {
    return Response.error();
  }
}

export const revalidate = 9;
export const dynamic = 'force-dynamic';
