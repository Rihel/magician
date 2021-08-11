# 递归菜单 RecursionMenu

```tsx
import React from 'react';
import { RecursionMenu } from '@magician/ui';
import { Menu } from 'antd';
import { ContainerOutlined, AuditOutlined } from '@ant-design/icons';
import { Random } from '@magician/utils';
const { genTree, getOneFactroy, genRangeNumber, genStr } = Random;
const iconsFactroy = require.context('@ant-design/icons', false, /.*\.js/);
const icons = iconsFactroy
  .keys()
  .filter((key) => key.toLowerCase().includes('outlined'))
  .map((key) => iconsFactroy(key).default);

const menuList = genTree(
  genRangeNumber(3, 5),
  (id) => ({
    title: `菜单${id}`,
    route: `/route/${id}`,
    type: 'menu',
  }),
  2,
);

const getIcon = getOneFactroy(icons);

export default () => {
  return (
    <RecursionMenu
      style={{ width: 200 }}
      dataSource={menuList}
      urlKey="route"
      menuProps={{
        theme: 'dark',
        mode: 'inline',
      }}
      renderIcon={() => {
        const Icon = getIcon();
        return <Icon />;
      }}
      isRender={(node) => node.type === 'menu'}
    />
  );
};
```

## API

### Props

| 名称        | 描述                                                     | 类型                | 默认值   |
| ----------- | -------------------------------------------------------- | ------------------- | -------- |
| urlKey      | url 字段                                                 | `string`            | url      |
| childrenKey | 子菜单列表字段                                           | `string`            | children |
| uniqueKey   | 唯一标识字段                                             | `string`            | id       |
| titleKey    | 标题字段                                                 | `string`            | title    |
| dataSource  | 标题字段                                                 | `string`            | []       |
| isRender    | 是否需要渲染，传入一个函数，参数是当前节点对象           | `(node)=>ReactNode` |          |
| renderIcon  | 渲染图标,传入一个函数，参数是当前节点对象                | `(node)=>ReactNode` |          |
| menuProps   | [menu](https://ant.design/components/menu-cn/#API)的属性 |                     |          |
