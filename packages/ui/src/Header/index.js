import './style/index.less';

import { Dropdown, Menu, Tooltip } from 'antd';

import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { bem } from '../utils/config';
import classnames from 'classnames';

const header = bem('header');

const Header = (props) => {
  const menu = (
    <Menu>
      {props.dropdownList &&
        props.dropdownList.length > 0 &&
        props.dropdownList.map((item) => {
          return (
            <Menu.Item onClick={item.handle} key={item.text}>
              {item.text}
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <div className={header()}>
      <div className={header('left')}>
        <div
          className={classnames([
            header('logo'),
            props.leftNode ? 'has-left-node' : '',
          ])}
        >
          <a
            href={props.logoLink}
            target="_blank"
            className={header('logo__inner')}
          >
            {props.logo && (
              <Tooltip title={props.logoTooltip} placement="bottom">
                {props.logo}
              </Tooltip>
            )}
          </a>
        </div>
        <div className={header('left__node')}>{props.leftNode}</div>
      </div>
      <div className={header('right')}>
        <div className={header('right__node')}>{props.rightNode}</div>
        <div className={header('userbox')}>
          <Dropdown
            className={header('dropdown')}
            overlayClassName={header('dropdown__wrap')}
            overlay={menu}
          >
            <div className={header('userbox__username')}>
              <span>{props.username}</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  logoLink: '#/',
  logoTooltip: 'logo',
};

export default Header;
