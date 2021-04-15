import P from 'prop-types';

import * as Styled from './styles';

export const Textcomponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Textcomponent.propTypes = {
  children: P.node.isRequired,
};
