import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: white;
  padding: 20px;
  width: 80%;
  min-width: 320px;
  margin: 0 auto;
  border: 1px solid #e8e8e8;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
    grid-area: 2 / 6 / 6 / 8;
    width: 100%;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 1400px) {
    grid-area: 2 / 6 / 6 / 8;
    position: relative;
  }
`;

export const StyledInputDiv = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: none;
    text-align: center;
    padding: 5px 0;
    outline: none;
    font-size: 15px;
  }

  select {
    background-color: white;
    border: none;
  }

  label {
    padding: 0 10px;
  }
`;

export const SelectWrapper = styled.div`
  width: 100px;
`;

export const StyledLabel = styled.label`
  color: #ffc400;
  padding: 5px 10px;
  border-left: 1px solid lightgrey;
`;

export const BankSelectWrapper = styled.div`
  border: 1px solid #d9d9d9;
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 80px;
`;

export const PaymentLabel = styled.label`
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 3px 10px;
  margin-right: 10px;
`;

export const BankSelect = styled.select`
  width: 100%;
  background-color: white;
  border: none;
`;

export const ShadowDiv = styled.div`
  @media only screen and (min-width: 1400px) {
    position: absolute;
    z-index: -1;
    top: -10%;
    left: -20%;
    width: 100%;
    height: 100%;
    background-color: #e9f6ff;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    transform: rotate(-10deg);
  }
`;

export const PaymentP = styled.p`
  width: 100%;
  margin: 0 0 50px 0;
`;

export const ErrorP = styled.p`
  margin: -20px 0 20px 0;
  padding: 0%;
  color: red;
  width: 100%;
`;
