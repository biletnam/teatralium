import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import H1 from "../H1";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 0, 255, 1);
  padding: 4rem;
  text-align: center;
  transition: color 2s;
  &:hover {
    transition: color 2s;
    color: rgba(0, 255, 255, 1);
  }
`;
export default () => (
  <StyledLink to="/">
    <H1>♦</H1>
  </StyledLink>
);
