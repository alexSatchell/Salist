import { COLORS } from '../../styling/styles';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerFooter = styled.div`
  grid-column: center-start / center-end;
  grid-row: 3;

  display: flex;
  padding: 3rem;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  font-size: 1.1rem;
`;

export const StyledLink = styled(NavLink)`
  outline: none;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${COLORS.jet};
  position: relative;
  transition: 0.2s ease;

  &:hover {
    color: ${COLORS.congoPink};
  }
`;
