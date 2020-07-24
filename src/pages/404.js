import React, { useEffect, useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import styled from 'styled-components';

const ContainerNoMatch = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;

  display: flex;
  justify-content: center;
`;

const Message = styled.h1``;

const NoMatchPage = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, token } = authContext;

  useEffect(() => {
    if (token) {
      authContext.loadUser();
    } else {
      // If user is not logged in, redirect to login page
      props.history.push('/login');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <ContainerNoMatch>
      <Message>Error, That page does not exist</Message>
    </ContainerNoMatch>
  );
};

export default NoMatchPage;
