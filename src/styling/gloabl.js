import { createGlobalStyle } from 'styled-components';
import { COLORS, QUERIES } from './styles';

export const GlobalStyles = createGlobalStyle`

    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
    box-sizing: border-box;
    font-size: 62.5%; 

    @media (${QUERIES.medium}) {
    font-size: 58%;
  }
    }

    body {
        font-family: 'Roboto';
        font-weight: 400;
}

  .active {
      color: ${COLORS.davysGrey};
      border-bottom: 2px solid ${COLORS.glaucous};  
  }

  .active__sub__link {
    color: ${COLORS.davysGrey};
    border-bottom: 2px solid ${COLORS.congoPink}; 
  }

  .play {
    color: teal;
    font-size: 4rem;
  }

  .media-control {
  width: 7rem;
  height: 7rem;
  align-self: center;
  justify-self: center;
  font-size: 3rem;
  border-style: none;
  border-radius: 5rem;
  background: transparent;

  }

  .media-control:active {
    transform: scale(1.1);
  }

  .unliked {
    color: black;
  }
`;
