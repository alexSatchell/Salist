import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import {
  AccountContainer,
  ContainerUserDetails,
  ProfileImage,
  UserName,
} from './styles';

const Account = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser, user, token } = authContext;

  useEffect(() => {
    if (token) {
      authContext.loadUser();
    } else {
      // If user is not logged in, redirect to login page
      props.history.push('/login');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const onLogout = () => {
    logoutUser();
    props.history.push('/login');
  };

  return (
    <AccountContainer>
      <ContainerUserDetails>
        <ProfileImage src='https://via.placeholder.com/400C/O%20https://placeholder.com/' />
        <UserName>{user && user.name}</UserName>
      </ContainerUserDetails>

      <h1 onClick={onLogout}>Logout</h1>
    </AccountContainer>
  );
};

export default Account;
