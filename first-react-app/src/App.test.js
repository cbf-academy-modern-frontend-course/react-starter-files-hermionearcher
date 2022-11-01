import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils'
import { ReactDOM } from 'react-dom/client';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React Page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  act(() => {
    const root = ReactDOM.createRoot(document.createElement('div'));
    root.render(<App />)

  })
});
