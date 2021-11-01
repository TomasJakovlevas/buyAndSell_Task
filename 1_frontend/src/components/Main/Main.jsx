import React from 'react';

// style
import { StyledMain, Baground, Wrapper } from './Main.styled';

// components
import BuyCryptoForm from '../BuyCryptoForm/BuyCryptoForm';
import Hero from '../Hero/Hero';
import Paragraph from '../Paragraph/Paragraph';

const Main = () => {
  return (
    <StyledMain>
      <Baground />
      <Wrapper>
        <Hero />
        <BuyCryptoForm />
        <Paragraph />
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
