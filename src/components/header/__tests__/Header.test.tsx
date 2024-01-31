import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '..';

describe('Header', () => {
  test('should render', () => {
    // Since the header has a Link, wrap with this MemoryRouter
    const {getByText} = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const linkElement = getByText(/Skeleton UI/i);
    expect(linkElement).toBeTruthy();
  });
});