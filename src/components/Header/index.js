import React from 'react'
import styled from 'styled-components'

import A from '../A'
import H1 from '../H1'
import { phone } from '../../utils/media'

export const titleStyles = `
  color: black;
  font-size: 2em;
  margin-top: 0.6em;
  font-weight: 100;
  background: #333399;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #333399, #ff93e8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #333399, #ff93e8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  ${phone(`font-size: 0.7em;`)}
  > span {
    vertical-align: middle;
    font-size: 0.6em;
  ${phone(`font-size: 0.4em;`)}
}`

export const Title = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.23em;
  ${titleStyles}
`;
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A to="/">
          <Title><span>♦</span>Театралий<span>♦</span></Title>
        </A>
      </div>
    );
  }
}

export default Header;
