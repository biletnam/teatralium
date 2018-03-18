import styled from 'styled-components'
import { phone } from '../../utils/media'

const FillCover = styled.div`
  background: ${p => p.color};
  color: ${p => p.fontColor};
  background-image: url(${p => p.bg || 'none'});
  ${p => (p.repeat ? 'background-repeat: repeat' : 'background-size: cover')};
  min-height: ${p => p.height || 'auto'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${p => p.contain && 'background-size: contain;'}
  ${p => p.contain && p.center && 'background-position: center;'}
  ${p => p.bgPosition && `background-position: ${p.bgPosition};`}
  ${p => p.bgSize && `background-size: ${p.bgSize};`}

  ${p => p.shadow && 'box-shadow: inset 1px 4px 90px -6px #000000;'}
  ${p =>
    p.bordered &&
    `border: solid ${p.borderSize || 9}px ${p.borderColor || `#f2639e`};`}
  ${p =>
    p.pointer &&
    `&:hover {
    cursor: pointer;
  }`}
  ${phone(`
    dispay: block;
    min-height: auto;
  `)}
`

export default FillCover

export const TopCover = styled(FillCover)`
  min-height: 650px;
  height: calc(100vh - 70px - 2.8rem);
  ${phone(`
    min-height: auto;
    height: calc(100vh - 30px);
  `)};
`
