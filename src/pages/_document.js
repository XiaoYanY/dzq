import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Layout } from '../components';

class MallDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://img.kaikeba.com/kkb_portal_icon.ico"
          />
        </Head>
        <body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MallDocument;
