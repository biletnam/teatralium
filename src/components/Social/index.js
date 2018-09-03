import React from "react";
import styled from "styled-components";
import { phone } from "../../utils/media";

import Section from "../Section";

const Social = styled(Section)`
  text-transform: uppercase;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  padding: 3rem;

  > a {
    letter-spacing: 0.4rem;
    margin: auto;
    display: block;
    color: ${p => p.color || 'purple'};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${phone("flex-direction: column;")};
`;

const S = ({ color }) => (
  <Social color={color}>
    <a href="https://vk.com/teatralium" target="_blank">
      вконтакте
    </a>
    <a href="https://www.facebook.com/teatralium/" target="_blank">
      Facebook
    </a>
    <a href="https://telegram.dog/teatralium" target="_blank">
      Telegram
    </a>
  </Social>
);

export default S;
