import React from 'react'
import styled from 'styled-components'
import { phone } from '../../utils/media'
import Small from '../Small'

const StyledSmall = styled(Small)`
  margin-left: 1.5rem;
`
const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    max-width: 50%;
    max-width: ${p => p.maxWidth || '600px'};
  }
  > div img {
    padding: 14px;
    max-width: ${p => p.maxWidth || '600px'};
    padding-bottom: 0;
    padding-right: 0;
    ${phone('max-width: 95%;')}
  }
`

const Wrapper = styled.div`
  margin-top: ${p => p.margin || '0'};
  margin-bottom: ${p => p.margin || '0'};
`

const Gallery = ({ images, alt, desc, margin, ...props }) => <Wrapper margin={margin}>
  <StyledGallery {...props}>
    {images.length && images.map((url, i) => <div key={`gal` + i}><img src={url} alt={`${alt} ${i}`}></img></div>)}
  </StyledGallery>
  {desc && <StyledSmall>{desc}</StyledSmall>}
</Wrapper>

export default Gallery
