import React from 'react';
import styled from 'styled-components';
import { phone } from '../../utils/media';

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    max-width: 50%;
    max-width: 600px;
  }
  > div img {
    padding: 14px;
    max-width: 600px;
    padding-bottom: 0;
    padding-right: 0;
    ${phone('max-width: 95%;')}
  }
`;

const Gallery = ({ images, alt, ...props }) => <StyledGallery {...props}>
  {images.length && images.map((url, i) => <div><img key={i} src={url} alt={`${alt} ${i}`}></img></div>)}
</StyledGallery>;

export default Gallery;
