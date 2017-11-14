import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  margin-bottom: ${p => p.marginBottom || '1rem'};
  height: 0;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ url, ...props }) => <Wrapper {...props}>
  <iframe src={url} frameBorder="0" allowFullScreen></iframe>
</Wrapper>;

export default Video;
