import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.style';

const Input = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(searchTerm);
  }

  return (
      <InputStyled>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search GitHub username…" value={searchTerm} onChange={(e) => handleChange(e)} />
            <button type="submit">Search</button>
        </form>
      </InputStyled>
  );
};

Input.propTypes = {
  onFormSubmit: PropTypes.func
}

export default Input;
