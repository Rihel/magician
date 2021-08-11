# 瀑布流布局 Waterfall

基于 [bricks.js](http://callmecavs.com/bricks.js/) 封装

## 示例

```tsx
import React, { useEffect, useRef, useState } from 'react';

import { Card } from 'antd';
import { Waterfall } from '@magician/ui';
import { Random } from '@magician/utils';
const { genArr, genStr, genImage, genRangeNumber, idGeneratorFactroy } = Random;
const idCreactor = idGeneratorFactroy();
const values = genArr(100, (i) => {
  return {
    id: idCreactor(),
    image: genImage(
      genRangeNumber(0, 360),
      200,
      genRangeNumber(100, 500),
      genStr(genRangeNumber(2, 5)),
    ),
    name: genStr(5),
    text: genStr(genRangeNumber(10, 50)),
  };
});

const itemWidth = 200;
export default () => {
  const [columns, setColumns] = useState(3);

  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const { width } = container.current.getBoundingClientRect();
      setColumns(Math.floor(width / itemWidth));
    }
  }, []);

  return (
    <div ref={container} style={{ height: 500, overflow: 'scroll' }}>
      <Waterfall columns={columns} gutter={20}>
        {values.map((item) => {
          return (
            <Card
              key={item.id}
              style={{ width: itemWidth }}
              cover={<img src={item.image} />}
            >
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </Card>
          );
        })}
      </Waterfall>
    </div>
  );
};
```

## API

### Props

| 名称        | 描述                           | 类型     | 默认值   |
| ----------- | ------------------------------ | -------- | -------- |
| columns     | 列数                           | `number` | 必须属性 |
| gutter      | 间距                           | `number` | 20       |
| refreshDeps | 传入数组，数组项更新则刷新布局 | `any[]`  | []       |

### Ref 暴露的方法

| 名称       | 描述           | 参数 | 返回值           |
| ---------- | -------------- | ---- | ---------------- |
| getWrapper | 获取瀑布流容器 |      | `HTMLDIVElement` |
| refresh    | 刷新布局       |      | `void`           |
