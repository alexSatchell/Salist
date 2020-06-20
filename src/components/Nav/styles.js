import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { QUERIES, COLORS } from '../../styling/styles';

export const ContainerNav = styled.div`
  grid-column: center-start / center-end;
  grid-row: 1;
  width: 100%;
  /* border: 3px solid green; */

  @media (${QUERIES.large}) {
  }
`;

export const NavContent = styled.div``;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  /* border: 3px solid black; */

  @media (${QUERIES.small}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* border: 3px solid blue; */
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 2rem;
  list-style-type: none;

  @media (${QUERIES.small}) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    padding: 1rem;
    /* border: 1px solid black; */

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: flex-end;
  }
`;

export const ListItem = styled.li`
  margin: 0 3rem;

  @media (${QUERIES.large}) {
    margin: 0 2.2rem;
  }

  @media (${QUERIES.medium}) {
    margin: 0 1.2rem;
  }

  @media (${QUERIES.small}) {
    &:nth-child(1) {
      grid-row: 2;
    }

    &:nth-child(2) {
      grid-row: 2;
    }

    &:nth-child(3) {
      order: -1;
      transition: 0.3s ease;
      grid-row: 1;
      grid-column: 1 / 5;
    }

    &:nth-child(4) {
      grid-row: 2;
    }

    &:nth-child(5) {
      grid-row: 2;
    }

    margin: 0rem;
  }
  /* border: 1px solid purple; */
`;

export const StlyedLink = styled(NavLink)`
  outline: none;
  text-decoration: none;
  font-size: 1.6rem;
  color: ${COLORS.jet};
  position: relative;

  &:hover {
    color: ${COLORS.davysGrey};
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${COLORS.cornFlowerBlue};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
