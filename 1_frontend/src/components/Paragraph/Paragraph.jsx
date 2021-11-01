import React from 'react';

// style
import { StyledParagraph } from './Paragraph.style';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Paragraph = () => {
  return (
    <StyledParagraph>
      <p>
        Why bother going through complicated exchanges? Buy cryptocurrency with
        top payment methods like SEPA bank transfer, Credit and Debit Card,
        Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or
        any other popular crypto directly to your personal wallet without making
        any initial deposits. It's as easy as it gets!
      </p>
      <span>
        <a
          href='https://www.linkedin.com/in/tomas-jakovlevas-247b2420a/'
          target='_blank'
          rel='noreferrer'
        >
          Star now &ensp; <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </span>
    </StyledParagraph>
  );
};

export default Paragraph;
