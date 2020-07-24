import styled from 'styled-components';

export const AccountContainer = styled.div`
  grid-column: center-start / center-end;

  border: 1px solid black;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ContainerUserDetails = styled.div`
  grid-column: 1;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 20rem;
  border-radius: 0.5rem;

  -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
`;

export const UserName = styled.h3`
  display: inline-block;
  /* border: 1px solid black; */
  /* width: 20rem; */

  padding: 1rem;
  font-size: 2rem;
`;
