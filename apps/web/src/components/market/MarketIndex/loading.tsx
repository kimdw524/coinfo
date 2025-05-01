import { Box, Card, CardContent, Skeleton } from '@repo/ui';

const MarketIndexLoading = () => {
  return (
    <Card>
      <CardContent padding="sm" style={{ width: 'max-content' }}>
        <Box flex gap="lg" style={{ fontSize: '0.875em' }}>
          <Box flex flexDirection="column" gap="md">
            <Skeleton width="6em" height="1em" />
            <Skeleton width="3.5em" height="1em" />
          </Box>
          <Box flex flexDirection="column" alignItems="flex-end" gap="md">
            <Skeleton width="2em" height="1em" />
            <Skeleton width="3em" height="1em" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MarketIndexLoading;
