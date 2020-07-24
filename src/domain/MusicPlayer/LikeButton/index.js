import React, { useState, useEffect, useContext } from 'react';
import SongContext from '../../../context/songs/songContext';
import { ButtonLike } from './styles';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const songContext = useContext(SongContext);
  const { likeSong, unLikeSong, songs } = songContext;

  // Get the current song from the playlist in our SongState
  const currentSong = songs.find((song) => song.current === true);

  // If the current song is liked, setLiked will change the LikeButton state to show 'liked'
  // Else it will show false. This update is dependant upon the currentSong state re-rendering
  useEffect(() => {
    currentSong.liked === true
      ? setLiked(currentSong.liked)
      : setLiked(currentSong.liked);
  }, [currentSong]);

  // Set the proper state for displaying liked icon, and set liked property to [true] or [false]
  const handleClick = () => {
    if (liked === false) {
      setLiked(true);
      likeSong(currentSong);
    } else {
      setLiked(false);
      unLikeSong(currentSong);
    }
  };

  return (
    <ButtonLike
      className='fas fa-heart media-control'
      onClick={handleClick}
      style={
        liked
          ? {
              color: '#ff8985',
              boxShadow: '5px 5px 15px #f2f2f2, -5px -5px 15px #ffffff',
            }
          : {}
      }
      title='Add to Library'
    ></ButtonLike>
  );
};

export default LikeButton;
