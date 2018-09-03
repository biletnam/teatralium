import React from "react";
import styled, { keyframes } from "styled-components";
// import Link from "gatsby-link";
import H1 from "../H1";
import { phone } from '../../utils/media';

const fadeStrong = keyframes`
0% {
  color: rgba(0, 255, 255, 1);
}

50% {
  color: rgba(255, 0, 255, 1);
}

0% {
  color: rgba(0, 255, 255, 1);
}
`

const StyledLink = styled.a`
  text-decoration: none;
  color: rgba(0, 255, 255, 1);
  padding: 0;
  line-hight: 1;
  text-align: center;
  animation: ${fadeStrong} 2s infinite;
  animation-delay: ${p => p.i * 0.1}s;
`;

const H1Styled = styled(H1)`
  line-height: 0.2;
  text-shadow: 2px 2px black;
  padding: ${p => p.i * 0.1}rem;
  font-size:${p => (p.i * p.i) * 1.01}rem;
  ${phone(`font-size: 1rem !important;`)}
`;
export default ({ i }) => (
  <StyledLink to="javascript:void(0)" i={i}>
    <H1Styled i={i}>♦</H1Styled>
  </StyledLink>
);
