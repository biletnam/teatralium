import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import H1 from "../H1";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default () => (
  <H1>
    <StyledLink to="/">♦</StyledLink>
  </H1>
);
