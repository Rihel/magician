import { Empty, Input, Row } from 'antd';
import React, { useMemo, useRef, useState } from 'react';

import AntIcon from '../../AntIcon';
import SideItem from './SideItem';
import Waterfall from '../../Waterfall';
import clone from 'ramda/es/clone';
import { sidebarCls } from '../config';
import { useDebounce } from 'ahooks';
import { useSidebar } from '../context';

const CategoryItems = ({ data }) => {
  const { renderRight, clickItemHandle } = useSidebar();
  return (
    <div className={sidebarCls('category-item')}>
      <div className={sidebarCls('category-item-head')}>{data.title}</div>
      {data.items.length ? (
        <ul className={sidebarCls('category-item-list')}>
          {data.items.map((item) => (
            <li key={item.id}>
              <SideItem
                onClick={() => clickItemHandle(item)}
                right={renderRight(item)}
                className={sidebarCls('category-item-list__item')}
                text={item.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};

const AllPane = ({ onClose, categories, ...props }) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, { wait: 100 });

  const searchList = useMemo(() => {
    if (!debouncedValue) return categories;
    const list = clone(categories);
    return list
      .map((item) => {
        return {
          ...item,
          items: item.items.filter((v) => v.title.includes(debouncedValue)),
        };
      })
      .filter((item) => item.items.length > 0);
  }, [categories, debouncedValue]);

  const wref = useRef(null);

  return (
    <div className={sidebarCls('all-pane')} {...props}>
      <div className={sidebarCls('all-pane-head')}>
        <div className={sidebarCls('all-pane-head__search-box')}>
          <Input.Search
            placeholder="请输入搜索关键字"
            allowClear
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.trim())}
          />
        </div>
        <div className={sidebarCls('all-pane-head__close')} onClick={onClose}>
          <AntIcon type="close-outlined" />
        </div>
      </div>
      <div className={sidebarCls('all-pane-content')}>
        {searchList.length ? (
          <Waterfall columns={3} refreshDeps={[debouncedValue]} ref={wref}>
            {searchList.map((item) => {
              return <CategoryItems key={item.id} data={item} />;
            })}
          </Waterfall>
        ) : (
          <Row justify="center">
            <Empty description="暂无数据" />
          </Row>
        )}
      </div>
    </div>
  );
};

export default AllPane;
