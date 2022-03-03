import styled from 'styled-components';
import { mixins } from '../../styles';

export const InputStyled = styled.div`
  ${mixins.componentShadow};
  border-radius: 15px;
  width: 100%;

  form {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;
  }
  
  input {
    ${mixins.componentStandardBorderRadius};
  }

  button {
      position: absolute;
      right: 1vw;
      margin: 8px 0;
  }
`;