import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import axios from 'axios';

// style
import {
  StyledForm,
  StyledInputDiv,
  StyledLabel,
  SelectWrapper,
  PaymentLabel,
  BankSelect,
  BankSelectWrapper,
  ShadowDiv,
  PaymentP,
} from './BuyCryptoForm.styled';

// theme
import { primary } from '../../common/Colors';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEuroSign,
  faDollarSign,
  faPoundSign,
  faCoins,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBitcoin,
  faEthereum,
  faCcVisa,
  faCcApplePay,
} from '@fortawesome/free-brands-svg-icons';

const currencyIconArr = [
  <FontAwesomeIcon icon={faEuroSign} />,
  <FontAwesomeIcon icon={faDollarSign} />,
  <FontAwesomeIcon icon={faPoundSign} />,
];

const cryptoIconArr = [
  <FontAwesomeIcon icon={faBitcoin} />,
  <FontAwesomeIcon icon={faEthereum} />,
  <FontAwesomeIcon icon={faCoins} />,
];

const bankIconArr = [
  <FontAwesomeIcon icon={faCreditCard} />,
  <FontAwesomeIcon icon={faCcVisa} />,
  <FontAwesomeIcon icon={faCcApplePay} />,
];

const BuyCryptoForm = () => {
  // Hooks
  // -- state
  // -- form
  const [payInput, setPayInput] = useState('');
  const [currencySelect, setCurrencySelect] = useState('eur');
  const [iconCurrency, setIconCurrency] = useState(currencyIconArr[0]);
  const [buyInput, setBuyInput] = useState('');
  const [cryptoSelect, setCryptoSelect] = useState('btc');
  const [iconCrypto, setIconCrypto] = useState(cryptoIconArr[0]);
  const [bankSelect, setBankSelect] = useState('bankTransfer');
  const [bankIcon, setBankIcon] = useState(bankIconArr[0]);

  // -- button logic
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // -- rates state
  const [rates, setRates] = useState({});
  const [currentRates, setCurrentRates] = useState(0);

  // -- side effects
  useEffect(() => {
    // fetching rates
    axios.get('http://localhost:8000/api/coingate/rates').then((response) => {
      setRates(response.data.merchant);
      setCurrentRates(response.data.merchant.BTC.EUR);
    });
  }, []);

  useEffect(() => {
    // validate form
    if (payInput > 0 && buyInput) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [payInput, buyInput]);

  // Custom functions
  const calculateCrypto = (e) => {
    if (!isNaN(e.target.value)) {
      const selectValue = e.target.value;
      setPayInput(selectValue);
      currencyFromCrypto(selectValue, currentRates);
    }
  };

  const calculateCurrency = (e) => {
    if (!isNaN(e.target.value)) {
      const selectValue = e.target.value;
      setBuyInput(selectValue);
      currencyTimesCrypto(selectValue, currentRates);
    }
  };

  const changeCurrency = (e) => {
    const selectValue = e.target.value;
    setCurrencySelect(selectValue);

    const newRate = handlingChanges(selectValue, cryptoSelect);
    currencyTimesCrypto(buyInput, newRate);

    // change icon
    switch (selectValue) {
      case 'eur':
        setIconCurrency(currencyIconArr[0]);
        break;
      case 'usd':
        setIconCurrency(currencyIconArr[1]);
        break;
      case 'gbp':
        setIconCurrency(currencyIconArr[2]);
        break;
      default:
        return false;
    }
  };

  const changeCrypto = (e) => {
    const selectValue = e.target.value;
    setCryptoSelect(selectValue);

    const newRate = handlingChanges(currencySelect, selectValue);
    currencyFromCrypto(payInput, newRate);

    // change icon
    switch (selectValue) {
      case 'btc':
        setIconCrypto(cryptoIconArr[0]);
        break;
      case 'eth':
        setIconCrypto(cryptoIconArr[1]);
        break;
      case 'ltc':
        setIconCrypto(cryptoIconArr[2]);
        break;
      default:
        return false;
    }
  };

  const handlingChanges = (currency, crypto) => {
    let newRate;
    if (crypto === 'btc') {
      switch (currency) {
        case 'eur':
          newRate = rates.BTC.EUR;
          setCurrentRates(newRate);
          break;
        case 'usd':
          newRate = rates.BTC.USD;
          setCurrentRates(newRate);
          break;
        case 'gbp':
          newRate = rates.BTC.GBP;
          setCurrentRates(newRate);
          break;
        default:
          return false;
      }
    } else if (crypto === 'eth') {
      switch (currency) {
        case 'eur':
          newRate = rates.ETH.EUR;
          setCurrentRates(newRate);
          break;
        case 'usd':
          newRate = rates.ETH.USD;
          setCurrentRates(newRate);
          break;
        case 'gbp':
          newRate = rates.ETH.GBP;
          setCurrentRates(newRate);
          break;
        default:
          return false;
      }
    } else if (crypto === 'ltc') {
      switch (currency) {
        case 'eur':
          newRate = rates.LTC.EUR;
          setCurrentRates(newRate);
          break;
        case 'usd':
          newRate = rates.LTC.USD;
          setCurrentRates(newRate);
          break;
        case 'gbp':
          newRate = rates.LTC.GBP;
          setCurrentRates(newRate);
          break;
        default:
          return false;
      }
    }

    return newRate;
  };

  const currencyFromCrypto = (value, rates) => {
    setBuyInput((value / rates).toFixed(9));
  };

  const currencyTimesCrypto = (value, rates) => {
    setPayInput((value * rates).toFixed(2));
  };

  const handleBankChange = (e) => {
    setBankSelect(e.target.value);

    // change icon
    switch (e.target.value) {
      case 'bankTransfer':
        setBankIcon(bankIconArr[0]);
        break;
      case 'creditOrDebitCard':
        setBankIcon(bankIconArr[1]);
        break;
      case 'applePay':
        setBankIcon(bankIconArr[2]);
        break;
      default:
        return false;
    }
  };

  return (
    <>
      <StyledForm>
        <StyledInputDiv>
          <label htmlFor='payInput'>Pay</label>
          <input
            type='text'
            id='payInput'
            value={payInput}
            onChange={(e) => calculateCrypto(e)}
          />

          <SelectWrapper>
            <StyledLabel htmlFor='currencyInput'>{iconCurrency}</StyledLabel>
            <select
              id='currencyInput'
              value={currencySelect}
              onChange={(e) => changeCurrency(e)}
            >
              <option value='eur'>EUR</option>
              <option value='usd'>USD</option>
              <option value='gbp'>GBP</option>
            </select>
          </SelectWrapper>
        </StyledInputDiv>

        <StyledInputDiv>
          <label htmlFor='buyInput'>Buy</label>
          <input
            type='text'
            id='buyInput'
            value={buyInput}
            onChange={(e) => calculateCurrency(e)}
          />

          <SelectWrapper>
            <StyledLabel htmlFor='cryptoCurrencyInput'>
              {iconCrypto}
            </StyledLabel>
            <select
              id='cryptoCurrencyInput'
              value={cryptoSelect}
              onChange={(e) => changeCrypto(e)}
            >
              <option value='btc'>BTC</option>
              <option value='eth'>ETH</option>
              <option value='ltc'>LTC</option>
            </select>
          </SelectWrapper>
        </StyledInputDiv>
        <PaymentP>Payment method</PaymentP>

        <BankSelectWrapper>
          <PaymentLabel htmlFor='bankSelect'>{bankIcon}</PaymentLabel>
          <BankSelect
            id='bankSelect'
            value={bankSelect}
            onChange={(e) => {
              handleBankChange(e);
            }}
          >
            <option value='bankTransfer'>Bank transfer</option>
            <option value='creditOrDebitCard'>Credit/Debit Card</option>
            <option value='applePay'>Apple pay</option>
          </BankSelect>
        </BankSelectWrapper>

        <Button
          text={`Buy ${cryptoSelect.toUpperCase()}`}
          disabled={buttonDisabled}
          theme={primary}
        />
        <ShadowDiv></ShadowDiv>
      </StyledForm>
    </>
  );
};

export default BuyCryptoForm;
