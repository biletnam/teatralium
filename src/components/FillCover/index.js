import styled from 'styled-components';
import { phone } from '../../utils/media';

const FillCover = styled.div`
  position: relative;
  background: ${(p) => p.color};
  color: ${(p) => p.fontColor};
  background-image: url(${(p) => p.bg || 'none'});
  ${p => p.repeat ? 'background-repeat: repeat' : 'background-size: cover'};
  min-height: ${p => p.height || 'auto'};
  display: flex;
  ${p => p.shadow && 'box-shadow: inset 1px 4px 90px -6px #000000;'}

  align-items: center;
  justify-content: center;
  ${p => p.bordered && `border: solid 9px ${p.borderColor || `#f2639e`};`}
  ${p => p.pointer && `&:hover {
    cursor: pointer;
  }`}
  ${phone(`
    dispay: block;
    min-height: auto;
  `)}
`;

export default FillCover;
