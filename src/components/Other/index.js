import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import H2 from '../H2'
import H4 from '../H4'
import Section from '../Section'
import { articles } from '../../utils/const'

const Preview = ({ url, title }) => <li><H4 size="1.9416rem"><Link to={url}>{title}</Link></H4></li>

const List = styled.ul`
  list-style-type: square;
`
const Other = ({ url }) => <Section>
  <H4>Другие материалы:</H4>
  <List>
  {articles.map((article, i) => url !== 'https://teatralium.com' + article.url ? <Preview key={i} {...article} /> : null)}
  </List>
</Section>;

export default Other;
