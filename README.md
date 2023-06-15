## Live demo

https://unpkg.com/quarkc-demo-celebrate@latest/demo.html

## Installation

Use npm:
```js
npm install --save quarkc-demo-celebrate
```

## Usage
Use NPM
```js
import "quarkc-demo-celebrate"
```

Use CDN:
```html
<script src="https://fastly.jsdelivr.net/npm/quarkc@latest"></script>
<script type="module" src="https://unpkg.com/quarkc-demo-celebrate@latest"></script>
```

然后作为正常标签/组件使用：
```html
// 可运行于任何前端框架中
<quarkc-demo-celebrate><quarkc-demo-celebrate>
```

## Build

体积极小！

```bash
➜  quarkc-demo-celebrate git:(master) npm run build

> quarkc-demo-celebrate@0.0.11 build
> rimraf lib && vite build --config vite.config.build.ts

vite v4.3.9 building for production...
✓ 3 modules transformed.
lib/types/index.d.ts  0.57 kB
lib/index.js          2.80 kB │ gzip: 1.27 kB
lib/types/index.d.ts  0.57 kB
lib/index.umd.js      2.46 kB │ gzip: 1.22 kB
✓ built in 1.65s
```
