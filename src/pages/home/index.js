import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import classnames from 'classnames/bind';
import css from './styles.styl';
import css1 from '../styles.styl';
import Header from '../../components/Header';
import TabPage from './components/TabPage';
import PostClassify from './components/PostClassify';

const cx = classnames.bind({ ...css, ...css1 });

const Home = () => {
  return (
    <div className={css.wrappper}>
      <Head>
        <title>博客主页</title>
      </Head>
      <Header />
      <div className={cx('containerWrap')}>
        <div className={cx('content')}>
          <main className={cx('mainLeft', 'bg')}>
            <TabPage />
          </main>
          <main className={cx('mainRight', 'bg')}>
            <PostClassify />
          </main>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Home);
