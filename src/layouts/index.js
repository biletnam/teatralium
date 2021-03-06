import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Social from "../components/Social";
import "sanitize.css/sanitize.css";
import "../global-styles";

const TemplateWrapper = ({ children, ...props }) => (
  <div style={{ height: "100%" }}>
    <Helmet title="Театралий">
      <html lang="ru" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="description" content="Театралии всех стран, соединяйтесь!" />
      <meta
        name="keywords"
        content="театр, театралий, teatralium, современный театр, несовременный театр"
      />
      <meta property="fb:app_id" content="1528916173863908" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="Театралий" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Театралии всех стран, соединяйтесь!"
      />
      <meta property="og:url" content="https://teatralium.com" />
      <meta
        property="og:image"
        content="https://teatralium.com/ms-icon-310x310.png"
      />
    </Helmet>
    <Header pathname={props.location.pathname} />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
