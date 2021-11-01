import React, { useState } from 'react';

// style
import {
  StyledHeader,
  Wrapper,
  LogoDiv,
  HamburgerMenuContainer,
  DropdownNav,
  StyledNavigation,
  StyledLi,
} from './Header.style';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// hamburger
import { Sling as Hamburger } from 'hamburger-react';

const Header = () => {
  // Hooks
  // -- state
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // Custom functions
  const showMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <LogoDiv>
            <img
              src='https://coingate.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimg%2Flogo.58a1e6fa5f027951dd446b6300eb7ae1.png&w=384&q=75'
              alt='coingateLogo'
            />

            <ul>
              <li>Products</li>
              <li>Resources</li>
              <li>Buy Instantly</li>
            </ul>
          </LogoDiv>
          <StyledNavigation>
            <ul>
              <li>Log in</li>
              <StyledLi>
                <a
                  href='https://www.linkedin.com/in/tomas-jakovlevas-247b2420a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Sign up &ensp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </StyledLi>
            </ul>
          </StyledNavigation>

          {/* IN MOBILE */}
          <HamburgerMenuContainer onClick={(e) => showMenu(e)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </HamburgerMenuContainer>
        </Wrapper>
      </StyledHeader>

      {/* Drop down menu */}
      {menuOpen && (
        <>
          <DropdownNav>
            <ul>
              <li>Products</li>
              <li>Resources</li>
              <li>Buy Instantly</li>
              <li>Log in</li>
              <li>
                <a
                  href='https://www.linkedin.com/in/tomas-jakovlevas-247b2420a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Sign up
                </a>
              </li>
            </ul>
          </DropdownNav>
        </>
      )}
    </>
  );
};

export default Header;
