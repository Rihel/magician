# 面包屑 BreadcrumbPlus

## 加强版面包屑组件

读取配置、当前路由、匹配数据自动识别面包屑，配置是基于`umi`路由配置的树状结构，增加了配置

## 基础使用

```tsx
import React, { useState, useMemo } from 'react';
import { BreadcrumbPlus } from '@magician/ui';
import {
  message,
  Button,
  List,
  Alert,
  Col,
  Typography,
  Row,
  Space,
} from 'antd';
const config = [
  {
    breadTitle: '产品管理',
    path: '/product',
    routes: [
      { path: '/product/list', breadTitle: '产品列表' },
      {
        path: '/product/:productId',
        breadTitle: '{{ productId }}',
        hasClick: true,
        routes: [
          {
            path: '/product/:productId/skuList',
            breadTitle: 'sku管理',
          },
          {
            path: '/product/:productId/skuList/:skuId',
            breadTitle: 'sku详情 / {{ skuId }}',
            routes: [
              {
                path: '/product/:productId/skuList/:skuId/attr',
                breadTitle: 'sku属性',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    breadTitle: '类目管理',
    path: '/category',
    routes: [
      { path: '/category/:categoryId', breadTitle: '类目详情' },
      {
        path: '/category/:categoryId/runtime-instance',
        breadTitle: '类目运行实例',
      },
    ],
  },
];
const products = [
  {
    id: 'e814c475c9528935a457adc1de32da40',
    name: 'iphone',
    description: '苹果手机',
  },
  {
    id: 'a67766e62aa35b8616fa44cd62dbb070',
    name: 'macbook',
    description: '苹果电脑',
  },
  {
    id: 'a0ff1fbba3f4b55f42c01264ec699609',
    name: 'Apple watch',
    description: '苹果表',
  },
  {
    id: '2d8490e6de7b0305dc183b028507d3fd',
    name: 'Apple pencil',
    description: '苹果笔',
  },
  {
    id: '29516c2e8c8a21e4fa351c2662b545a4',
    name: 'iPad Pro',
    description: '平板电脑',
  },
  {
    id: 'cec8d4858b1ee755e546a1b8dd0b61b4',
    name: 'superfly',
    description: '小飞侠产品',
  },
];

export default () => {
  const [product, setProject] = useState(products[0]);
  const [curRoute, setCurRoute] = useState(() => {
    return `/product/${product.id}/skuList`;
  });

  const matchData = useMemo(() => {
    return {
      productId: { text: product.description, value: product.id },
    };
  }, [product]);
  const clickHandle = (value) => {
    message.success(
      `点击了: ${value.title}, 链接为：${value.path}, 使用  react 的 useLocation 跳转吧`,
    );
  };
  const chooseProject = (product) => {
    setProject(product);
    setCurRoute(`/product/${product.id}/skuList`);
  };

  return (
    <>
      <Row justify="center" style={{ marginBottom: 20 }}>
        <BreadcrumbPlus
          style={{
            boxShadow: '0 0 10px rgba(0,0,0,.25)',
            width: '100%',
            padding: 20,
          }}
          curRoute={curRoute}
          routeConfig={config}
          matchData={matchData}
          onClickItem={clickHandle}
          antBreadcrumbProps={{
            separator: '/',
          }}
        />
      </Row>
      <Row gutter={24} justify="center">
        <Col span={12}>
          <Space direction="vertical" size={20}>
            <Alert message="当前路由" type="info" description={curRoute} />
            <div>
              <Typography.Title level={4}>当前匹配参数</Typography.Title>
              <pre
                style={{
                  background: '#eee',
                  border: '1px solid #aeaeae',
                  padding: 20,
                }}
              >
                {JSON.stringify(matchData, null, 2)}
              </pre>
            </div>
          </Space>
        </Col>
        <Col span={12}>
          <List
            dataSource={products}
            size="small"
            renderItem={(item) => {
              return (
                <List.Item
                  actions={[
                    <Button
                      type="primary"
                      onClick={() => chooseProject(item)}
                      ghost
                      size="small"
                    >
                      点我切换路由
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    title={<>{item.name}</>}
                    description={item.description}
                  />
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
    </>
  );
};
```

## 配置

```ts
export interface BreadcrumbPlusItem {
  // 路由url，必须是绝对路径
  path: string;
  // 标题，用于面包屑展示的文案，支持模板替换，example: {{productId}}
  breadTitle: string;
  // 子路由
  children?: BreadcrumbPlusItem[];
  // 子路由
  routes?: BreadcrumbPlusItem[];
  // 是否可点击
  hasClick?: boolean;
  // 其余参数，做个冗余
  [key: string]: any;
}
```

`children` 和 `routes` 都是代表子路由, 如果共用`children`优先级高于 `routes`

配置示例

```json
[
  {
    "breadTitle": "产品管理",
    "path": "/product",
    "routes": [
      { "path": "/product/list", "breadTitle": "产品列表" },
      {
        "path": "/product/:productId",
        "breadTitle": "{{productId}}",
        "hasClick": true,
        "routes": [
          {
            "path": "/product/:productId/skuList",
            "breadTitle": "sku管理"
          },
          {
            "path": "/product/:productId/skuList/:skuId",
            "breadTitle": "sku详情 / {{skuId}}",
            "routes": [
              {
                "path": "/product/:productId/skuList/:skuId/route",
                "breadTitle": "sku路由"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "breadTitle": "类目管理",
    "path": "/category",
    "routes": [
      { "path": "/category/:categoryId", "breadTitle": "类目详情" },
      {
        "path": "/category/:categoryId/runtime-instance",
        "breadTitle": "类目运行实例"
      }
    ]
  }
]
```

匹配数据

```ts
export type MatchData = {
  [key: string]: {
    text: string;
    value: string;
  };
};

// example:
const matchData: MatchData = {
  productId: { text: '苹果手机', value: 'jaksldkfjasd' },
  skuId: { text: '颜色', value: 'adjlfaskdkfljasdf' },
};
```

## API

<table>
  <thead>
    <tr>
      <th width="100">名称</th>
      <th width="600">描述</th>
      <th >类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>curRoute</td>
      <td>当前路由地址，通过 <code>react-router-dom</code> 的 <code>useLocation</code> 可以获取 <a href="https://reactrouter.com/web/api/Hooks/uselocation">查看</a></td>
      <td><code>string</code></td>
      <td>必须</td>
    </tr>
      <tr>
      <td>routeConfig</td>
      <td>路由配置，<a href="#配置">查看</a></td>
      <td><code>BreadcrumbPlusItem[]</code></td>
      <td>必须</td>
    </tr>
    <tr>
      <td>matchData</td>
      <td>匹配的数据</td>
      <td><code>string</code> | <code>number</code></td>
      <td>必须</td>
    </tr>
    <tr>
      <td>antBreadcrumbProps</td>
      <td>ant design 的面包屑配置 <a href="https://ant.design/components/breadcrumb-cn/#API">查看</a></td>
      <td><code>MatchData</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td>onClickItem</td>
      <td>点击回调</td>
      <td><code>(data: BreadcrumbPlusItem) =>void</code></td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>
