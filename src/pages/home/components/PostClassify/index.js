import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import classnames from 'classnames/bind';
import { List } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import css from './styles.styl';
import css1 from '../../styles.styl';

const cx = classnames.bind({ ...css, ...css1 });

const classifyData = [
  {
    id: 0,
    name: '全部',
    number: 1
  },
  {
    id: 1,
    name: '官方动态',
    number: 1
  },
  {
    id: 2,
    name: '使用交流',
    number: 1
  },
  {
    id: 3,
    name: 'Bug反馈',
    number: 1
  },
  {
    id: 4,
    name: '功能建议',
    number: 1
  },
  {
    id: 5,
    name: '案例库',
    number: 1
  },
  {
    id: 6,
    name: '开发者',
    number: 1
  },
  {
    id: 7,
    name: '云服务',
    number: 1
  }
];

const Index = () => {
  const [activedId, setActivedId] = useState(0);
  const onChange = id => {
    console.log('当前选中', id);
  };

  return (
    <List
      style={{ padding: '0 20px' }}
      dataSource={classifyData}
      renderItem={(item, index) => (
        <List.Item
          className={
            activedId === item.id
              ? cx('listItem', 'listItemActived')
              : cx('listItem')
          }
          onClick={() => {
            onChange(item.id);
          }}
        >
          {index === 0 && <LeftOutlined className={cx('listItemIcon')} />}
          <p className={cx('title')}>{item.name}</p>
          <p className={cx('count')}>{item.number}</p>
        </List.Item>
      )}
    />
  );
};
export default withRouter(Index);
