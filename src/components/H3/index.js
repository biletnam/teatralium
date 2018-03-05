import React from "react";
import styled from "styled-components";
import { phone } from "../../utils/media";

function H3(props) {
  return <h3 {...props} />;
}

export default styled(H3)`
  font-weight: bold;
  font-size: 2.618rem;
  text-align: ${p => p.align || "center"};
  font-style: ${p => p.fontStyle || "italic"};
  > span {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.01em;
  }
  ${phone(`
    font-size: 1em;
  `)};
`;
