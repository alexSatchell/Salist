import styled from 'styled-components';
import { COLORS } from '../../../styling/styles';

export const ButtonPrevious = styled.button`
  grid-column: 1;
  /* transition: 0.1s ease-in; */
  justify-self: flex-end;

  &:hover {
    color: ${COLORS.sonicSilver};
  }

  &:active {
    box-shadow: 5px 5px 15px #f2f2f2, -5px -5px 15px #ffffff;
  }
`;
