import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'r-magician',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/',
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  history: {
    type: 'hash',
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/Rihel/magician',
    },
  ],
  dynamicImport: {},
  lessLoader: {
    javascriptEnable: true,
  },
});
