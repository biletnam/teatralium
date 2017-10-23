import React from 'react'
import styled from 'styled-components'

import Section from '../Section'
import { titleStyles } from '../Header'
import { phone } from '../../utils/media'

const A = styled.a`
  ${titleStyles}
  font-size: 1.5rem;
  font-variant: small-caps;
  margin-left: 0.4rem;
  letter-spacing: 0.2rem;
`
const Share = styled.span`
 font-size: 1.2rem;
 color: grey;
 font-variant: small-caps;
 letter-spacing: 0.2rem;
 ${phone('display: block;')}
`

const S = ({ url }) => <Section margin="0 auto" align="center">
  <Share>поделиться:</Share> <A href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>facebook</A> <A href={`http://vkontakte.ru/share.php?url=${url}`}>vkontakte</A>
</Section>

export default S;
