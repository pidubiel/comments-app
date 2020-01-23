import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  background-color: #0E0C12;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*, *:before, *:after {
  box-sizing: border-box;
}

body, html {
  font-family: 'Helvetica', sans-serif;
  max-width: 100%;
  overflow-x: hidden;
}

a {
  color: #7a7a8c;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: white;
}

li {
  display: inline-block;
  margin: 12px;
  font-size: 14px;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    display: block;
    padding: 10px 20px;
  }
}

button, input[type=submit] {
  display: block;
  margin: 30px auto;
  margin-bottom: 0;
  border: 3px solid #28242f;
  padding: 8px 14px;
  border-radius: 10px;
  background-color: #0E0C12;
  color: #7a7a8c;
  cursor: pointer;
  transition: 0.3s;
}

button:hover, input[type=submit]:hover {
  border: 3px solid #fff;
  color: #fff;
}

`;

export default GlobalStyles;
