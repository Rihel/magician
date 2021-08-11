# Antd design 的图标 AntIcon

`antd design` 从 4.x 起，每个 icon 都要引入 `@ant-design/icons` 这个包，需要用到某个图标在引入,比较麻烦， 比如：

```tsx
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

export default () => {
  return <UserOutlined />;
};
```

## 基础使用

这个组件是做了层封装，可以通过指定 `type` 属性名称使用，命名格式为 `xxx-xxx`

```tsx
import { AntIcon } from '@magician/ui';
import React from 'react';

export default () => {
  return <AntIcon type="user-outlined" />;
};
```

## Icon 选择器

```tsx
import { AntIcon } from '@magician/ui';
import { Select, Space, Divider } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [type, setType] = useState('user-outlined');
  return (
    <div>
      <AntIcon type={type} />
      <Divider />
      <Select
        allowClear
        value={type}
        onChange={(v) => setType(v)}
        style={{ width: 200 }}
      >
        {AntIcon.iconNames.map((name) => {
          return (
            <Select.Option key={name} value={name}>
              <Space>
                <AntIcon type={name} />
                {name}
              </Space>
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};
```

## API

### Props

| 名称 | 描述     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| type | 图标名称 | `string` |        |
