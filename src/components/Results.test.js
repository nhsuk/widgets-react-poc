import { render, screen } from '@testing-library/react';
import Results from './Results';

test('renders learn react link', () => {
  render(<Results organisations={[]} />);
  const linkElement = screen.getByText(/Go back/i);
  expect(linkElement).toBeInTheDocument();
});
