import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import SearchInput from '../Search';

import {
  ContainerNav,
  NavContent,
  LinkContainer,
  NavList,
  ListItem,
  Input,
  StlyedLink,
} from './styles';

const ACTIVE = { color: 'blue' };

const Navbar = () => {
  return (
    <ContainerNav>
      <NavContent>
        <Router>
          <Switch>
            <LinkContainer>
              <NavList>
                <ListItem>
                  <StlyedLink exact to='/'>
                    Home
                  </StlyedLink>
                </ListItem>
                <ListItem>
                  <StlyedLink to='/upload'>Upload</StlyedLink>
                </ListItem>
                <ListItem>
                  <SearchInput />
                </ListItem>
                <ListItem>
                  <StlyedLink to='/library'>Library</StlyedLink>
                </ListItem>
                <ListItem>
                  <StlyedLink to='/account'>Account</StlyedLink>
                </ListItem>
              </NavList>
            </LinkContainer>
          </Switch>
        </Router>
      </NavContent>
    </ContainerNav>
  );
};

export default Navbar;
