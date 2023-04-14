import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.background};//trocar a cor do body
    color: ${(props) => props.theme.colors.gray600};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }

  a {
    color: ${(props) => props.theme.colors.link}
  }
  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.normal};
    font-family: ${(props) => props.theme.fonts};
  }

  small {
    font-size: ${(props) => props.theme.fontSize.sm};
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.champagne};
  }
`;
