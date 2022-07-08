import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="root-modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
