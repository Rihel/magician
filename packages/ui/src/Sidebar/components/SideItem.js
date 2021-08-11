import React, { useCallback } from 'react';

import Transition from '../../Transition';
import classNames from 'classnames';
import { sidebarCls } from '../config';

const SideItem = ({
  collapsed,
  text,
  icon,
  url,
  right,
  contentClass,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={classNames([
        sidebarCls('item'),
        className,
        !icon && 'no-icon',
      ])}
      style={style}
      {...props}
    >
      {icon && <div className={sidebarCls('item-icon')}>{icon}</div>}
      <Transition.FadeLeft show={!collapsed}>
        <div className={classNames([sidebarCls('item-content'), contentClass])}>
          <div className={sidebarCls('item-text')}>{text}</div>
          <div className={sidebarCls('item-right')}>{right}</div>
        </div>
      </Transition.FadeLeft>
    </div>
  );
};

export default React.memo(SideItem);
