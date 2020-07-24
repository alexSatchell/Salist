import React from 'react';
import { ContainerPlayer, PlayerContent, MusicPlayer } from './styles';
import ArtWork from './ArtWork';
import LikeButton from './LikeButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import PlayButton from './PlayButton';

const Player = () => {
  return (
    <ContainerPlayer>
      <PlayerContent>
        <MusicPlayer>
          <ArtWork />
          <PreviousButton />
          <PlayButton />
          <NextButton />
          <LikeButton />
        </MusicPlayer>
      </PlayerContent>
    </ContainerPlayer>
  );
};

export default Player;
