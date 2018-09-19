import React from "react";
import styled from "styled-components";

import A from "../A";
import H1 from "../H1";
import { phone } from "../../utils/media";

export function gradientColor({ pathname }, index) {
  if (index === 0) {
    return "#333399";
  }
  return "";
}
export const titleStyles = `
  color: black;
  font-size: 2em;
  font-weight: 100;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  > span {
    vertical-align: middle;
    font-size: 0.6em;
  }
  ${phone(`
    margin-top: 1rem;
    font-size: 1rem;`)}
}`;

export const Title = styled(H1)`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.23em;
  background: #333399;
  background: linear-gradient(
    to bottom,
    #333399, #ff93e8
  );
  ${titleStyles};
`;

// ${
//   p => p.pathname && p.pathname.includes('/articles/idite_na/')
//     && p.pathname !== '/articles/idite_na/' && `
//       -webkit-background-clip: none;
//       -webkit-text-fill-color: white;
//       background: transparent;
//       color: white;

//   `}

const H = ({ pathname }) => (
  <Title pathname={pathname}>
    <span>♦</span>Театралий<span>♦</span>
  </Title>
);

const HeaderWrapper = styled.div`
`

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { pathname } = this.props;
    console.log(pathname)
    return (
      <HeaderWrapper pathname={pathname}>
        {pathname === "/" ? (
          <H />
        ) : (
            <A to="/">
              <H pathname={pathname} />
            </A>
          )}
      </HeaderWrapper>
    );
  }
}

export default Header;
