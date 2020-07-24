import styled from 'styled-components';
import { COLORS } from '../../../styling/styles';

export const ButtonLike = styled.button`
  grid-column: 4;
  transition: 0.3s;

  &:hover {
    color: ${COLORS.maximumBluePurple};
    box-shadow: 5px 5px 15px #f2f2f2, -5px -5px 15px #ffffff;
  }
`;
