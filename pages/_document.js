// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head /> {/* Kosongkan dari link font, next/font akan mengurusnya */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}