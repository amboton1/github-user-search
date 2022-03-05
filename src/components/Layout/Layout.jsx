import React, { useEffect } from 'react';
import { fetchUser } from '../../api/github';
import { GlobalStyle } from '../../styles';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Profile from '../Profile/Profile';
import { LayoutStyled } from './Layout.style';

const Layout = () => {

  useEffect(() => {
    fetchUser('https://api.github.com/users/amboton')
  }, [])

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
