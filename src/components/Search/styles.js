import styled from 'styled-components';
import { QUERIES, COLORS } from '../../styling/styles';

export const Input = styled.input`
  display: flex;
  width: 50rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: ${COLORS.jet};
  /* text-align: center; */
  border-radius: 1rem;
  border: none;
  outline: none;

  transition: 0.2s ease-in-out;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(4, 168, 250, 0.15);
    -moz-box-shadow: 0px 0px 10px 0px rgba(4, 168, 250, 0.15);
    box-shadow: 0px 3px 20px 0px rgba(74, 111, 165, 0.15);
  }

  @media (${QUERIES.large}) {
    width: 35rem;
  }

  @media (${QUERIES.medium}) {
    width: 25rem;
  }

  @media (${QUERIES.small}) {
    width: 32rem;
  }
`;
