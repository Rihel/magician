import React, { forwardRef, memo, useCallback, useContext } from 'react';

import SideItem from './SideItem';
import { sidebarCls } from '../config';
import { useSidebar } from '../context';

const SidebarList = forwardRef(
  ({ data, collapsed, onChnage, ...props }, ref) => {
    const { renderRight, clickItemHandle } = useSidebar();
    return (
      <div
        ref={ref}
        className={sidebarCls('list')}
        style={{
          overflowY: collapsed ? 'hidden' : 'auto',
        }}
        {...props}
      >
        {data.map((item) => {
          return (
            <SideItem
              onClick={() => clickItemHandle(item)}
              onMouseEnter={() => onChnage()}
              key={item.id}
              right={renderRight(item)}
              text={item.title}
              collapsed={collapsed}
              icon={item.icon}
            />
          );
        })}
      </div>
    );
  },
);

export default memo(SidebarList);
