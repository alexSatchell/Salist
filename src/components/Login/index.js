import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import {
  ContainerForm,
  Title,
  RegistrationForm,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  StyledLink,
  AlternateLogin,
} from './styles';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    // If user isAuthenicate, redirect to the home page
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields');
    } else {
      loginUser({
        email,
        password,
      });
    }
  };

  return (
    <ContainerForm>
      <Title>Account Login</Title>
      <RegistrationForm onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          ></Input>
        </FormGroup>
        <SubmitButton type='submit' value='Login' />
        <AlternateLogin>New User?</AlternateLogin>
        <StyledLink to='/register'>Register</StyledLink>
      </RegistrationForm>
    </ContainerForm>
  );
};

export default Login;
