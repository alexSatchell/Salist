import React from 'react';
import AlertContext from '../../context/alert/alertContext';
import { useContext } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  /* border: 1px solid black; */
  /* text-align: center; */
  font-size: 2rem;
`;

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <AlertContainer key={alert.id}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </AlertContainer>
    ))
  );
};

export default Alerts;
