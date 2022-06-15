import { render } from '@testing-library/react';

import SharedNavbar from './shared-navbar';

describe('SharedNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
