import React from 'react';
import Head from 'next/head';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import css from './styles.styl';

const cx = classNames.bind(css);

const About = ({ list }) => (
  <>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
    <div>
      <WhiteSpace size="lg" />
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will
        be delayed during National Day.
      </NoticeBar>
      <WhiteSpace size="lg" />
      <NoticeBar mode="link" onClick={() => alert('1')}>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will
        be delayed during National Day.
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
    <div className="hero">
      <h1 className="title">Welcome to about page!</h1>

      <div className={css.stark}>This is about page </div>

      <ul className={cx('list', 'description')}>
        {list && list.map(i => <li key={i.title}>{i.title}</li>)}
      </ul>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </>
);

About.getInitialProps = async ({ store }) => {
  await store?.dispatch?.demo?.query();
  return {};
};

const mapState = ({ demo }) => {
  return { ...demo };
};

const mapDispatch = dispatch => ({
  query: () => dispatch.demo.query()
});

export default connect(mapState, mapDispatch)(About);
