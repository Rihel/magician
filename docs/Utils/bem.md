# CSS 命名 Bem

[bem 规范](https://www.bemcss.com/)

```js
import { createBem } from '@r-magician/utils';

// 传参指的是给所有加统一前缀
const bem = createBem('hobby');

// 声明一个模块来类名
const searchCreator = bem('search');

searchCreator(); // => hobby-search
searchCreator('btn'); // => hobby-search-btn
searchCreator('btn__item'); // => hobby-search-btn__item

const sideCreator = bem('side');
sideCreator(); // hobby-side
sideCreator('a'); // hobby-side-a
```

## API

```ts
createBem(libPrefix?: string) => (blockName:string) => (name:string)=>string
```
