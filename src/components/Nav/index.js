import React, { Fragment, useContext } from 'react';
import SearchInput from '../Search';
import AuthContext from '../../context/auth/authContext';

import {
  ContainerNav,
  NavContent,
  LinkContainer,
  NavList,
  ListItem,
  StyledLink,
} from './styles';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  const authLinks = (
    <Fragment>
      <ListItem>
        <StyledLink to='/account'>{user && user.name}</StyledLink>
      </ListItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ListItem>
        <StyledLink to='/login'>Account</StyledLink>
      </ListItem>
    </Fragment>
  );

  return (
    <ContainerNav>
      <NavContent>
        <LinkContainer>
          <NavList>
            <ListItem>
              <StyledLink exact to='/'>
                Home
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to='/upload'>Upload</StyledLink>
            </ListItem>
            <ListItem>
              <SearchInput />
            </ListItem>
            <ListItem>
              <StyledLink to='/library'>Library</StyledLink>
            </ListItem>
            {isAuthenticated ? authLinks : guestLinks}
          </NavList>
        </LinkContainer>
      </NavContent>
    </ContainerNav>
  );
};

export default Navbar;
