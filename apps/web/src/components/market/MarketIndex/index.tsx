import { Box, Card, CardContent, Typography } from '@repo/ui';

import { getColorByChange } from '@/utils/getColorByChange';

interface MarketIndexProps {
  name: string;
  value: number;
  change: number;
}

const MarketIndex = ({ name, value, change }: MarketIndexProps) => {
  const changeColor = getColorByChange<React.ComponentProps<typeof Typography>['color']>(
    change,
    'red-500',
    'blue-500',
    'foreground',
  );

  return (
    <Card>
      <CardContent padding="sm" style={{ width: 'max-content' }}>
        <Box flex gap="lg" style={{ fontSize: '0.875em' }}>
          <Box flex flexDirection="column" gap="md">
            <Typography weight="bold">{name}</Typography>
            <Typography>{value.toLocaleString()}</Typography>
          </Box>
          <Box flex flexDirection="column" alignItems="flex-end" gap="md">
            <Typography color={changeColor} weight="semiBold">
              {Math.round((change / (value - change)) * 10000) / 100}%
            </Typography>
            <Typography color={changeColor}>
              {change >= 0 && '+'} {change.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MarketIndex;
