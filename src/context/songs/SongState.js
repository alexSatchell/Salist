import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SongContext from './songContext';
import songReducer from './songReducer';
import axios from 'axios';
import {
  LIKE_SONG,
  UN_LIKE_SONG,
  SET_CURRENT_SONG,
  GET_NEXT_SONG,
  GET_PREVIOUS_SONG,
  ADD_SONG,
  SONG_ERROR,
} from '../types';

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';

const SongState = (props) => {
  // testing state
  const initalState = {
    songs: [
      {
        id: uuidv4(),
        title: '1st Song Title',
        artist: 'Artist',
        liked: true,
        playCount: 123456,
        artwork: image1,
        current: true,
      },
      {
        id: uuidv4(),
        title: 'Song Title',
        artist: 'Artist',
        liked: false,
        playCount: 123456,
        artwork: image2,
        current: false,
      },
      {
        id: uuidv4(),
        title: 'Song Title',
        artist: 'Artist',
        liked: false,
        playCount: 123456,
        artwork: image3,
        current: false,
      },
      {
        id: uuidv4(),
        title: 'Song Title',
        artist: 'Artist',
        liked: false,
        playCount: 123456,
        artwork: image4,
        current: false,
      },
      {
        id: uuidv4(),
        title: 'Song Title',
        artist: 'Artist',
        liked: false,
        playCount: 123456,
        artwork: image7,
        current: false,
      },
      {
        id: uuidv4(),
        title: 'Song Title',
        artist: 'Artist',
        liked: false,
        playCount: 123456,
        artwork: image6,
        current: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(songReducer, initalState);

  const likeSong = (song) => {
    dispatch({ type: LIKE_SONG, payload: song });
  };

  const unLikeSong = (song) => {
    dispatch({ type: UN_LIKE_SONG, payload: song });
  };

  const setCurrentSong = (song) => {
    dispatch({ type: SET_CURRENT_SONG, payload: song });
  };

  const getNextSong = (current) => {
    dispatch({ type: GET_NEXT_SONG, payload: current });
  };

  const getPrevSong = (current) => {
    dispatch({ type: GET_PREVIOUS_SONG, payload: current });
  };

  const addSong = async (song) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/songs', song, config);
      dispatch({ type: ADD_SONG, payload: res.data });
    } catch (err) {
      dispatch({ type: SONG_ERROR, payload: err.response.msg });
    }
  };

  return (
    <SongContext.Provider
      value={{
        songs: state.songs,
        error: state.error,
        likeSong,
        setCurrentSong,
        unLikeSong,
        getNextSong,
        getPrevSong,
        addSong,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};
export default SongState;
