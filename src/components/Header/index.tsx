import React from 'react';

import Logo from '../../assets/img/logo.png';

import * as S from './styled';
import * as U from '../../styles/utilities';

const Header: React.FC = () => {
  return (
    <S.Container>
      <U.ContentLimit>
        <img src={Logo} alt="Logo" />
      </U.ContentLimit>
    </S.Container>
  );
};

export default Header;
