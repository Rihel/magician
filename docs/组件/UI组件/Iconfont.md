# Iconfont

## 图标

## 基础使用

```tsx
import React from 'react';
import { Iconfont } from '@r-magician/ui';

export default () => {
  return <Iconfont type="devops" style={{ fontSize: '30px' }} />;
};
```

## 所有图标

```tsx
import React from 'react';
import { Iconfont } from '@r-magician/ui';
import { Tooltip, Typography } from 'antd';

const iconTypes = [
  'bookmarkLine',
  'yapi',
  'qrcode',
  'barChart',
  'hand',
  'bookmark',
  'shieldCheck',
  'rocket',
  'resource',
  'apollo',
  'archery',
  'add',
  'api',
  'bug',
  'data',
  'database',
  'devops',
  'governance',
  'log',
  'message',
  'tapd',
  'successful',
  'time',
  'nol',
  'gitlab',
  'ump',
  'loki',
  'project',
  'arrowRight',
  'menu2',
];
export default () => {
  return (
    <ul
      style={{
        display: 'grid',
        gridColumnGap: '1px',
        gridRowGap: '1px',
        gridTemplateColumns: 'repeat(5, 1fr)',
        listStyle: 'none',
        padding: 0,
        border: '1px solid #efefef',
      }}
    >
      {iconTypes.map((type, index) => {
        return (
          <li
            key={type}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px 0',
              borderLeft: index % 5 === 0 ? 'none' : '1px solid #efefef',
              borderBottom:
                index + 1 - iconTypes.length > 0 ? 'none' : '1px solid #efefef',
            }}
          >
            <Tooltip title={`icon类型为: ${type}`}>
              <Iconfont type={type} style={{ fontSize: '30px' }} />
            </Tooltip>
            <Typography.Text
              style={{ marginTop: '10px' }}
              copyable={{
                text: `<Iconfont type="${type}"/>`,
              }}
            >
              {type}
            </Typography.Text>
          </li>
        );
      })}
    </ul>
  );
};
```
