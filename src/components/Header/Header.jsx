import React from 'react';
import propTypes from 'prop-types';
import { HeaderStyled } from './Header.style';

const Header = ({ darkMode, onHandleDarkMode }) => {
  return (
    <HeaderStyled>
      <h1>devFinder</h1>
      <div role="button" onClick={onHandleDarkMode} className="background-mode">
        <h4>{darkMode ? 'Light' : 'Dark'}</h4>
        {darkMode ? <img src="/images/icon-sun.svg" alt="sun img" /> : <img src="/images/icon-moon.svg" alt="moon img" /> }
      </div>
    </HeaderStyled>
  );
};

Header.propTypes = {
  onHandleDarkMode: propTypes.func,
  darkMode: propTypes.bool
}

export default Header;
