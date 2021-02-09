import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import styles from './styles.styl';

const Home = ({ user }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="../../assert/logo.png" />
    </Head>
    {/* 什么时候走此页面 */}
  </div>
);

const mapState = ({ home }) => {
  return { ...home };
};

const mapDispatch = dispatch => ({
  getUser: () => dispatch.home.getUser()
});

export default connect(mapState, mapDispatch)(Home);
