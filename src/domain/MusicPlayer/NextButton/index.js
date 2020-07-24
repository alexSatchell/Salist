import React, { useContext } from 'react';
import { ButtonNext } from './styles';
import SongContext from '../../../context/songs/songContext';

const NextButton = () => {
  const songContext = useContext(SongContext);
  const { getNextSong, songs } = songContext;

  // Get the current song from the playlist in our SongState
  const currentSong = songs.find((song) => song.current === true);

  // Pass the currentSong into the nextSong function
  const handleClick = () => {
    getNextSong(currentSong);
  };

  return (
    <ButtonNext
      className='fas fa-forward media-control'
      onClick={handleClick}
      title='Next'
    ></ButtonNext>
  );
};

export default NextButton;
