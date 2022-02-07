import React from 'react';
import { GlobalStyle } from '../../styles';
import Header from '../Header/Header';
import { LayoutStyled } from './Layout.style';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutStyled>
        <Header />
        <input type="text" placeholder="text input" />
        <p>content</p>
      </LayoutStyled>
    </>
  );
};

export default Layout;
