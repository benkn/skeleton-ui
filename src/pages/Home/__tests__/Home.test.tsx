import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../Home';

describe('Home', () => {
  test('renders', () => {
    const { getByText } = render(<Home />);
    getByText(/hello world/i);
  })
})