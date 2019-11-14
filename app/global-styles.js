import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'greycliff-bold';
    font-style: normal;
    font-weight: bold;
    src: url('https://cdn.ownerly.com/assets/fonts/greycliffcf-bold-webfont.woff2') format('woff2'),
    url('https://cdn.ownerly.com/assets/fonts/greycliffcf-bold-webfont.woff') format('woff');
  }

  @font-face {
    font-family: 'greycliff-demibold';
    src: url('https://cdn.ownerly.com/assets/fonts/greycliffcf-demibold-webfont.woff2') format('woff2'),
    url('https://cdn.ownerly.com/assets/fonts/greycliffcf-demibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: ${props => props.theme.mainFont};
  }

  h1, h2, h3, h4, h5 {
    font-family: ${props => props.theme.secondaryFont};
  }

  h3 {
    color: #adb5bd;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: ${(props) => (props.theme.mainFont)};
    line-height: 1.5em;
    font-size: 16px;
  }

  .section-heading {
    margin: 50px 0;

    .section-title {
      color: #000;
      font-size: 40px;
    }

    .section-sub-title {
      font-size: 14px;
      color: #adb5bd;
      letter-spacing: 0.1em;
    }

    .section-txt {
      font-size: 18px;
      color:  ${props => props.theme.grey};
    }
  }

  .btn-black {
    color: black;
    background-color: transparent;
    border: 2px solid black;
    padding: 6px 20px;
    border-radius: 0;

    &:hover {
      color: white;
      background-color: black;
    }
  }

  .btn-white {
    color: white;
    background-color: transparent;
    border: 2px solid white;
    padding: 6px 20px;
    border-radius: 0;

    &:hover {
      color: black;
      background-color: white;
    }
  }
`;
