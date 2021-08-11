# 随机数据 Random

```js
import { Random } from '@r-magician/utils';
```

## `genRangeNumber`生成指定范围内的某个数字

```ts
Random.genRangeNumber(min: number, max: number):number;
```

```jsx
import { Random } from '@r-magician/utils';
import { AntIcon } from '@r-magician/ui';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Slider, Descriptions, Space } from 'antd';
export default () => {
  const [value, setValue] = useState([0, 20]);

  const gen = useCallback(() => {
    return Random.genRangeNumber(value[0], value[1]);
  }, [value]);

  const [randomValue, setRandomValue] = useState(() => gen());

  useEffect(() => {
    setRandomValue(gen());
  }, [value]);

  return (
    <div>
      <Slider
        range
        value={value}
        min={0}
        max={100}
        onChange={(e) => {
          setValue(e);
        }}
      />
      <Descriptions column={1}>
        <Descriptions.Item label="当前选取范围值">
          {value.toString()}
        </Descriptions.Item>
        <Descriptions.Item label="生成的随机值">
          <Space>
            {randomValue}
            <Button
              onClick={() => setRandomValue(gen())}
              icon={<AntIcon type="reload-outlined" />}
            ></Button>
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
```

## `genStr`生成指定字符数量的汉字段落

```ts
Random.genStr(size:number):string;
```

```jsx
import { Random } from '@r-magician/utils';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Space } from 'antd';
export default () => {
  const [state, setState] = useState('');
  const generate = () => {
    setState(Random.genStr(30));
  };
  return (
    <Space direction="vertical">
      <Button onClick={generate}>点我</Button>
      <div>{state}</div>
    </Space>
  );
};
```

## `genImage`生成图片

生产包含文字和颜色的图片，返回 base64 字符串

```ts
Random.genStr(hue: number, w:number,h:number, text: string, fontSize?:number):string;
```

- `hue`: `hsl`函数的色相
- `w`: 宽度
- `h`: 高度
- `text`: 文案
- `fontSize`: 字体大小

```jsx
import { Random } from '@r-magician/utils';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Space } from 'antd';
export default () => {
  const [state, setState] = useState('');
  const generate = () => {
    setState(
      Random.genImage(
        Random.genRangeNumber(0, 360),
        200,
        340,
        Random.genStr(3),
      ),
    );
  };
  return (
    <Space direction="vertical">
      <Button onClick={generate}>点我</Button>
      <div>
        <img src={state} />
      </div>
    </Space>
  );
};
```

## `genArr`生成随机数组

```ts
Random.genArr(size: number, factroy?: (index:number)=>any): any[];
```

- `size`: 指定数组长度大小
- `factroy`: 可选参数，工厂函数。用户生成数组元素，默认返回索引值

## `idGeneratorFactroy`自增 id 生成器

返回自增`id`方法, 支持持久化到本地存储，默认存储至`LocalStorage`, 可通过设置 `options.storage` 设置存储模式

```ts
Random.idGeneratorFactroy(storageKey?: string, options?: { step:number, storage: Storage }): ()=>number
```

- `storageKey`: 存储 key 值
- `options`: 配置
  - `step`: 自增步长
  - `storage`: 存储器设置，默认`Localstorage`, 可设置 `sessionStorage` 或实现 `getItem` 和 `setItem`方法的对象

```js
import { Random } from '@r-magician/utils';
const genId = Random.idGeneratorFactroy();
genId(); // 1
genId(); // 2
genId(); // 3

// 存储到 Localstorage

const genIdForStorage = Random.idGeneratorFactroy('id', {
  step: 2,
});
genIdForStorage(); // 2
genIdForStorage(); // 4
genIdForStorage(); // 6

// 自定义 storage

const storage = {
  idMap: new Map(),
  setItem: (key, value) => {
    return this.idMap.set(key, value);
  },
  getItem: (key) => {
    return this.idMap.get(key);
  },
};

const genIdForCustomStorage = Random.idGeneratorFactroy('id', {
  step: 2,
  storage,
});
genIdForCustomStorage(); // 2
genIdForCustomStorage(); // 4
genIdForCustomStorage(); // 6
```

## `getOneFactroy` 从数组中随机抽取某个元素

传入一个数组，返回抽取函数

```ts
Random.getOneFactroy(list:any[] = []): ()=>any
```

- `list`: 待抽取数组

```jsx
import { Random } from '@r-magician/utils';
import { Grid } from '@r-magician/ui';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Slider, Descriptions, Space, Alert } from 'antd';

const itemStyle = {
  height: '100%',
  display: 'block',
  lineHeight: '100px',
  border: '1px solid #efefef',
  textAlign: 'center',
  fontSize: 12,
};

const items = [
  'macbook pro',
  'iphone 12',
  'ipad pro',
  '香奈儿香水',
  '施华洛世奇项链',
  '阿玛尼口红',
  '三亚7天游',
  '巴厘岛7天游',
  '瑞士军包',
];
const getOne = Random.getOneFactroy(items);
export default () => {
  const [value, setValue] = useState('');
  const lottery = useCallback(() => {
    const v = getOne();
    setValue(v);
  }, []);
  return (
    <Space direction="vertical">
      <Button onClick={lottery} size="large" type="primart">
        点我抽奖
      </Button>

      {value && (
        <Alert
          message={value}
          description="恭喜您中奖了，联系客服领奖吧"
          type="success"
        />
      )}

      <Grid
        style={{ width: 300, height: 300 }}
        height={100}
        col={3}
        cellStyle={itemStyle}
      >
        {items.map((item) => {
          return (
            <span
              style={{ color: item === value ? 'red' : 'black' }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </Grid>
    </Space>
  );
};
```

## `genTree`

生成随机数组树结构，节点默认自带`id`、`idPath`、`parentId`、`children`属性

```ts
Random.getOneFactroy(size:number, factroy:(id:number)=>any, level?:number): ()=>any
```

- `size`: 数组长度
- `factroy`: 节点工厂函数，参数为节点唯一 id，返回节点数据
- `level`: 可选参数， 树的层级， 默认为 2

```jsx
import { Random } from '@r-magician/utils';
import { Grid } from '@r-magician/ui';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Slider, Descriptions, Space, Typography } from 'antd';
export default () => {
  const [state, setState] = useState([]);
  const generate = () => {
    setState(
      Random.genTree(3, (id) => ({
        name: `节点${id}`,
      })),
    );
  };
  return (
    <div>
      <Button onClick={generate}>点我</Button>
      <Typography.Paragraph>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Typography.Paragraph>
    </div>
  );
};
```
