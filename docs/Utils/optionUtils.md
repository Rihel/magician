# 选项工具 OptionUtils

```js
import { OptionsUtils } from '@magician/utils';
```

在很多表单会有各种选项场景，如下拉菜单、checkbox、radio 等，并要求展示所选择的文本内容。有些选项列表可能是从远程获取，为此，封装了该工具方法，生成 option 对象，对象提供便捷方法。

### 基础使用

```jsx
import React, { useState } from 'react';
import { OptionUtils } from '@magician/utils';
import { Select, Divider } from 'antd';
const hobbyEnum = OptionUtils.createEnum(['GAME', 'DRAW', 'SPORT']);

const hobbyOptions = OptionUtils.createOptions([
  { label: '游戏', value: hobbyEnum.GAME },
  { label: '绘画', value: hobbyEnum.DRAW },
  { label: '运动', value: hobbyEnum.SPORT },
]);

export default () => {
  const [value, setValue] = useState(hobbyEnum.GAME);
  return (
    <div>
      当前值： {value}
      <Divider />
      当前文本： {hobbyOptions.getLabel(value)}
      <Divider />
      <Select
        value={value}
        style={{ width: 200 }}
        onChange={(e) => setValue(e)}
      >
        {hobbyOptions.getOptions().map((item) => {
          return (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select>
      <Divider />
      {hobbyEnum.isGame(value) ? '你选择的是游戏' : '非游戏哈'}
    </div>
  );
};
```

### 远程处理

```jsx
import React, { useState, useRef } from 'react';
import { OptionUtils, Random } from '@magician/utils';
import { Loading } from '@magician/ui';
import { Select, Divider } from 'antd';
import { useRequest } from 'ahooks';

const sleep = (time = 3000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const genId = Random.idGeneratorFactroy();
const fakeFetch = () =>
  sleep().then(() =>
    Random.genArr(10, () => ({
      id: genId(),
      name: Random.genStr(2),
      age: Random.genRangeNumber(20, 75),
    })),
  );

export default () => {
  const [value, setValue] = useState(null);
  const ref = useRef({});
  const { loading, data } = useRequest(fakeFetch, {
    onSuccess(data) {
      setValue(data[0].id);
    },
  });
  ref.current = OptionUtils.createOptions({
    list: data || [],
    labelKey: 'name',
    valueKey: 'id',
  });
  if (loading) return <Loading />;
  return (
    <div>
      当前值： {value}
      <Divider />
      当前文本： {ref.current.getLabel(value)}
      <Divider />
      <Select
        value={value}
        style={{ width: 200 }}
        onChange={(e) => setValue(e)}
      >
        {ref.current.getOptions().map((item) => {
          return (
            <Select.Option key={item.id} value={item.value}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select>
      <Divider />
    </div>
  );
};
```

### API

#### createOptions

```ts

interface Option {
    label: string,
    value: any,
    [key:string]: any
  }

interface OptionConfig {
  // 数据源
 list: any[],
 // 文案的key
 labelKey: string,
 // 值的key
 valueKey: string
}

interface OptionReturn {
  // 获取文案
  getLabel: (value:any) => string
  // 获取选项列表
  getOptions: ()=> Array<Option>
  // 获取选项数据
  getOption: (value:any) => Option
}

OptionsUtils.createOptions(params: Array<{label: string, value: any}> | OptionConfig) : OptionReturn

```

#### createEnum

传入一个字符串数组，创建一个枚举对象，并提供`isxxx`的工具函数

```js
// 第二个参数为开启常量模式，开启后所有属性格式为  大写_大写， 如果不开启传入啥就是啥
const resourceEnum = OptionUtils.createEnum(
  ['OSS', 'host', 'k8s-namespace'],
  true,
);

resourceEnum.OSS; // => OSS
resourceEnum.HOST; // => HOST
resourceEnum.K8S_NAMESPACE; // => K8S_NAMESPACE

resourceEnum.isOss('K8S_NAMESPACE'); // => true
resourceEnum.isHost('Host'); // => false
```

```ts
interface EnumResult {
  [key:string]: string
  // xxx 指的是传入的数组
  isXXX: (value)=>boolean
}
OptionsUtils.createEnum(list:string[], constantMode = false) : EnumResult

```
