import { render } from '@testing-library/react';

import SimpleButton from './button';

describe('SimpleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleButton />);
    expect(baseElement).toBeTruthy();
  });
});
