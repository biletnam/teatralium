import React from "react";
import styled from "styled-components";
import { phone } from "../../utils/media";
import Img from "gatsby-image";

const FillCover = styled.div`
  color: ${p => p.fontColor};
  ${p => !p.sizes && p.color && `background-color: ${p.color};`}
  background-image: url(${p => p.bg || "none"});
  ${p => (p.repeat ? "background-repeat: repeat" : "background-size: cover")};
  min-height: ${p => p.height || "400px"};
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${p => p.contain && "background-size: contain;"}
  ${p => p.contain && p.center && "background-position: center;"}
  ${p => p.bgPosition && `background-position: ${p.bgPosition};`}
  ${p => p.bgSize && `background-size: ${p.bgSize};`}

  ${p => p.shadow && "box-shadow: inset 1px 4px 90px -6px #000000;"}
  ${p =>
    p.bordered &&
    `border: solid ${p.borderSize || 9}px ${p.borderColor || `#f2639e`};`}
  ${p =>
    p.pointer &&
    `&:hover {
    cursor: pointer;
  }`}
  ${phone(`
    min-height: auto;
  `)}
  ${p =>
    `${phone(`
    ${p.noBgMobile && `background-image: none;`}
  `)}`};
`;

const Bg = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${props => props.height || "auto"};

  & > img {
    object-fit: ${props => props.fit || "cover"} !important;
    object-position: ${props => props.bgPosition || "top"} !important;
    font-family: 'object-fit: ${props =>
      props.fit || "cover"} !important; object-position: ${props =>
  props.position || "50% 50%"} !important;'
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: ${p => p.height || "400px"};
  height: 100%;
  z-index: -1;
  overflow: hidden;
  ${phone(`
    width: 200%;
    min-height: auto;
  `)} ${p =>
      `${phone(`
    ${p.noBgMobile && `display: none;`}
  `)}`};
`;

const FillCoverWithBg = props => {
  return (
    <FillCover {...props}>
      {props.sizes &&
        props.sizes.src && (
          <Wrapper {...props}>
            <Bg
              fadeIn
              backgroundColor={props.color || "lavender"}
              sizes={props.sizes}
            />
          </Wrapper>
        )}
      {props.children}
    </FillCover>
  );
};

export default FillCoverWithBg;

export const TopCover = styled(FillCoverWithBg)`
  min-height: 650px;
  height: calc(100vh - 110px);
  ${phone(`
    min-height: auto;
    height: calc(100vh + 200px);
  `)};
`;
