import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders learn react link', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Find a service/i);
  expect(linkElement).toBeInTheDocument();
});
