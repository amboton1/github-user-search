import React from 'react';
import { InputStyled } from './Input.style';

const Input = () => {
  return (
      <InputStyled>
        <form>
            <input type="text" placeholder="Search GitHub username…" />
            <button type="submit">Search</button>
        </form>
      </InputStyled>
  );
};

export default Input;
