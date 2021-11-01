import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 2px 17px 17px 17px;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme ? props.theme.background : 'white'};
  color: ${(props) => (props.theme ? props.theme.color : 'black')};

  &:disabled {
    background-color: #b5b5b5;
  }
`;
