import React from 'react';
import { GlobalStyle } from '../../styles';
import Header from '../Header/Header';
import Input from '../Input/Input';
import { LayoutStyled } from './Layout.style';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutStyled>
        <Header />
        <Input />
        <p>content</p>
      </LayoutStyled>
    </>
  );
};

export default Layout;
