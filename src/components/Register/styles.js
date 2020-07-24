import styled from 'styled-components';
import { COLORS } from '../../styling/styles';
import { NavLink } from 'react-router-dom';

export const ContainerForm = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  /* border: 1px solid black; */
  padding: 1rem;
  color: ${COLORS.jet};
`;

export const Span = styled.span`
  /* color: ${COLORS.congoPink}; */
`;

export const RegistrationForm = styled.form``;

export const FormGroup = styled.div``;

export const Label = styled.label`
  display: block;

  margin-top: 2rem;
  padding: 0.5rem 0;

  font-size: 1.3rem;
`;

export const Input = styled.input`
  width: 40rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const SubmitButton = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 2rem;
  float: right;
  width: 15rem;
  height: 3rem;
  transition: 0.2s ease;
  background: ${COLORS.grayWeb};
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    background: ${COLORS.lightGray};
  }
`;

export const StyledLink = styled(NavLink)`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

export const AlternateLogin = styled.p`
  font-size: 1.2rem;
  /* border: 1px solid black; */
  display: inline-block;
  padding: 1rem 0;
`;
