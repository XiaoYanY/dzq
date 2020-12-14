import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';

import withRematch from '../store/withRematch';
import { SENTRY_DSN } from '../consts';
import './rest.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      seoData: ctx.req?.seoData || {}
    };
  }

  componentDidMount() {
    Sentry?.init?.({
      dsn: SENTRY_DSN
    });
  }

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
    const { Component, pageProps, store, seoData } = this.props;
    return (
      <>
        <Head>
          <title>{seoData?.title || '开课吧'}</title>
          <meta name="keywords" content={seoData?.keywords || ''} />
          <meta name="description" content={seoData?.description || ''} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRematch(MyApp);
