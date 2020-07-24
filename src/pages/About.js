import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import styled from 'styled-components';

const AccountContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  border: 1px solid black;
`;

const About = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <AccountContainer>
      <h1>About</h1>
    </AccountContainer>
  );
};

export default About;
