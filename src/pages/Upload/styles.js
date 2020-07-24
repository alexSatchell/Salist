import styled from 'styled-components';
import { COLORS } from '../../styling/styles';

export const UploadContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  border: 1px solid black;
  padding: 1rem;
`;

export const UploadTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid blue;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  color: ${COLORS.jet};
  border: 1px solid green;
  margin: 0.5rem;
  font-size: 3rem;
`;
export const SubTitle = styled.h3`
  color: ${COLORS.jet};
  border: 1px solid green;
  margin: 0.5rem;
  font-size: 1.5rem;
`;

export const UploadInformation = styled.div`
  border: 1px solid green;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
  grid-row-gap: 1rem;
`;

export const ContainerUploadArtwork = styled.div`
  grid-row: 1;
  grid-column: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  padding: 1rem;
`;

export const Artwork = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 0.5rem;

  -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.1);
`;

export const UploadForm = styled.form`
  grid-row: 1;
  grid-column: 2;
  border: 1px solid blue;
  padding: 1rem;
`;

export const UploadInput = styled.input`
  width: 100%;

  /* border: 1px solid black; */
`;

export const Label = styled.label`
  /* border: 1px solid blue; */
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: block;
  margin-top: 2rem;
`;

export const FileLabel = styled.label`
  /* border: 1px solid blue; */
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: block;
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 60%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const Select = styled.select`
  width: 40%;
  padding: 0.2rem;
`;

export const Selection = styled.option``;

export const SubmitButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 2rem;
  width: 15rem;
  height: 3rem;
  transition: 0.2s ease;
  background: ${COLORS.grayWeb};
  cursor: pointer;
  font-size: 1.3rem;
  float: right;

  &:hover {
    background: ${COLORS.lightGray};
  }
`;

export const FormGroup = styled.div``;
