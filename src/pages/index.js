import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import styles from './styles.styl';

const Home = ({ user }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to FIG-SSR Home page!</h1>

      <div className={styles.stark}>Hi {user.name}</div>

      <p className="description">{user.info}</p>

      <div className="row">
        <a href="https://nextjs.top/docs" className="col-md-4 card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about FIG-SSR in the documentation.</p>
        </a>
        <a href="https://nextjs.top/learn" className="col-md-4 card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about FIG-SSR by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="col-md-4 card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the FIG-SSR GitHub.</p>
        </a>
      </div>
    </div>
  </div>
);

const mapState = ({ home }) => {
  return { ...home };
};

const mapDispatch = dispatch => ({
  getUser: () => dispatch.home.getUser()
});

export default connect(mapState, mapDispatch)(Home);
