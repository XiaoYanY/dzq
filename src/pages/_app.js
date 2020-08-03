import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import { Button } from 'antd';
import withRematch from '../store/withRematch';
import { SENTRY_DSN } from '../consts';
// import 'antd/dist/antd.css';

Sentry.init({
  dsn: SENTRY_DSN
});

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   return {
  //     pageProps: Component.getInitialProps
  //       ? await Component.getInitialProps(ctx)
  //       : {}
  //   };
  // }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>Nextjs-stylus</title>
        </Head>
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRematch(MyApp);
