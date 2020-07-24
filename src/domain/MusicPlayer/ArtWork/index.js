import React, { useContext } from 'react';
import { ArtworkImg, ContainerArtwork } from './styles';
import SongContext from '../../../context/songs/songContext';

const ArtWork = () => {
  const songContext = useContext(SongContext);
  const { songs } = songContext;

  // Get the current song from the playlist in our SongState
  const currentSong = songs.find((song) => song.current === true);

  return (
    <ContainerArtwork>
      <ArtworkImg src={currentSong.artwork}></ArtworkImg>
    </ContainerArtwork>
  );
};

export default ArtWork;
