import React from 'react';
import { HeaderStyled } from './Header.style';

const Header = () => {
  return (
    <HeaderStyled>
      <h1>devFinder</h1>
      <div className="background-mode">
        <h4>Dark</h4>
        <img src="/images/icon-moon.svg" alt="moon img" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
