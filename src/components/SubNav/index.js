import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { QUERIES, COLORS } from '../../styling/styles';

const ContainerSubNav = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  width: 100%;
  border: 3px solid black;
`;

const LinkContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid blue;
`;

const NavList = styled.ul`
  display: flex;
  display: flex;
  align-items: center;
  padding: 1rem;
  list-style-type: none;

  border: 2px solid red;
`;

const ListItem = styled.li`
  margin: 0 3rem;
`;

const StyledLink = styled(NavLink)`
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
    background: ${COLORS.congoPink};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const SubNav = () => {
  return (
    <ContainerSubNav>
      <LinkContainer>
        <NavList>
          <ListItem>
            <StyledLink
              exact
              to='/home/discover'
              activeClassName='active__sub__link'
            >
              Discover
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink
              to='/home/following'
              activeClassName='active__sub__link'
            >
              Following
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to='/home/uploads' activeClassName='active__sub__link'>
              Uploads
            </StyledLink>
          </ListItem>
        </NavList>
      </LinkContainer>
    </ContainerSubNav>
  );
};

export default SubNav;
