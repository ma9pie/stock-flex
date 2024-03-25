import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

test('', async () => {
  render(<div>test</div>);
  await screen.findAllByText(/test/);
});
