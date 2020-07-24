import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
// import SongContext from '../../context/songs/songContext';
import {
  UploadContainer,
  UploadTitleContainer,
  Title,
  SubTitle,
  ContainerUploadArtwork,
  Label,
  UploadForm,
  UploadInformation,
  Artwork,
  UploadInput,
  Input,
  Select,
  Selection,
  SubmitButton,
  FormGroup,
  FileLabel,
} from './styles';

const Upload = () => {
  // const songContext = useContext(SongContext);

  const onSubmit = (e) => {};

  const authContext = useContext(AuthContext);
  const { isAuthenticated, token } = authContext;

  useEffect(() => {
    if (token) {
      authContext.loadUser();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <UploadContainer>
      <UploadTitleContainer>
        <Title>Upload</Title>
        <SubTitle>New Upload Information</SubTitle>
      </UploadTitleContainer>
      <UploadInformation>
        <ContainerUploadArtwork>
          <Artwork src='https://source.unsplash.com/random'></Artwork>
        </ContainerUploadArtwork>
        <UploadForm onSubmit={onSubmit}>
          <FormGroup>
            <Label htmlFor='title'>Song Title</Label>
            <Input type='text' name='title' required />
          </FormGroup>

          <FormGroup>
            <FileLabel htmlFor='audioUpload'>Upload Song</FileLabel>
            <UploadInput type='file' name='audioUpload' required></UploadInput>
          </FormGroup>

          <FormGroup>
            <FileLabel htmlFor='artworkUpload'>Upload Artwork</FileLabel>
            <UploadInput type='file' name='artworkUpload' />
          </FormGroup>

          <FormGroup>
            <Label>Genre</Label>
            <Select>
              <Selection>Hip Hop</Selection>
              <Selection>Rock</Selection>
              <Selection>R&B</Selection>
            </Select>
          </FormGroup>

          <FormGroup>
            <SubmitButton type='submit'>Upload</SubmitButton>
          </FormGroup>
        </UploadForm>
      </UploadInformation>
    </UploadContainer>
  );
};

export default Upload;
