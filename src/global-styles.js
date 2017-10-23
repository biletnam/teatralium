import { injectGlobal } from 'styled-components';

import bodoniItalic from './fonts/bodoni-italic.woff2';
import bodoniRegular from './fonts/bodoni-regular.woff2';
import bodoniBold from './fonts/bodoni-bold.woff2';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Georgia, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.75;
  }

  p {
    margin-bottom: 1.7em;
  }

  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    line-height: 1.2;
    font-family: 'Bodoni', 'PT Serif', serif;
  }

  body.fontLoaded {
    font-family: 'Bodoni', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app-wrapper {
  }

  @font-face {
    font-family: 'Bodoni';
    src: url(${bodoniRegular});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bodoni';
    src: url(${bodoniBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bodoni';
    src: url(${bodoniItalic});
    font-weight: normal;
    font-style: italic;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    vertical-align: baseline;
  }

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
`;
