import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media ${theme.font.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      @media ${theme.font.media.lteMedium};
      color: ${background ? theme.colors.white : theme.colors.primaryColor};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.font.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
