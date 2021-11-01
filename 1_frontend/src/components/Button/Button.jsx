import React from 'react';

// style
import { StyledButton } from './Button.style';

const Button = ({ text, disabled, theme }) => {
  return (
    <StyledButton disabled={disabled} theme={theme}>
      {text}
    </StyledButton>
  );
};

export default Button;
