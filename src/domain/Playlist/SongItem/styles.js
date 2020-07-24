import styled from 'styled-components';
import { COLORS } from '../../../styling/styles';

export const SongListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;

  border-radius: 0.5rem;
  padding: 2rem;
  margin: 2rem auto;
  width: 40rem;
  line-height: 1;
  transition: 0.2s ease-in;

  -webkit-box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    -webkit-box-shadow: 0px 0px 25px 8px rgba(255, 235, 231, 1);
    -moz-box-shadow: 0px 0px 25px 8px rgba(255, 235, 231, 1);
    box-shadow: 0px 0px 25px 6px rgba(255, 235, 231, 1);
  }
`;

export const ArtworkMini = styled.div`
  width: 10rem;
  height: 10rem;

  grid-row: 1 / 3;
  grid-column: 1;
`;

export const ArtworkImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
`;

export const Title = styled.h3`
  grid-column: 2;
  grid-row: 2;
  align-self: flex-end;
  padding: 1rem;
  font-size: 1.4rem;
`;

export const Artist = styled.p`
  grid-column: 2;
  grid-row: 2;
  /* align-self: flex-end; */
  padding: 1rem;
  font-size: 1.2rem;
  cursor: default;
`;

export const LikeButtonMini = styled.button`
  width: min-content;
  height: min-content;
  grid-column: 3;
  border-style: none;
  font-size: 1.5rem;
  background: transparent;
  color: ${COLORS.congoPink};

  margin: auto auto;
  transition: 0.2s ease;

  &:hover {
    color: ${COLORS.congoPink};
  }
`;

export const PlayCount = styled.p`
  grid-column: 3;
  grid-row: 2;
  align-self: center;
  justify-self: center;

  font-size: 1.3rem;
`;

export const Icon = styled.i`
  grid-column: 3;
  grid-row: 2;
  align-self: center;
`;

export const PlayButtonMini = styled.i`
  color: ${COLORS.mediumSpringGreen};
  font-size: 3rem;
  margin: auto 0;
  padding: 1rem;
`;
