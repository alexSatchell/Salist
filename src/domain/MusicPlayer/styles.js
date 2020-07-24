import styled from 'styled-components';
import { QUERIES } from '../../styling/styles';

export const ContainerPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 3px solid purple; */
  padding: 1rem;
`;

export const PlayerContent = styled.div`
  width: 100%;
  /* border: 3px solid green; */
  padding: 1rem;

  @media (${QUERIES.medium}) {
    width: 80%;
  }

  @media (${QUERIES.small}) {
    width: 100%;
  }
`;

export const MusicPlayer = styled.div`
  display: grid;
  grid-auto-columns: repeat(4, 25rem);
  grid-template-rows: 1fr 10rem;
`;
