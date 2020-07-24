import React, { useContext } from 'react';
import SongContext from '../../../context/songs/songContext';
import {
  SongListItem,
  ArtworkMini,
  Title,
  Artist,
  LikeButtonMini,
  PlayCount,
  Icon,
  ArtworkImg,
} from './styles';

const SongItem = ({ song }) => {
  const songContext = useContext(SongContext);
  const { likeSong, unLikeSong, setCurrentSong, songs } = songContext;
  const { title, artist, liked, playCount, artwork } = song;

  // Get the current song from the playlist in our SongState
  const currentSong = songs.find((song) => song.current === true);

  // On the media player likeButton, if true like song, else unlike song
  const handleClick = () => {
    liked === false ? likeSong(song) : unLikeSong(song);
  };

  return (
    <SongListItem>
      <ArtworkMini onClick={() => setCurrentSong(song)}>
        <ArtworkImg src={artwork}></ArtworkImg>
      </ArtworkMini>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      <LikeButtonMini
        className={liked === true ? 'fas fa-heart' : 'far fa-heart unliked'}
        onClick={handleClick}
        title='Add to Library'
      >
        {currentSong.liked}
      </LikeButtonMini>
      <Icon className='fas fa-play' onClick={() => setCurrentSong(song)}></Icon>
      <PlayCount>{playCount}</PlayCount>
      <p>{song.id === currentSong.id ? 'current song' : 'not current song'}</p>
    </SongListItem>
  );
};

export default SongItem;
