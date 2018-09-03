import { injectGlobal } from 'styled-components'

import bodoniItalic from './fonts/bodoni-italic.woff2'
import bodoniRegular from './fonts/bodoni-regular.woff2'
import bodoniBold from './fonts/bodoni-bold.woff2'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
  }

  body {
    font-family: Georgia, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.75;
  }

  a {
    color: black;
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

  #curtain-left {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    pointer-events: none;
    user-drag: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    top:0;
    left:0;
    z-index: 100;
    -moz-animation-name: fadeLeft;
    -moz-animation-iteration-count: 1;
    -moz-animation-timing-function: ease-out;
    -moz-animation-duration: 2.0s;
    -webkit-animation-name: fadeLeft;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-out;
    -webkit-animation-duration: 2.0s;
    animation-name: fadeLeft;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 2.0s;
  }
  #curtain-left:hover {
    transform: scale(1.1);
    transition: 0.05s;
  }

    @-moz-keyframes fadeRight {
      0% {
          -moz-transform: translateX(200px);
      }
      100% {
          -moz-transform: translateX(0);
      }
    }
    @-webkit-keyframes fadeRight {
        0% {
            -webkit-transform: translateX(200px);
        }
        100% {
            -webkit-transform: translateX(0);
        }
    }
    @keyframes fadeRight {
        0% {
            transform: translateX(200px);
        }
        100% {
            transform: translateX(0);
        }
    }

    #curtain-right {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      position: absolute;
      pointer-events: none;
      user-drag: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      top:0;
      right:0;
      position: absolute;
      z-index: 100;
      -moz-animation-name: fadeRight;
      -moz-animation-iteration-count: 1;
      -moz-animation-timing-function: ease-out;
      -moz-animation-duration: 2.0s;
      -webkit-animation-name: fadeRight;
      -webkit-animation-iteration-count: 1;
      -webkit-animation-timing-function: ease-out;
      -webkit-animation-duration: 2.0s;
      animation-name: fadeRight;
      animation-iteration-count: 1;
      animation-timing-function: ease-out;
      animation-duration: 2.0s;
    }
    @-moz-keyframes fadeLeft {
        0% {
            -moz-transform: translateX(-200px);
        }
        100% {
            -moz-transform: translateX(0);
        }
    }
    @-webkit-keyframes fadeLeft {
        0% {
            -webkit-transform: translateX(-200px);
        }
        100% {
            -webkit-transform: translateX(0);
        }
    }
    @keyframes fadeLeft {
        0% {
            transform: translateX(-200px);
        }
        100% {
            transform: translateX(0);
        }
    }


`
