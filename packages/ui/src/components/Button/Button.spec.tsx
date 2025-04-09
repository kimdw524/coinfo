import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './';

describe('Button 컴포넌트', () => {
  it('Button이 렌더링되어야 한다', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });

  it('Button을 클릭하면 onClick이 호출되어야 한다', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole('button', { name: 'Click' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled Button을 클릭하면 onClick이 호출되지 않아야 한다', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click
      </Button>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Click' }));

    expect(handleClick).not.toHaveBeenCalledTimes(1);
  });
});
