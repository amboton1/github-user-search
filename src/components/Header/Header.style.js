import styled from 'styled-components';
import { mixins } from '../../styles';

export const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .background-mode {
    cursor: pointer;
    display: flex;
    align-items: center;

    h4 {
      display: inline;
      letter-spacing: 2.5px;
      margin-right: 16px;
      text-transform: uppercase;
    }
  }
`;
