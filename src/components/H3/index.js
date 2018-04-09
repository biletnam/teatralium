import React from "react";
import styled from "styled-components";
import { phone } from "../../utils/media";

export default styled.h3`
  font-weight: bold;
  font-size: 2.618rem;
  text-align: ${p => p.align || "center"};
  font-style: ${p => p.fontStyle || "italic"};
  padding: ${p => p.padding || "auto"};
  > span {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.01em;
  }
  ${phone(`
    font-size: 1em;
  `)};
`;
