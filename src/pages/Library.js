import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';

import styled from 'styled-components';

const LibraryContainer = styled.div`
  grid-column: center-start / center-end;
`;

const Library = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, token } = authContext;

  useEffect(() => {
    if (token) {
      authContext.loadUser();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <LibraryContainer>
      <h1>Library</h1>
    </LibraryContainer>
  );
};

export default Library;
