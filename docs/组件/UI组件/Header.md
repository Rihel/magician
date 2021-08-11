# 头部 Header

## 通用头部组件

通用头部组件

## 基础使用

```tsx
import React from 'react';
import { Header } from '@magician/ui';
import { Random } from '@magician/utils';
export default () => {
  const defaultLogo = Random.genImage(44, 100, 30, 'Magician', 12);

  return <Header username="lihai" logo={<img src={defaultLogo} />} />;
};
```

## logo

可以是文字或者图片

```tsx
import React from 'react';
import { Header } from '@magician/ui';
export default () => {
  return <Header username="lihai" logo="Magician" />;
};
```

## 左边插槽

```tsx
import React from 'react';
import { Header } from '@magician/ui';

export default () => {
  const LeftNode = <div style={{ color: '#fff' }}>Hello world!</div>;
  return <Header username="lihai" logo="Magician" leftNode={LeftNode} />;
};
```

## 右边插槽

```tsx
import React from 'react';
import { Header } from '@magician/ui';
export default () => {
  const RightNode = <div style={{ color: '#fff' }}>Hello world!</div>;
  return <Header username="lihai" logo="Magician" rightNode={RightNode} />;
};
```

## 自定义下拉菜单

```tsx
import React from 'react';
import { Header } from '@magician/ui';
export default () => {
  const RightNode = (
    <div logo="Magician" style={{ color: '#fff' }}>
      Hello world!
    </div>
  );

  const customDropdownList = [
    {
      text: '忘记密码',
      handle: () => {
        alert('点我');
      },
    },
  ];

  return (
    <Header
      username="lihai"
      logo="Magician"
      dropdownList={customDropdownList}
    />
  );
};
```

## 自定义 Logo

```tsx
import React from 'react';
import { Header } from '@magician/ui';
export default () => {
  const LogoImage = (
    <img
      style={{ width: 50 }}
      src="https://asset.wenjiangs.com/images/logo.svg"
    />
  );
  return (
    <Header
      username="lihai"
      logo={LogoImage}
      logoLink="https://www.wenjiangs.com/doc/less-mixinguards"
    />
  );
};
```

## 自定义 LogoTooltip

```tsx
import React from 'react';
import { Header } from '@magician/ui';
export default () => {
  return (
    <Header
      username="lihai"
      logo="Magician"
      logoLink="https://www.baidu.com"
      logoTooltip="我是tooltip"
    />
  );
};
```

## API

### Props

| 名称         | 描述                 | 类型                            | 默认值 |
| ------------ | -------------------- | ------------------------------- | ------ |
| logo         | logo                 | `string`、`ReactNode`           | `null` |
| logoLink     | logo 链接            | `string`                        | `#/`   |
| logoTooltip  | 提示文字             | `string`                        | `logo` |
| leftNode     | 左插槽               | `ReactNode`                     |        |
| rightNode    | 右插槽               | `ReactNode`                     |        |
| username     | 用户名               | `string`                        |        |
| dropdownList | 右侧鼠标移入下拉菜单 | `DropdownItem[]`， 查看下方配置 |        |

### `DropdownItem`

```ts
export interface DropdownItem {
  text: string;
  handle: () => void;
}
```
