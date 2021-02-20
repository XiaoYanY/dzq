import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import classnames from 'classnames';
import css from './styles.styl';
import css1 from '../styles.styl';
import Header from '../../components/Header';
import TabPage from './components/tabPage';

const cx = classnames.bind({ ...css, ...css1 });

const Home = () => {
  return (
    <div>
      <Head>
        <title>博客主页</title>
      </Head>
      <Header />
      <div className={cx('containerWrap')}>
        <TabPage />
      </div>
    </div>
  );
};
export default withRouter(Home);
