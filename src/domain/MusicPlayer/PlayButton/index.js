import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styling/styles';
import SongContext from '../../../context/songs/songContext';

const ButtonPlay = styled.button`
  grid-column: 2;
  transition: 0.3s;
  justify-self: center;

  &:hover {
    color: ${COLORS.mediumSpringGreen};
    box-shadow: 5px 5px 15px #f2f2f2, -5px -5px 15px #ffffff;
  }
`;

const PlayButton = () => {
  const songContext = useContext(SongContext);
  const { setCurrentSong, current } = songContext;

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log(`is playing = ${playing}`);
  }, [playing]);

  const handleClick = (e) => {
    playing === false ? setPlaying(true) : setPlaying(false);
  };

  return (
    <ButtonPlay
      className={
        playing ? 'fas fa-pause media-control' : 'fas fa-play media-control'
      }
      onClick={handleClick}
      style={
        playing
          ? {
              color: '#ef6e6e',
              boxShadow: '5px 5px 15px #f2f2f2, -5px -5px 15px #ffffff',
            }
          : {}
      }
      title='Play'
    ></ButtonPlay>
  );
};

export default PlayButton;
