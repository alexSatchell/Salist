import React from 'react';
import { ContainerFooter, Copyright, StyledLink } from './styles';

const Footer = () => {
  return (
    <ContainerFooter>
      <Copyright>&copy; 2020 Alexander M Satchell</Copyright>
      <StyledLink to='/about' activeClassName='about-active'>
        About
      </StyledLink>
    </ContainerFooter>
  );
};

export default Footer;
