import styled from 'styled-components';

export const ContainerArtwork = styled.div`
  grid-column: 1 / 5;
  /* border: 3px solid blue; */

  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const ArtworkImg = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 0.5rem;

  -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
`;
