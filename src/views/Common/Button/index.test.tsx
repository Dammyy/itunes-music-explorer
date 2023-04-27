import * as React from 'react';
import { render, screen } from '@testing-library/react';

import BasicTextField from '.';

describe('Button Component', () => {
  it('renders button component', () => {
    render(<BasicTextField text="Search" type="submit" />);

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
