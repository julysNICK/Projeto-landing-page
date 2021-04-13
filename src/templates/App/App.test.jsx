import { render, screen } from '@testing-library/react';

import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
