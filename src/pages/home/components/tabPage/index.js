import React, { useState } from 'react';
import { withRouter, Link } from 'next/router';
import classnames from 'classnames/bind';
import { Select, List, Typography } from 'antd';
import css from './styles.styl';
import css1 from '../../styles.styl';

const { Option } = Select;
const cx = classnames.bind({ ...css, ...css1 });

const tabArr = [
  {
    label: 'all',
    value: '所有'
  },
  {
    label: 'prime',
    value: '精华'
  },
  {
    label: 'classify',
    value: '类型',
    children: [
      {
        label: 'noRest',
        value: '不限'
      },
      {
        label: 'text',
        value: '文本'
      },
      {
        label: 'post',
        value: '帖子'
      },
      {
        label: 'video',
        value: '视频'
      },
      {
        label: 'picture',
        value: '图片'
      },
      {
        label: 'voice',
        value: '语音'
      },
      {
        label: 'question',
        value: '问答'
      },
      {
        label: 'goods',
        value: '商品'
      }
    ]
  },
  {
    label: 'sorting',
    value: '排序',
    children: [
      {
        label: 'noRestSort',
        value: '不限'
      },
      {
        label: 'postTime',
        value: '按发帖时间'
      },
      {
        label: 'commentTime',
        value: '按评论时间'
      }
    ]
  }
];
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

const Index = () => {
  const [activedNum, setActivedNum] = useState({
    tab: 'all',
    screen: ''
  });
  const tabChange = name => {
    const b = 'tabActived';
    if (activedNum.tab === name) {
      return b;
    }
    return '';
  };

  return (
    <React.Fragment>
      <div className={css.tabWrap}>
        {tabArr.map((item, index) =>
          item.children ? (
            <div className={cx('tabItem')} key={item.label}>
              <Select
                defaultValue={item.value}
                bordered={false}
                className={cx('tabList', 'fontColor')}
                onChange={value => {
                  setActivedNum({
                    ...activedNum,
                    screen: value
                  });
                }}
              >
                {item.children.map(text => (
                  <Option value={text.label} key={text.label}>
                    {text.value}
                  </Option>
                ))}
              </Select>
            </div>
          ) : (
            <p
              className={cx('tabItem', tabChange(item.label))}
              key={item.label}
              onClick={() => {
                setActivedNum({
                  ...activedNum,
                  tab: item.label
                });
              }}
            >
              {item.value}
            </p>
          )
        )}
      </div>
      <div className={cx('tabWrap')}>
        <List
          className={cx('listWrap')}
          dataSource={data}
          renderItem={item => (
            <List.Item className={cx('listItem')}>
              <Typography.Text className={css.fontColor}>
                置顶&#12288;
              </Typography.Text>
              {item}
              {/* <Link to="/check">{item}</Link> */}
            </List.Item>
          )}
        />
      </div>
    </React.Fragment>
  );
};
export default withRouter(Index);
