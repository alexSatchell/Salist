import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import MusicPlayer from '../domain/MusicPlayer';
import DiscoverPlaylist from '../domain/Playlist/Discover';
import { QUERIES } from '../styling/styles';
import AuthContext from '../context/auth/authContext';

const HomeContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  /* border: 3px solid black; */
`;

const HomeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  /* border: 3px solid orangered; */
  padding: 1rem;

  @media (${QUERIES.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    /* border: 3px solid blue; */
  }
`;

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, token } = authContext;

  useEffect(() => {
    if (token) {
      authContext.loadUser();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <HomeContainer>
      <HomeContent>
        <MusicPlayer />
        <DiscoverPlaylist />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
