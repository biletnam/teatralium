import React from 'react'
import Helmet from 'react-helmet'

const ArticleHelmet = ({ title, description, url, image }) => <Helmet>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={`https://teatralium.com${image}`} />
</Helmet>

export default ArticleHelmet
