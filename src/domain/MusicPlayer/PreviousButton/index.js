import React, { useContext } from 'react';
import { ButtonPrevious } from './styles';
import SongContext from '../../../context/songs/songContext';

const PreviousButton = () => {
  const songContext = useContext(SongContext);
  const { getPrevSong, songs } = songContext;

  // Get the current song from the playlist in our SongState
  const currentSong = songs.find((song) => song.current === true);

  const handleClick = () => {
    getPrevSong(currentSong);
  };

  return (
    <ButtonPrevious
      className='fas fa-backward media-control'
      onClick={handleClick}
      title='Previous'
    ></ButtonPrevious>
  );
};

export default PreviousButton;
