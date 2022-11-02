import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import Home from '../pages/Test/Home';

describe('Rendering', () => {
  it('Should render hello text', () => {
    render(<Home />);
    expect(screen.getByText('Hello Next.js')).toBeInTheDocument();
  });
});
