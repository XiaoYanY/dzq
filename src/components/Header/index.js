import React from 'react';
import classnames from 'classnames/bind';
import { Button, Input, Space, Image } from 'antd';
import css from './styles.styl';
import css1 from '../../pages/styles.styl';

const cx = classnames.bind({ ...css, ...css1 });

const { Search } = Input;

const Header = () => {
  const onSearch = value => {
    console.log(value);
  };
  return (
    <React.Fragment>
      <div className={css.headerWrapper}>
        <div className={cx('headerContainer', 'containerWrap')}>
          <div className={css.left}>
            <Space size={30}>
              <Image src="https://img.kaikeba.com/a/90209180201202xvkg.jpg" />
              <Search
                size="large"
                placeholder="搜索"
                onSearch={onSearch}
                className="search"
                style={{ width: '300px' }}
              />
            </Space>
          </div>
          <div className={css.right}>
            <Space size={20}>
              <Button className={css.signIn}>登陆</Button>
              <Button type="primary">注册</Button>
            </Space>
          </div>
        </div>
      </div>
      {/* <style jsx>{`
        .search.ant-input-group-wrapper {
          width: 300px;
        }
        .search .ant-btn.ant-input-search-button {
          border-left: none;
        }
      `}</style> */}
    </React.Fragment>
  );
};

export default Header;
