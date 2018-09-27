import React from 'react'
import styled from 'styled-components'
import { phone } from '../../utils/media'
import Small from '../Small'
import Img from '../Img'

const StyledSmall = styled(Small)`
  margin-left: 1.2rem;
`
const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > div {
    padding: 14px;
    max-width: ${p => p.maxWidth || '600px'};
    padding-bottom: 0;
    padding-right: 0;
  }
  > div img {
    max-width: ${p => p.maxWidth || '600px'};
    max-height: ${p => p.maxHeight || 'auto'};
    ${phone('max-width: 100%;')};
  }
`

const Wrapper = styled.div`
  margin-top: ${p => p.margin || '0'};
  margin-bottom: ${p => p.margin || '0'};
  margin: 0 auto;
  max-width: 1200px;
`

const Gallery = ({ images, alt, desc, margin, imgProps, ...props }) => (
  <Wrapper margin={margin}>
    <StyledGallery {...props}>
      {images.length &&
        images.map((url, i) => (
          <div key={`gal` + i}>
            <Img
              {...imgProps}
              src={url}
              alt={`${alt} ${i}`}
              desc={props.descs ? props.descs[i] : null}
            />
          </div>
        ))}
    </StyledGallery>
    {desc && <StyledSmall>{desc}</StyledSmall>}
  </Wrapper>
)

export default Gallery
