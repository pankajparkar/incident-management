import { render } from '@testing-library/react';

import IncidentFeatureList from './incident-feature-list';

describe('IncidentFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncidentFeatureList />);
    expect(baseElement).toBeTruthy();
  });
});
