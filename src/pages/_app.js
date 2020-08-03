import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import { Button } from 'antd';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
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
        <div>
          <WhiteSpace size="lg" />
          <NoticeBar
            marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}
          >
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao
            will be delayed during National Day.
          </NoticeBar>
          <WhiteSpace size="lg" />
          <NoticeBar mode="link" onClick={() => alert('1')}>
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao
            will be delayed during National Day.
          </NoticeBar>
          <WhiteSpace size="lg" />
          <NoticeBar mode="closable" icon={null}>
            Remove the default icon.
          </NoticeBar>
          <WhiteSpace size="lg" />
          <NoticeBar
            mode="closable"
            icon={<Icon type="check-circle-o" size="xxs" />}
          >
            Customized icon.
          </NoticeBar>
          <WhiteSpace size="lg" />
          <NoticeBar
            mode="closable"
            action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}
          >
            Closable demo for `actionText`.
          </NoticeBar>
          <WhiteSpace size="lg" />
          <NoticeBar mode="link" action={<span>去看看</span>}>
            Link demo for `actionText`.
          </NoticeBar>
        </div>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRematch(MyApp);
