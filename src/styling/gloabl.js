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
      border-bottom: 2px solid ${COLORS.cornFlowerBlue};

      
  }
`;
