import styled from "styled-components";
import React from "react";
import Img from "gatsby-image";
import { phone } from "../../utils/media";
import Small from "../Small";

export const shadow = `
  box-shadow: 1px -4px 45px -5px rgba(102,51,153,.68);
`;

const Wrapper = styled.div`
  margin: ${p => p.margin || "0 auto"};
  margin-bottom: ${p => p.marginBottom || "4rem"};
  margin-top: ${p => p.marginTop || "4rem"};
  max-width: ${p => p.maxWidth || "450px"};
  display: ${p => p.display || "block"};
  width: 100%;
  ${p => p.noMobile && phone("display: none")};
`;

const ImgStyled = styled(Img)`
  display: block;
  margin: 0 auto;
  width: 100%;
  ${p => (p.height ? `height: ${p.height};` : "")} ${p =>
      p.width ? `width: ${p.width};` : ""} transition: all .5s ease-in;
  ${p => (p.round ? "border-radius: 50%;" : "")} ${p =>
      !p.noBorder &&
      `${p.shadow || shadow}
  &:hover {
    box-shadow: 0 19px 38px rgba(102,51,153,.30), 0 15px 12px rgba(102,51,153,.22);
  }`};
  ${p => (p.custom ? p.custom : "")};
`;

export const Description = props => (
  <Small marginTop={props.marginTop || "0.7rem"} outside={props.outside}>
    {props.desc} {props.url && <a href={props.url}>{props.title}</a>}
    {props.afterUrl && <span>{props.afterUrl}</span>}
  </Small>
);

const Image = props => (
  <Wrapper {...props}>
    <ImgStyled
      {...props}
      fadeIn
      backgroundColor={props.bg || "rgba(102,51,153,.30)"}
    />
    {props.desc && <Description {...props} />}
  </Wrapper>
);

export default Image;
