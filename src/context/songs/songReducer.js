import {
  LIKE_SONG,
  UN_LIKE_SONG,
  SET_CURRENT_SONG,
  GET_NEXT_SONG,
  GET_PREVIOUS_SONG,
  ADD_SONG,
  SONG_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        ...state,
        songs: state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return { ...song, liked: true };
          } else {
            return song;
          }
        }),
      };
    case UN_LIKE_SONG:
      return {
        ...state,
        songs: state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return { ...song, liked: false };
          } else {
            return song;
          }
        }),
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        songs: state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return { ...song, current: true };
          } else {
            return { ...song, current: false };
          }
        }),
      };
    case GET_NEXT_SONG:
      var currentSongIndex = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      let nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex > state.songs.length - 1) {
        nextSongIndex = 0;
      }

      let nextSong = state.songs[nextSongIndex];
      return {
        ...state,
        songs: state.songs.map((song) => {
          if (song.id === nextSong.id) {
            return { ...song, current: true };
          } else {
            return { ...song, current: false };
          }
        }),
      };
    case GET_PREVIOUS_SONG:
      currentSongIndex = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      let prevSongIndex = currentSongIndex - 1;
      if (prevSongIndex < 0) {
        prevSongIndex = state.songs.length - 1;
      }
      let prevSong = state.songs[prevSongIndex];
      return {
        ...state,
        songs: state.songs.map((song) => {
          if (song.id === prevSong.id) {
            return { ...song, current: true };
          } else {
            return { ...song, current: false };
          }
        }),
      };
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case SONG_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
