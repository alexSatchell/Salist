import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import {
  ContainerForm,
  Title,
  Span,
  RegistrationForm,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  AlternateLogin,
  StyledLink,
} from './styles';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    // If user isAuthenicate, redirect to the home page
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // Form Validation
  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields');
    } else if (password !== passwordConfirm) {
      setAlert('Passwords do not mach');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <ContainerForm>
      <Title>
        Account <Span>Register</Span>
      </Title>
      <RegistrationForm onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            // required
            minLength='6'
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='passwordConfirm'>Password Confirm</Label>
          <Input
            type='password'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={onChange}
            // required
            minLength='6'
          ></Input>
        </FormGroup>
        <SubmitButton type='submit' value='Register' />
        <AlternateLogin>Already Signed Up?</AlternateLogin>
        <StyledLink to='/login'>Login</StyledLink>
      </RegistrationForm>
    </ContainerForm>
  );
};

export default Register;
