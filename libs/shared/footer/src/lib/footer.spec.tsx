import { render } from '@testing-library/react';

import SharedFooter from './footer';

describe('SharedFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFooter />);
    expect(baseElement).toBeTruthy();
  });
});
