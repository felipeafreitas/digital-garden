import { globalCss } from "@stitches/react";

export const  globalStyles = globalCss({
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: 'border-box',
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block",
  },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '$loContrast',
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  table: {
    borderSpacing: "0",
  },
  "h1, h2, h3, h4, h5, h6, span, p, a, button, ol, li": {
    color: '$hiContrast',
    fontFamily: 'Open Sans',
    textDecoration: 'none',
  },
  h1: {
    fontSize: '$1',
    fontWeight: 700,
    lineHeight: 1.2
  },
  h2: {
    fontSize: '$2',
    lineHeight: 1.2
  },
  h3: {
    fontSize: '$3',
    fontWeight: 700,
    lineHeight: 1.2
  },
  "span, p, a": {
    fontSize: '$4',
    lineHeight: 1.8
  },
  a: {
    cursor: 'pointer'
  }
});