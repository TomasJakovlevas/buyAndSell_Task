import styled from 'styled-components';
import { heroBlue } from '../../common/Colors';

export const StyledMain = styled.main`
  width: 100%;
  position: relative;
`;

export const Baground = styled.div`
  height: 135vh;
  /* clip-path: polygon(0 0, 100% 0%, 100% 93%, 0 100%); */
  position: absolute;
  width: 150%;
  top: -10%;
  right: -10%;
  /* clip-path: polygon(0 0, 100% 0, 100% 93%, 2% 100%); */
  border-radius: 0 0 0 50px;
  transform: rotate(-2deg);
  background-color: ${heroBlue};

  @media only screen and (min-width: 1400px) {
    width: 92%;
    height: 92vh;
  }
`;

export const Wrapper = styled.div`
  padding-top: 100px;
  transform: translate3d(0px, 0px, 0px);

  @media only screen and (min-width: 1200px) {
    width: 80%;
    height: 80vh;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;
