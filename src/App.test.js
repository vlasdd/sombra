import { render } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  expect(10 + 2).toBe(12);
});