import React from 'react';

// style
import { StyledHero, StyledSpan } from './Hero.styled';

const Hero = () => {
  return (
    <StyledHero>
      <h1>
        <StyledSpan>Buy Bitcoin,</StyledSpan> Ethereum, Litecoin and other
        crypto <StyledSpan>online</StyledSpan>
      </h1>
    </StyledHero>
  );
};

export default Hero;
