import styled from 'styled-components';
import { mainBtn } from '../../common/Colors';

export const StyledHero = styled.div`
  color: white;
  padding: 20px 0;
  width: 90%;
  margin: 0 auto;
  max-width: 625px;

  @media only screen and (min-width: 1200px) {
    grid-area: 2 / 1 / 4 / 3;
    font-size: 25px;
    width: 550px;
    padding: 0;
    h1 {
      margin: 0;
    }
  }

  @media only screen and (min-width: 1400px) {
    grid-area: 2 / 3 / 4 / 4;
  }
`;

export const StyledSpan = styled.span`
  color: ${mainBtn};
`;
