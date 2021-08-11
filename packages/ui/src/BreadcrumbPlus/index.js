import React, { useMemo } from 'react';

import { Breadcrumb } from 'antd';
import { Tree } from '@r-magician/utils';
import { bem } from '../utils/config';
import classnames from 'classnames';
import clone from 'ramda/es/clone';

const breadcrumb = bem('breadcrumb-plus');

const engine = (tpl, data) => {
  const regexp = /{{\s+(.+?)\s+}}/g;
  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = regexp.exec(tpl)) !== null) {
    const [m, key] = match;
    // eslint-disable-next-line no-param-reassign
    tpl = tpl.replace(m, key ? data[key] : '');
    regexp.lastIndex = 0;
  }
  return tpl;
};

const convertFromMatchData = (data, matchData) => {
  const newData = clone(data);
  const engineData = Object.keys(matchData).reduce(
    (acc, item) => ({ ...acc, [item]: matchData[item].text }),
    {},
  );
  Object.keys(matchData).forEach((key) => {
    newData.path = newData.path.replace(`:${key}`, matchData[key].value);
  });
  newData.breadTitle = engine(newData.breadTitle, engineData);
  return newData;
};

const BreadcrumbPlus = ({
  curRoute,
  routeConfig,
  matchData,
  antBreadcrumbProps,
  className,
  onClickItem,
  style,
}) => {
  const tree = useMemo(() => {
    return new Tree(routeConfig, {
      rootValue: {
        breadTitle: '根',
        path: '/',
      },
      pickData: (data) => ({
        breadTitle: data.breadTitle,
        path: data.path,
        hasClick: data.hasClick,
      }),
    });
  }, [routeConfig]);
  /**
   * 1. 在多叉树找到节点路径
   * 2. 替换节点path的动态数据，返回真实渲染面包屑数据
   */
  const paths = useMemo(() => {
    const currentNodes = tree.findPath((node) => {
      const convertedData = convertFromMatchData(node.data, matchData);
      return convertedData.path === curRoute;
    });

    return currentNodes.map((item) => convertFromMatchData(item, matchData));
  }, [curRoute, matchData]);

  return (
    <div className={classnames(breadcrumb(), className)} style={style}>
      <Breadcrumb {...antBreadcrumbProps}>
        {paths.map((item) => {
          return (
            <Breadcrumb.Item key={item.path}>
              {item.hasClick ? (
                <span
                  onClick={() => onClickItem && onClickItem(item)}
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                >
                  {item.breadTitle}
                </span>
              ) : (
                item.breadTitle
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};
BreadcrumbPlus.defaultProps = {
  curRoute: '',
  routeConfig: [],
  matchData: {},
  antBreadcrumbProps: {},
};
export default BreadcrumbPlus;
