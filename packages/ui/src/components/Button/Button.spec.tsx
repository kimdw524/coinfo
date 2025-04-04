import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './index';

describe('Button 컴포넌트', () => {
  it('버튼이 렌더링되어야 한다', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });

  it('버튼을 클릭하면 onClick이 호출되어야 한다', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole('button', { name: 'Click' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 버튼을 클릭하면 onClick이 호출되지 않아야 한다', () => {
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
