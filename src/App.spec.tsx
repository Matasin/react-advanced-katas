
import { debug } from 'jest-preview';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);
    debug();
  });
});
