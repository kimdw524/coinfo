import { render, screen } from '@testing-library/react';

import { Accordion, AccordionContent, AccordionTrigger } from '.';

describe('Accordion 컴포넌트', () => {
  it('Accordion이 렌더링되어야 한다.', () => {
    render(
      <Accordion>
        <AccordionTrigger>Trigger</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
      </Accordion>,
    );

    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
