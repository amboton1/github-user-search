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

    color: ${props => props.darkMode && 'white'}
  }

  button {
      position: absolute;
      right: 1vw;
      margin: 8px 0;

      :hover {
        background: #60ABFF;
      }
  }
`;