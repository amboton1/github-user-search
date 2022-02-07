import styled from 'styled-components';
import { mixins } from '../../styles';

export const InputStyled = styled.div`
  width: 100%;

  form {
      position: relative;
      width: 100%;
  }
  
  input {
    ${mixins.componentStandardBorderRadius};
  }

  button {
      position: absolute;
      left: 32vw;
      margin-top: 5px;
  }
`;