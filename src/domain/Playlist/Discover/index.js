import React, { useContext } from 'react';
import { ContainerDiscover } from './styles';
import SongContext from '../../../context/songs/songContext';
import SongItem from '../SongItem';

const DiscoverPlaylist = () => {
  const songContext = useContext(SongContext);

  const { songs } = songContext;

  return (
    <ContainerDiscover>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </ContainerDiscover>
  );
};

export default DiscoverPlaylist;
