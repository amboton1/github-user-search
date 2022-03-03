import React from 'react';
import { GlobalStyle } from '../../styles';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Profile from '../Profile/Profile';
import { LayoutStyled } from './Layout.style';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutStyled>
        <Header />
        <Input />
        <Profile />
      </LayoutStyled>
    </>
  );
};

export default Layout;
