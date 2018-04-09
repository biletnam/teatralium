import React from "react";
import styled, { keyframes } from "styled-components";
import HomepageLink from "../HomepageLink";

import { phone } from "../../utils/media";

const fadein = keyframes`
  from { opacity: 0.2; }
  to   { opacity: 1; }
`;

const StyledSection = styled.section`
  max-width: calc(752px + 16px * 2);
  margin: ${p => p.margin || "3em auto"};
  margin-bottom: 0;
  margin-top: 0;
  padding: 0.3rem;
  text-align: ${p => p.align || "auto"};
  background: ${p => p.background || "none"};

  padding: ${p => p.padding || "2"}rem;
  padding-top: ${p => p.paddingTop || "0"};
  font-size: ${p => p.size || "auto"};
  color: ${p => p.color || "inherit"};
  animation: ${fadein} 1s ease-out;
  > h1,
  h2,
  h3 {
    text-align: ${p => p.align || "center"};
  }

  > blockquote {
    background-color: #f7f7f9;
    padding: 2rem;
    margin-bottom: 1rem;
  }
  ${phone("margin: 0 auto; padding: 1rem;")};
`;

const Section = props => (
  <StyledSection {...props}>
    {props.children}
    {props.withHomepageLink && <HomepageLink />}
  </StyledSection>
);
export default Section;
