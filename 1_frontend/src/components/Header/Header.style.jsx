import styled from 'styled-components';
import { mainBtn } from '../../common/Colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
`;

export const LogoDiv = styled.div`
  /* width: 50%; */
  display: flex;
  align-items: center;

  img {
    max-width: 180px;
    max-height: 40px;
  }

  ul {
    padding: 10px 0;

    @media only screen and (max-width: 992px) {
      display: none;
    }
  }

  ul li {
    display: inline;
    padding: 5px 8px;
    margin: 0 10px;
    color: #7f88a0;
  }
`;

export const HamburgerMenuContainer = styled.div`
  font-size: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: grey;

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

// Drop down menu

export const DropdownNav = styled.nav`
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  z-index: 99;
  position: fixed;
  top: 70px;
  background-color: white;
  width: 100%;

  @media only screen and (min-width: 992px) {
    display: none;
  }

  ul {
    list-style-type: none;
    text-align: center;
    margin: 0%;
    padding: 0;
  }

  ul li {
    width: 100%;
    text-decoration: none;
    padding: 5px 0;
    &:hover {
      background-color: #f4f4f4;
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
  }
`;

// FROM TABLET

export const StyledHeader = styled.header`
  z-index: 99;
  background-color: white;
  position: fixed;
  width: 100%;
  @media only screen and (min-width: 992px) {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    padding: 10px 0;
  }

  ul li {
    display: inline;
    padding: 8px 20px;
    color: #7f88a0;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledLi = styled.li`
  background-color: ${mainBtn};
  color: white;
  border: none;
  border-radius: 2px 17px 17px 17px;

  a {
    text-decoration: none;
  }

  a:visited {
    color: white;
  }
`;
