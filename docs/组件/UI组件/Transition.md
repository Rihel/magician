# 过渡 Transition

基于`react-transition-group/css-transition`封装，提供网页中常见的 CSS 过渡效果

## 基础使用

## 淡入淡出

```tsx
import { Transition } from '@magician/ui';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Button onClick={() => setState((v) => !v)}>切换</Button>
      <Transition.Fade show={state}>
        <div
          style={{
            width: 100,
            height: 100,
            transition: 'all 0.3s linear',
            backgroundColor: 'red',
          }}
        ></div>
      </Transition.Fade>
    </div>
  );
};
```

## 左移

```tsx
import { Transition } from '@magician/ui';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Button onClick={() => setState((v) => !v)}>切换</Button>
      <Transition.FadeLeft show={state}>
        <div
          style={{
            width: 100,
            height: 100,
            transition: 'all 0.3s linear',
            backgroundColor: 'red',
          }}
        ></div>
      </Transition.FadeLeft>
    </div>
  );
};
```

## 右移

```tsx
import { Transition } from '@magician/ui';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Button onClick={() => setState((v) => !v)}>切换</Button>
      <Transition.FadeRight show={state}>
        <div
          style={{
            width: 100,
            height: 100,
            transition: 'all 0.3s linear',
            backgroundColor: 'red',
          }}
        ></div>
      </Transition.FadeRight>
    </div>
  );
};
```

## 下移

```tsx
import { Transition } from '@magician/ui';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Button onClick={() => setState((v) => !v)}>切换</Button>
      <Transition.FadeDown show={state}>
        <div
          style={{
            width: 100,
            height: 100,
            transition: 'all 0.3s linear',
            backgroundColor: 'red',
          }}
        ></div>
      </Transition.FadeDown>
    </div>
  );
};
```

## 上移

```tsx
import { Transition } from '@magician/ui';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <Button onClick={() => setState((v) => !v)}>切换</Button>
      <Transition.FadeUp show={state}>
        <div
          style={{
            width: 100,
            height: 100,
            transition: 'all 0.3s linear',
            backgroundColor: 'red',
          }}
        ></div>
      </Transition.FadeUp>
    </div>
  );
};
```
