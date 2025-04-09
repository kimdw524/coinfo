import { render, screen, fireEvent } from '@testing-library/react';

import { Card, CardInteraction } from './';

describe('Card 컴포넌트', () => {
  it('Card가 렌더링되어야 한다', () => {
    render(<Card>Card</Card>);

    expect(screen.getByText('Card')).toBeInTheDocument();
  });

  it('CardInteraction이 렌더링되어야 한다', () => {
    render(
      <Card>
        <CardInteraction>CardInteraction</CardInteraction>
      </Card>,
    );

    expect(screen.getByText('CardInteraction')).toBeInTheDocument();
  });

  it('Card를 클릭하면 onClick이 호출되어야 한다', () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick}>
        <CardInteraction>Click</CardInteraction>
      </Card>,
    );

    fireEvent.click(screen.getByText('Click'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
