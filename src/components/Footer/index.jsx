import P from 'prop-types';
import * as Styled from './styles';
import { Textcomponent } from '../Textcomponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Textcomponent>{html}</Textcomponent>
      </SectionContainer>
    </Styled.Container>
  );
};
Footer.propTypes = {
  html: P.string.isRequired,
};
