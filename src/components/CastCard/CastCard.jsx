import React from 'react';
import { IMAGE_BASE_PATH } from 'constants';
import { CastCardItem, CastName, NoImage, CastCharacter } from './CastCard.styled';

const CastCard = ({ profile_path, name, character }) => {
  return (
    <CastCardItem>
      {profile_path ? (
        <img
          src={`${IMAGE_BASE_PATH}${profile_path}`}
          alt={`${name}`}
          width={280}
          loading="lazy"
        />
      ) : (
        <NoImage>No image</NoImage>
      )}
      <CastName>{name}</CastName>
      <CastCharacter>Character: {character}</CastCharacter>
    </CastCardItem>
  );
};

export default CastCard;
