import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import React from 'react';
const RecursionMenu = ({
  dataSource,
  childrenKey,
  uniqueKey,
  titleKey,
  urlKey,
  isRender,
  menuProps,
  renderIcon,
  ...props
}) => {
  const renderMenu = (list) => {
    return list
      .filter((item) => (isRender ? isRender(item) : true))
      .map((item) => {
        const children = item[childrenKey];
        const url = item[urlKey];
        const title = item[titleKey];
        const unique = item[uniqueKey];
        const hasChildren = children && children.length > 0;
        const icon = renderIcon && renderIcon(item);
        if (hasChildren) {
          return (
            <Menu.SubMenu key={unique} title={title} icon={icon}>
              {renderMenu(children)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item key={unique} icon={icon}>
            <Link to={url}>{title}</Link>
          </Menu.Item>
        );
      });
  };

  return (
    <Menu {...menuProps} {...props}>
      {renderMenu(dataSource)}
    </Menu>
  );
};

RecursionMenu.defaultProps = {
  dataSource: [],
  childrenKey: 'children',
  uniqueKey: 'id',
  titleKey: 'title',
  urlKey: 'url',
};
export default RecursionMenu;
