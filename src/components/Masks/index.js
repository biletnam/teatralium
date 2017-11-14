import React from 'react'
import styled, { keyframes } from 'styled-components'

import mask1 from './masks/1.png'
import mask2 from './masks/2.png'
import mask3 from './masks/3.png'
import mask4 from './masks/4.png'
import mask5 from './masks/5.png'
import mask6 from './masks/6.png'

const masks = {
  1: mask1,
  2: mask2,
  3: mask3,
  4: mask4,
  5: mask5,
  6: mask6,
}

const hueRotate = (val) => keyframes`
  0%, 100%  { filter: sepia(100%) hue-rotate(${val}deg); }
  50% { filter: sepia(100%) hue-rotate(${val + 180}deg); }
`;

const rand = (to = 6) => Math.floor(Math.random() * to) + 1;

const Container = styled.div`
  z-index: 1;
  left: -30px;
  height: 51px;
  display: flex;
  margin-top: 4rem;
  width: 120%;
  margin-left: -10%;
  overflow: hidden;
  visibility: visible; opacity: 1; transition: opacity 2s linear;
`;

const StyledMask = styled.img`
  opacity: 0.8;
  height: 50px;
  padding-right: 2rem;
  animation: ${hueRotate(rand(180))} 5s infinite;
`;

const ids = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Masks = () => (
  <Container>
    {ids.map((x, i) => <StyledMask key={i} src={masks[rand()]} alt="/" />)}
  </Container>
);

export default Masks;
