import { css } from "styled-components";
import { phone } from "../../utils/media";

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  float: ${p => p.float || "auto"};
  font-family: "Bodoni", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2rem;
  color: ${p => p.color || "black"};
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  font-weight: bold;
  border: 2px solid ${p => p.color || "black"};
  max-width: 100%;

  &:hover {
    background: ${p => p.color || "black"};
    color: ${p => p.hover || "#fff"};
    -webkit-box-shadow: 1px -4px 45px -5px rgba(0, 0, 0, 0.67);
    -moz-box-shadow: 1px -4px 45px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 1px -4px 45px -5px rgba(0, 0, 0, 0.67);
  }

  ${phone(`
    font-size: 1.2rem;
    padding: 0.125em 1em;
  `)};
`;

export default buttonStyles;
