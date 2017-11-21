import React from 'react'
import styled from 'styled-components'

import A from '../A'
import H1 from '../H1'
import { phone } from '../../utils/media'

export function gradientColor({ pathname }, index) {
  if (pathname === '/articles/ozhila_krasnaya_stsena' || pathname === '/') {
    return '#d43f34';
  }
  if (index === 0) {
    return '#333399'
  }

  return '#ff93e8'
}
export const titleStyles = `
  color: black;
  font-size: 2em;
  margin-top: 0.6em;
  font-weight: 100;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  > span {
    vertical-align: middle;
    font-size: 0.6em;
  ${phone(`font-size: 0.4em;`)}
}`

export const Title = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.23em;
  background: ${p => gradientColor(p, 0)};
  background: linear-gradient(to bottom, ${p => gradientColor(p, 0)}, ${p => gradientColor(p, 1)});
  ${titleStyles}
`;

const Wrapper = styled.div`
`;
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <A to="/">
          <Title pathname={this.props.pathname}><span>♦</span>Театралий<span>♦</span></Title>
        </A>
      </Wrapper>
    );
  }
}

export default Header;
