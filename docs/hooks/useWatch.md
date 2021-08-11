# useWatch

监听状态变化，类似 vue 中 watch 的用法

```tsx
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { useWatch } from '@r-magician/hooks';
export default () => {
  const [state, setState] = useState('');

  const stop = useWatch(state, (prevState) => {
    document.title = state;
  });

  return (
    <div>
      设置页面标题：
      <Input value={state} onChange={(e) => setState(e.target.value)} />
      <Button onClick={stop}>停止Watch</Button>
    </div>
  );
};
```

## API

```ts
useWatch(观察的状态, (上次的状态)=>void, {
  // 设置为true则组件挂载就会执行
  immediate: boolean
})
```
