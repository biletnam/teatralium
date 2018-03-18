import React from 'react'
import Helmet from 'react-helmet'

const ArticleHelmet = ({ title, description, url, image, width, height }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={`https://teatralium.com${image}`} />
    <meta property="og:image:width" content={width} />
    <meta property="og:image:height" content={height} />
  </Helmet>
)

export default ArticleHelmet
