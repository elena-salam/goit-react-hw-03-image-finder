import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryList = styled.ul` 
display: grid; 
max-width: calc(100vw - 48px); 
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
grid-gap: 16px; 
margin-top: 0; 
margin-bottom: 0; 
padding: 0; 
list-style: none; 
margin-left: auto; 
margin-right: auto;
`;
function ImageGallery({ images, onOpen }) {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.largeImageURL}
          image={image.webformatURL}
          alt={image.tags}
          onOpenModal ={() => onOpen(image.largeImageURL)}
        />
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes={
    images: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func
}

export default ImageGallery;

