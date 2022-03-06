import React, { useState } from 'react';
import { GlobalStyle } from '../../styles';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Profile from '../Profile/Profile';
import { LayoutStyled } from './Layout.style';

const Layout = () => {
  const [searchResults, setSearchResults] = useState(null);

  const onFormSubmit = async (searchTerm) => {
    const userInformations = await fetch(`https://api.github.com/users/${searchTerm}`);
    const extractedJSON = await userInformations.json();

    setSearchResults(extractedJSON);
  }

  return (
    <>
      <GlobalStyle />
      <LayoutStyled>
        <Header />
        <Input onFormSubmit={onFormSubmit} />
        <Profile />
      </LayoutStyled>
    </>
  );
};

export default Layout;
