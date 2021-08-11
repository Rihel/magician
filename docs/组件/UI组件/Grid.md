# 网格 Grid

## 网格组件

自动化等列布局, 根据子元素数量自动布局

## 基础使用

```tsx
import React from 'react';
import { Grid } from '@magician/ui';
export default () => {
  return (
    <div>
      <Grid gutter={20} col={3}>
        <div>子元素1</div>
        <div>子元素2</div>
        <div>子元素3</div>
      </Grid>
    </div>
  );
};
```

## 表单布局

```tsx
import React from 'react';
import { Grid } from '@magician/ui';
import { Form, Input, Button, Row } from 'antd';
export default () => {
  return (
    <Form>
      <Grid
        gutter={30}
        cellStyle={{ background: '#f1f1f1', padding: 20 }}
        col={2}
      >
        <Form.Item label="字段1">
          <Input />
        </Form.Item>
        <Form.Item label="字段2">
          <Input />
        </Form.Item>
      </Grid>
      <Grid
        gutter={30}
        cellStyle={{ background: '#f1f1f1', padding: 20 }}
        col={3}
      >
        <Form.Item label="字段3">
          <Input />
        </Form.Item>
        <Form.Item label="字段4">
          <Input />
        </Form.Item>
        <Form.Item label="字段5">
          <Input />
        </Form.Item>
      </Grid>
      <Form.Item>
        <Button type="primary" size="large" block>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
```

## 卡片列表

```tsx
import React from 'react';
import { Grid } from '@magician/ui';
import { Card, Button, Row, Input, Col, Space } from 'antd';

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
  return (
    <div>
      <Row justify="space-between" style={{ marginBottom: 20 }}>
        <Col span={6}>
          <Input.Search placeholder="请输入工程名称" />
        </Col>
        <Col span={5} style={{ textAlign: 'right' }}>
          <Space>
            <Button type="primary">申请工程</Button>
            <Button>申请记录</Button>
          </Space>
        </Col>
      </Row>
      <Grid gutter={20} col={5}>
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              actions={[
                <Button type="link">加入购物车</Button>,
                <Button type="link">立即购买</Button>,
              ]}
            >
              <Card.Meta
                title={product.name}
                description={product.description}
              />
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};
```

## API

```ts
export type GridProps = PropsWithChildren<{
  /**
   * 列数
   * @type {number}
   */
  col: number;

  /**
   * 每行的高度
   * @type {number}
   */
  height?: number;

  /**
   * 行样式
   * @type {CSSProperties}
   */
  rowStyle?: CSSProperties;
  /**
   * 网格之间的间距
   * @type {number}
   */
  gutter?: number;
  /**
   * 网格容器样式
   * @type {CSSProperties}
   */
  style?: CSSProperties;
  /**
   * 网格容器类
   * @type {string}
   */
  className?: string;
  /**
   * 网格内容的样式
   * @type {CSSProperties}
   */
  cellStyle?: CSSProperties;
}>;
```
