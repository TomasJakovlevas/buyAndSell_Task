import styled from 'styled-components';
import { mainBtn } from '../../common/Colors';

export const StyledParagraph = styled.div`
  width: 90%;
  margin: 50px auto 0 auto;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0%;
  }

  span {
    display: none;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0;
    grid-area: 4 / 1 / 6 / 3;
    width: 550px;
    font-size: 22px;

    @media only screen and (min-width: 1400px) {
      grid-area: 4 / 3 / 6 / 4;
    }

    span {
      display: block;

      a {
        color: ${mainBtn};
        text-decoration: none;
      }
    }
  }
`;
